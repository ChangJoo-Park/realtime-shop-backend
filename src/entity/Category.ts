import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Product } from './Product'

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(type => Product, product => product.categories)
    products: Product[];
}