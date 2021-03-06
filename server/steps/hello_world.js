const express = require("express");
const path = require("path");

const app = express();
const port = 3001;

app.get("/", (req, res) => res.send("Privet, mir!"));

app.listen(port, () =>
  console.log(
    `\x1b[1m`,
    `${path.basename(__filename)} based server are running on port ${port}`
  )
);
