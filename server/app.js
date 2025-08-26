import express from "express";
import { readdir } from "fs/promises";
const app = express();
console.log(app);

const port = 4000;
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});
app.use((req, res, next) => {
  if(req.query.action==="download"){
    res.set("content-Disposition","attachment")
  }
  
  const serveFile = express.static("storage");
  serveFile(req, res, next);
});

app.get("/", async (req, res) => {
  const fileList = await readdir("./storage");
  res.json(fileList);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
