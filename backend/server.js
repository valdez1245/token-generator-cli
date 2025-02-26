const express = require("express");
const app = express();

// Middleware para JSON
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.send("¡Backend funcionando!");
});

// 🔥 Nueva ruta de prueba
app.get("/ruta", (req, res) => {
  res.json({ mensaje: "Esta es la ruta funcionando en Vercel" });
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
const express = require("express");
const app = express();

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Backend funcionando!");
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

