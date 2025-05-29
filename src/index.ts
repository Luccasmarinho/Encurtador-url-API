import express from "express";
const app = express();
import router from "./router/router.js"

app.use(express.json());
app.use(router);

const port: number = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`))