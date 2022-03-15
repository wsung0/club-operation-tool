import express from 'express'
import _ from 'lodash'
import { ctrl } from '../controllers/User.controller'
import { MH } from '../middleware/message.handler'
import { CS } from '../util/casting'

const router = express.Router()

router.post('/', async (req, res) => {
  const email = _.get(req.body, 'email', null)
  const password = _.get(req.body, 'password', null)
  const name = _.get(req.body, 'name', null)
  const age = _.get(req.body, 'age', null)
  const grade = _.get(req.body, 'grade', 0)

  if (CS.isEmpty(email) || !CS.isEmail(email)) return res.json(MH.fail({ message: 'Check email' }))
  if (CS.isEmpty(password) || !CS.isPassword(password)) return res.json(MH.fail({ message: 'Check password' }))
  if (CS.isEmpty(name)) return res.json(MH.fail({ message: 'Check name' }))
  if (CS.isEmpty(age)) return res.json(MH.fail({ message: 'Check age' }))

  const data = await ctrl.createUser(email, password, name, age, grade)

  return res.json(MH.success(data))
})

export { router as userRouter }
