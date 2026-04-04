import { cadastrarUsuario } from "../controllers/userController.js";
import { Router } from "express";

const router = Router()

router.post('/cadastro', cadastrarUsuario)

export default router;