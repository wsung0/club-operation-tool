import { Column, Entity, ManyToMany, OneToMany } from 'typeorm'
import { Select } from './Select'
import { Base } from './utils/Base'
import { Vote } from './Vote'

@Entity()
export class Example extends Base {
  @OneToMany(() => Vote, vote => vote.result)
  results: Vote[]

  @ManyToMany(() => Vote)
  votes: Vote[]

  @Column({
    unique: true,
  })
  title: string

  @ManyToMany(() => Select, select => select.examples)
  selects: Select[]
}
