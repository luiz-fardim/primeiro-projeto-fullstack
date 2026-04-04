import db from '../config/db.js'

export const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body

    try {
        const sql = "INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)"
        const [result] = await db.execute(sql, [nome, email, senha])
        res.status(201).json({ message: "Usuário criado!", id: result.insertId})
    }
    catch (error) {
        res.status(500).json({ error: error.message})
    }
}