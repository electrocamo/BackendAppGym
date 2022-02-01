import { Router } from 'express'
import { saveExercise, getExercise, getExercises, getExercisesCount, deleteExercise, updateExercise } from '../controllers/exercises'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Exercises
 *  description: endpoint of exercises
 */
/**
 * @swagger
 * /exercises:
 *  get:
 *      sumary: Get all exercises
 *      tags: [exercises]
 */
router.get('/exercises', getExercises)
/**
 * @swagger
 * /exercises:
 *  get:
 *      sumary: Get count of exercises
 *      tags: [exercises]
 */
router.get('/exercises/count', getExercisesCount)
/**
 * @swagger
 * /exercises:
 *  get:
 *      sumary: Get one specific exercise
 *      tags: [exercises]
 */
router.get('/exercises/:id', getExercise)
/**
 * @swagger
 * /exercises:
 *  post:
 *      sumary: Save a new excercise
 *      tags: [exercises]
 */
router.post('/exercises', saveExercise)
/**
 * @swagger
 * /exercises:
 *  delete:
 *      sumary: Erase a specific exercise
 *      tags: [exercises]
 */
router.delete('/exercises/:id', deleteExercise)
/**
 * @swagger
 * /exercises:
 *  put:
 *      sumary: Update an specific exercise
 *      tags: [exercises]
 */
router.put('/exercises/:id', updateExercise)


export default router