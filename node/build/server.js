"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const data_1 = require("./data/data");
console.log(data_1.DataStore.post);
app.get("/todo", (req, res, next) => {
    res.json(data_1.DataStore.todo);
});
app.listen(process.env.PORT || 8888, () => {
    console.log("Server start...");
});
