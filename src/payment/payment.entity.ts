import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';
import { Transaction } from '../transaction/transaction.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  details: string;

  @ManyToOne(() => User, user => user.payments)
  user: User;

  @OneToMany(() => Transaction, transaction => transaction.payment)
  transactions: Transaction[];
}
