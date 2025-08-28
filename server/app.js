import { log } from "console";
import express from "express";
import { readdir, rm } from "fs/promises";
const app = express();
console.log(app);
app.use(express.json())

const port = 4000;
app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
  });
  next();
});

app.get("/:filename", (req, res) => {
  try {
    const { filename } = req.params;
    if (req.params.action === "download") {
      res.set("Content-Disposition", "attachment");
    }

    res.sendFile(`${import.meta.dirname}/storage/${filename}`);
  } catch (error) {
    console.log(error.message);
  }
});
app.delete("/:filename", async(req, res) => {
  try {
    const { filename } = req.params;
    console.log(filename);
    const filePath = `${import.meta.dirname}/storage/${filename}`;
    try {
      await rm(filePath);
      res.json({ message: "file deleted" });
    } catch (error) {
      console.log(error.message);
    }
  } catch (error) {
    console.log(error.message);
  }
});

app.patch("/:filename", async(req, res) => {
  try {
    const { filename } = req.params;
    const {newFilename}=req.body;
    console.log(newFilename);
    
    console.log(filename);
    
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/", async (req, res) => {
  const fileList = await readdir("./storage");
  res.json(fileList);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
