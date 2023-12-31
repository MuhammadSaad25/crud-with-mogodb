import express from "express";
import path from "path";
import { productRouter } from "./routes/productsRoutes.mjs";

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use("/api/v1", productRouter);
app.use(express.static(path.join(__dirname, "public")));

app.get("/testing", (req, res) => res.send("server testing ok"));

app.listen(PORT, () => console.log(`app listening on ===>>> ${PORT}`));
