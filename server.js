import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Ejemplo de endpoint
app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde el backend!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});