import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm'
import { PostGroup } from './PostGroup'
import { User } from './User'
import { Base } from './utils/Base'

@Entity()
export class Club extends Base {
  @Column()
  name: string

  @Column()
  school: string

  @Column()
  category: string

  @ManyToOne(() => User, user => user.masters)
  master: User

  @ManyToMany(() => User)
  @JoinTable({
    name: 'users_clubs',
    joinColumn: {
      name: 'club',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user',
      referencedColumnName: 'id',
    },
  })
  users: User[]

  @OneToMany(() => PostGroup, PostGroup => PostGroup.club)
  postGroups: PostGroup[]
}
