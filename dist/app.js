"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const ExpressBoot_1 = require("./src/ExpressBoot/ExpressBoot");
const port = 3002;
const app = new ExpressBoot_1.ExpressBoot().init();
app.use((0, cors_1.default)());
app.get("/drink", (req, res) => {
    const date = new Date();
    const msg = `${date.getHours()}点${date.getMinutes()}了，该喝点水了🐮～～`;
    res.json(msg);
});
app.listen(port, () => {
    console.log(`你正在监听端口${port}`);
});
