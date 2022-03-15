import { createQueryBuilder } from 'typeorm'
import { User } from '../entities/User'
import { CS } from '../util/casting'

export const ctrl = {
  createUser: async (email: string, password: string, name: string, age: number, grade: number) => {
    const user = await createQueryBuilder(User, 'user')
      .select('user.email')
      .where('user.email = :email', { email: email })
      .getOne()

    if (user) {
      return { error: { message: 'Already has user' }, data: null }
    }

    const createUser = User.create({
      email,
      password: CS.encrypt(password),
      name,
      age,
      grade,
    })

    await createUser.save()

    return { error: null, data: createUser }
  },
}
