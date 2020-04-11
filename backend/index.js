
if(process.env.NODE_ENV!=="production"){
  require("dotenv").config();
}
const express=require("express");
const morgan=require("morgan");
const multer=require('multer');
const path=require("path")

//initialization
const app=express();
require("./database");

//settings
// app.set("port",3000);
app.set("port",process.env.PORT||3000);

//middlewares
app.use(morgan("dev"));
const storage=multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
      filename(res,file,cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
      }
});

app.use(multer({storage}).single("image"));
app.use(express.urlencoded({extended:false}));
app.use(express.json())

//routes
app.use("/api/book",require("./routes/books"))

//static files
app.use(express.static(path.join(__dirname,"public")))


//start the server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
