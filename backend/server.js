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

