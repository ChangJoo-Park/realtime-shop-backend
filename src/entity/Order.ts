import { LineItem } from './LineItem';
import { Product } from './Product';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { Customer } from './Customer';

@Entity()
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Customer, customer => customer.orders)
    customer: Customer;

    @OneToMany(type => LineItem, lineItem => lineItem.order, {
      eager: false
    })

    @JoinTable()
    lineItems: LineItem[]
}