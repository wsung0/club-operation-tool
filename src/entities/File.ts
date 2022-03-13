import { Column, Entity, JoinTable, ManyToMany } from 'typeorm'
import { Post } from './Post'
import { Base } from './utils/Base'

@Entity()
export class File extends Base {
  @Column({
    unique: true,
  })
  url: string

  @ManyToMany(() => Post)
  @JoinTable({
    name: 'posts_files',
    joinColumn: {
      name: 'file',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'post',
      referencedColumnName: 'id',
    },
  })
  posts: Post[]
}
