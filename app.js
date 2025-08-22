import http from "http";
const server = http.createServer((req, res) => {
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Home page</h1>
</body>
</html>`);
});
server.listen(8080,'0.0.0.0',()=>{
  console.log("server started");
  
})
