import express from "express";
import Config from "@config/index";

const app = express();
const PORT = process.env.PORT || 5000;

Config();

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
