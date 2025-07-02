import express, { Request, Response, text } from 'express'
import cors from 'cors'
import status from 'http-status'
import mongoose from 'mongoose'
import { envData } from './app/config'
import { GlobalError } from './app/middleware/globalError'
import { notFound } from './app/middleware/NotFound'
import { router } from './app/routes'


const app = express()

app.use(express.json())
app.use(cors())




app.use('/api/v1', router)




async function main() {
    await mongoose.connect("mongodb://localhost:27017/express");

  app.listen(envData.port, () => {
    console.log(`server is run on ${envData.port}`);
  });
   
}


main();


app.use(GlobalError)
app.use(notFound)





