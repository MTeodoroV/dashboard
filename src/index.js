import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import auth from "./routes/auth";
import user from "./routes/user";
import modelo from "./routes/modelo";
import cidade from "./routes/cidade";
import camera from "./routes/camera";
import endereco from "./routes/endereco";
import projeto from "./routes/projeto";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/auth", auth);
app.use("/user", user);
app.use("/modelo", modelo);
app.use("/cidade", cidade);
app.use("/camera", camera);
app.use("/endereco", endereco);
app.use("/projeto", projeto);
app.use("/", user)

app.listen(80);
