"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 5555;
const pgMsg = `Hello, welcome to your express application! \n Your Server is running!`;
const logMsg = `Your express server is running on http://localhost:${PORT}`;
// Sends message at '/' root directory in browser on speecified port number.
app.get('/', (req, res, next) => {
    res.send(pgMsg);
});
app.listen(PORT, () => console.log(logMsg));
