import express from 'express'
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'
import { userRouter } from './routes/User'
import { User } from './entities/User'
import { Club } from './entities/Club'
import { PostGroup } from './entities/PostGroup'
import { Post } from './entities/Post'
import { File } from './entities/File'
import { Vote } from './entities/Vote'
import { Example } from './entities/Example'
import { Select } from './entities/Select'

const app = express()

dotenv.config()

const main = async () => {
  try {
    await createConnection({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Club, PostGroup, Post, File, Vote, Example, Select],
      synchronize: true,
    })
    console.log('Connected to MariaDB')

    app.use(express.json())

    app.use('/api/user', userRouter)

    app.listen(process.env.PORT, () => {
      console.log('Now running')
    })
  } catch (error) {
    console.error(error)
    throw new Error('Unable to connect to DB')
  }
}

main()
