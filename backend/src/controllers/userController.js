import db from '../config/db.js'
import bcrypt from 'bcrypt'

export const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body

    try {
        const hash = await bcrypt.hash(senha, 10)

        const sql = "INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)"
        const [result] = await db.execute(sql, [nome, email, hash])
        res.status(201).json({ message: "Usuário criado!", id: result.insertId })
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}