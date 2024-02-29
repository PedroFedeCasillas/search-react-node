const express = require("express");
const app = express();
const productRouter = require("./routes/productsRouter");

//TODO: Aplicar middleware necesarios
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//todo: aplicar manejo de Cors para dar permisos a nuestro front
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Credentials", "true"); 
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    ); 
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); 
    next();
  });

app.get("/", (req, res) => {
  res.status(202).json({ message: "SEARCH APP" });
});

//TODO: Utilizar las rutas API
app.use("/api", productRouter);

module.exports = app;