import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Category } from "./Category";
import { Order } from "./Order";

@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("text")
    description: string;

    @Column({
        nullable: false,
        type: Boolean,
        default: false
    })
    published: boolean;


    @ManyToMany(type => Category, category => category.products, {
        eager: true
    })
    @JoinTable()
    categories: Category[];

    @ManyToMany(type => Order, order => order.products)
    orders: Order[];
}