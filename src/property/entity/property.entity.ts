import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Property')
export class PropertyEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'int' })
  area: number;

  @Column({ nullable: false, type: 'int' })
  bedrooms: number;

  @Column({ nullable: false, type: 'int' })
  complexFee: number;

  @Column({ nullable: false, type: 'boolean', default: false })
  isMarketplace: boolean;

  @Column({ nullable: false, type: 'boolean', default: false })
  isRentable: boolean;

  @Column({ nullable: false, type: 'int' })
  price: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
