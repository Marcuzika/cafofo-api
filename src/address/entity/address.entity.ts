import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Address')
export class AddressEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 50 })
  lat: string;

  @Column({ nullable: false, type: 'varchar', length: 50 })
  lng: string;

  @Column({ nullable: false, type: 'varchar', length: 50 })
  city: string;

  @Column({ nullable: false, type: 'varchar', length: 50 })
  type: string;

  @Column({ nullable: false, type: 'varchar', length: 50 })
  state: string;

  @Column({ nullable: false, type: 'varchar', length: 50 })
  country: string;

  @Column({ nullable: false, type: 'varchar', length: 50 })
  complexName: string;

  @Column({ nullable: false, type: 'varchar', length: 50 })
  neighbourhood: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  streetFullName: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
