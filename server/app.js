import express from "express";
import { createWriteStream, statSync } from "fs";
import { readdir, rm, stat } from "fs/promises";
import cors from "cors"
const app = express();
console.log(app);
app.use(express.json())

const port = 4000;
app.use(cors());

app.get("/files/:filename", (req, res) => {
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
app.delete("/files/:filename", async(req, res) => {
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

app.patch("/files/:filename", async(req, res) => {
  try {
    const { filename } = req.params;
    const {newFilename}=req.body;
    console.log(newFilename);
    
    console.log(filename);
    
  } catch (error) {
    console.log(error.message);
  }
});
app.post("/files/:filename",(req,res)=>{
  console.log(req.params);

  const writeStream=createWriteStream(`./storage/${req.params.filename}`)
  req.pipe(writeStream);
  req.on('end',()=>{
res.json({message:"file uploaded successfully"})
  })
  
})




app.get("/directory", async (req, res) => {
  const fileList = await readdir("./storage");
  const data=[];
  for(const item of fileList){

    const stats= await statSync(`./storage/${item}`);
    data.push({name:item,directory:stats.isDirectory()})
  }
  

  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
