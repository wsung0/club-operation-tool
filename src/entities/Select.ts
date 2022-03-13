import { Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm'
import { Example } from './Example'
import { User } from './User'
import { Base } from './utils/Base'
import { Vote } from './Vote'

@Entity()
export class Select extends Base {
  @ManyToMany(() => Example, example => example.selects)
  @JoinTable({
    name: 'selects_examples',
    joinColumn: {
      name: 'select',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'example',
      referencedColumnName: 'id',
    },
  })
  examples: Example[]

  @ManyToOne(() => User, user => user.selects)
  user: User

  @ManyToOne(() => Vote, vote => vote.selects)
  vote: Vote
}
