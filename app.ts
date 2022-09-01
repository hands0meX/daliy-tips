import cors from "cors";
import { Request, Response } from "express";
import { ExpressBoot } from "./src/ExpressBoot/ExpressBoot";
const port:number = 3002
const app = new ExpressBoot().init()
app.use(cors())

app.get("/drink",(req:Request,res:Response) => {
    const date = new Date()
    const msg:string = `${date.getHours()}点${date.getMinutes()}了，该喝点水了🐮～～`
    res.json(msg)
})

app.listen(port, () => {
    console.log(`你正在监听端口${port}`)
})