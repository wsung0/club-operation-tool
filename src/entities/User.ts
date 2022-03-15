import { IsEmail } from 'class-validator'
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm'
import { Club } from './Club'
import { Post } from './Post'
import { Select } from './Select'
import { Base } from './utils/Base'
import { Vote } from './Vote'

@Entity()
export class User extends Base {
  @Column({
    unique: true,
    primary: true,
  })
  @IsEmail()
  email: string

  @Column()
  password: string

  @Column()
  name: string

  @Column()
  age: number

  @Column()
  grade: number

  @ManyToMany(() => Club)
  clubs: Club[]

  @OneToMany(() => Club, club => club.master)
  masters: Club[]

  @OneToMany(() => Post, post => post.user)
  posts: Post[]

  @OneToMany(() => Vote, vote => vote.user)
  votes: Vote[]

  @OneToMany(() => Select, select => select.user)
  selects: Select[]
}
