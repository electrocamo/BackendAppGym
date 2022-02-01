import express from 'express'
import  exercisesRouters  from './routes/Exercises'
import cors from 'cors'
import morgan from 'morgan'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { options } from './swaggerOptions'
const specs = swaggerJSDoc(options)

const app = express()

app.use(cors()) // this funtion let to say to server that it let conexion from others sources
app.use(morgan('dev')) //this function let to see all the request made to server
app.use(express.json()) //this function let to undestand the Json format
app.use(exercisesRouters) //this let to use the routes control
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))// this function let to configurate the API's documentation

export default app