const path = require("path");
const express = require("express");

const publicPath = path.join(__dirname, "../public/test.html");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(publicPath));
app.listen(port, () => {
  console.log(publicPath);
  console.log(`server dang chay tren port ${port}`);
});
