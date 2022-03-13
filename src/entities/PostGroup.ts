import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { Club } from './Club'
import { Post } from './Post'
import { Base } from './utils/Base'

@Entity()
export class PostGroup extends Base {
  @Column({
    unique: true,
  })
  title: string

  @Column()
  grade: number

  @ManyToOne(() => Club, club => club.postGroups)
  club: Club

  @OneToMany(() => Post, post => post.postGroup)
  posts: Post[]
}
