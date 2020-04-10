const express=require("express");

//initialization
const app =express();

//settings

app.set("port",3000);

//start the server

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});