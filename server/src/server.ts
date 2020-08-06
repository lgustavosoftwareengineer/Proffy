import express from "express";
import cors from "cors";

import routes from "./routes";

const app = express();
app.use(express.json());
app.use(routes);
app.use(cors());

const PORT = 3333;
app.listen(PORT, () => {
  console.log("Server it's running");
});
