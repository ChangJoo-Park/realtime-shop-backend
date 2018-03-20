import { Order } from './Order';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from "typeorm";
import { Product } from "./Product"

@Entity()
export class LineItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @ManyToOne(type => Product, product => product.lineItems)
  product: Product;

  @ManyToOne(type => Order, order => order.lineItems)
  order: Order
}