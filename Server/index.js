const express = require("express");
const mongoose = require("mongoose");
const port = 3011;
const app = express();
const cors = require("cors");
const routes = require("./routes/toDoRoutes");
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/Todos");

app.use(routes);
app.listen(port, () => console.log(`Listing on port: ${port}`));
