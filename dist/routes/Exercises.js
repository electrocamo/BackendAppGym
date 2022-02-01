"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _exercises = require("../controllers/exercises");

var router = (0, _express.Router)();
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

router.get('/exercises', _exercises.getExercises);
/**
 * @swagger
 * /exercises:
 *  get:
 *      sumary: Get count of exercises
 *      tags: [exercises]
 */

router.get('/exercises/count', _exercises.getExercisesCount);
/**
 * @swagger
 * /exercises:
 *  get:
 *      sumary: Get one specific exercise
 *      tags: [exercises]
 */

router.get('/exercises/:id', _exercises.getExercise);
/**
 * @swagger
 * /exercises:
 *  post:
 *      sumary: Save a new excercise
 *      tags: [exercises]
 */

router.post('/exercises', _exercises.saveExercise);
/**
 * @swagger
 * /exercises:
 *  delete:
 *      sumary: Erase a specific exercise
 *      tags: [exercises]
 */

router["delete"]('/exercises/:id', _exercises.deleteExercise);
/**
 * @swagger
 * /exercises:
 *  put:
 *      sumary: Update an specific exercise
 *      tags: [exercises]
 */

router.put('/exercises/:id', _exercises.updateExercise);
var _default = router;
exports["default"] = _default;