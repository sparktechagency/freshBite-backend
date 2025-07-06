import express, { Request, Response, text } from 'express'
import cors from 'cors'
import status from 'http-status'
import mongoose from 'mongoose'
import { envData } from './app/config'
import { GlobalError } from './app/middleware/globalError'
import { notFound } from './app/middleware/NotFound'
import { router } from './app/routes'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3008",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },
});



app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:3008",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use('/api/v1', router)


io.on("connection", (socket) => {
  console.log("socket connected with backend");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.emit('message','hello message')
});


async function main() {
  await mongoose.connect("mongodb://localhost:27017/express");
  
  

  httpServer.listen(envData.port, () => {
    console.log(`server is run on ${envData.port}`);
  });
   
}


main();


app.use(GlobalError)
app.use(notFound)





