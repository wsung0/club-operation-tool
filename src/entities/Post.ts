import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm'
import { File } from './File'
import { PostGroup } from './PostGroup'
import { User } from './User'
import { Base } from './utils/Base'

@Entity()
export class Post extends Base {
  @Column()
  title: string

  @Column({
    type: 'text',
  })
  content: string

  @Column()
  grade: number

  @ManyToOne(() => User, user => user.posts)
  user: User

  @ManyToOne(() => PostGroup, postGroup => postGroup.posts)
  postGroup: PostGroup

  @ManyToMany(() => File)
  files: File[]
}
