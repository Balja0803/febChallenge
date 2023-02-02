const express = require("express");
const cors = require("cors");

const app = express();
const port = 2030;
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.get("/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
