import express from "express";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
// { } 붙어져있는 이유는 각각의 함수들을 export 했기 때문이다.
const app = express();

app.use("/", globalRouter);
app.use("/user", userRouter);

export default app;
