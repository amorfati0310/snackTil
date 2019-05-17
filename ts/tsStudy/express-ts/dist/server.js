"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', (req, res) => {
    res.send('hello wolrd ts');
});
app.listen(3000, () => {
    console.log('server start ...');
    console.log('watch???');
});
// ts-quickstart express 참고
