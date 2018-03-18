import { orders } from './orders';
import { customers } from './customers';
import { categories } from './categories'
import { products } from './products'

export default [
  ...categories,
  ...products,
  ...customers,
  ...orders
]