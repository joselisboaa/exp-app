const express = require("express");

const app = express();

app.get("/", (req, res) => {
   return response.json({msg: "server working!"});
});

app.listen(3333)