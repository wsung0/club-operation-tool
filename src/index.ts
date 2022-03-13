import express from 'express'
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'
import { Club } from './entities/Club'
import { Example } from './entities/Example'
import { File } from './entities/File'
import { Post } from './entities/Post'
import { PostGroup } from './entities/PostGroup'
import { Select } from './entities/Select'
import { User } from './entities/User'
import { Vote } from './entities/Vote'

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

    app.listen(process.env.PORT, () => {
      console.log('Now running')
    })
  } catch (error) {
    console.error(error)
    throw new Error('Unable to connect to DB')
  }
}

main()
