"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./app/config");
const globalError_1 = require("./app/middleware/globalError");
const NotFound_1 = require("./app/middleware/NotFound");
const routes_1 = require("./app/routes");
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "http://localhost:3008",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type", "Authorization"],
    },
});
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3008",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use('/api/v1', routes_1.router);
io.on("connection", (socket) => {
    console.log("socket connected with backend");
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
    socket.emit('message', 'hello message');
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect("mongodb://localhost:27017/express");
        httpServer.listen(config_1.envData.port, () => {
            console.log(`server is run on ${config_1.envData.port}`);
        });
    });
}
main();
app.use(globalError_1.GlobalError);
app.use(NotFound_1.notFound);
