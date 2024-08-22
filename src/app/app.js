import express from 'express';
const app = express();
import personagemRoutes from "../routers/personagemRoutes.js";
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Route root ✌️")
})

// Usar as rotas para o gerenciamento de personagens
app.use('/api', personagemRoutes); // Prefixo '/api' para as rotas dos personagens

export default app;
