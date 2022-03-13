import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Base extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  create_date: Date

  @UpdateDateColumn()
  update_date: Date

  @Column({
    type: 'boolean',
    default: false,
  })
  is_delete: boolean
}
