import { connect } from '../database'


export const getExercises = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query("SELECT * FROM exercises")
    res.json(rows)
}
export const getExercise = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query("SELECT * FROM exercises WHERE id = ?", [req.params.id])
    res.json(rows[0])
}
export const getExercisesCount = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query("SELECT COUNT(*) FROM exercises")
    res.json(rows[0]["COUNT(*)"])
}
export const saveExercise = async (req, res) => {
    const db = await connect()
    const [results] = await db.query("INSERT INTO exercises(title, description) VALUES (?,?)",[
        req.body.title,
        req.body.description
    ])
    res.json({
        id: results.insertId,
        ...req.body,
    })
}
export const deleteExercise = async (req, res) => {
    const db = await connect()
    await db.query("DELETE FROM exercises WHERE id = ?", [req.params.id])
    res.sendStatus(204)
}
export const updateExercise = async (req, res) => {
    const db = await connect()
    const results = await db.query("UPDATE exercises SET ? WHERE id = ?",[
        req.body,
        req.params.id
    ])
    res.sendStatus(204)
}

 