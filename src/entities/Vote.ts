import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm'
import { Example } from './Example'
import { Select } from './Select'
import { User } from './User'
import { Base } from './utils/Base'

@Entity()
export class Vote extends Base {
  @ManyToOne(() => User, user => user.votes)
  user: User

  @Column()
  title: string

  @ManyToMany(() => Example)
  @JoinTable({
    name: 'votes_examples',
    joinColumn: {
      name: 'vote',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'exapmle',
      referencedColumnName: 'id',
    },
  })
  examples: Example[]

  @ManyToOne(() => Example, example => example.results)
  result: Example

  @OneToMany(() => Select, select => select.vote)
  selects: Select[]
}
