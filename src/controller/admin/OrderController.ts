import { Product } from './../../entity/Product';
import { Customer } from './../../entity/Customer';

import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Order } from "../../entity/Order";

const page_name = 'orders'

export async function index(request: Request, response: Response) {
  const orders = await Order.find({relations: ['customer', 'lineItems']})
  response.render('orders/index', {
    title: 'All Orders',
    page_name,
    orders
  })
}

export async function show(request: Request, response: Response) {
  const order = await Order.findOneById(request.params.id, {
    relations: ['customer', 'products']
  })

  response.render('orders/show', {
    title: 'Order',
    page_name,
    order
  })
}

export async function newOrder(request: Request, response: Response) {
  const order = new Order()
  const customers = await Customer.find()
  const products = await Product.find()

  response.render('orders/new', {
    title: 'New Order',
    page_name,
    order,
    customers,
    products
  })
}

export async function edit(request: Request, response: Response) {
  const order = await Order.findOneById(request.params.id)

  response.render('orders/edit', {
    title: 'Update Order',
    page_name,
    order
  })
}

export async function create(request: Request, response: Response) {
  const { name, description, customer, lineItems } = request.body
  console.log(lineItems)
  // const order = new Order()
  // order.customer = await Customer.findOneById(customer)
  // order.lineItems = await Product.findByIds(getProductArray(products))

  // await order.save()

  // response.redirect('/admin/orders')
}

export async function update(request: Request, response: Response) {
  const order = await Order.findOneById(request.params.id)
  const { name, description, categories, published } = request.body
  await order.save()

  response.redirect(`/admin/orders/${order.id}`)
}

export async function destroy(request: Request, response: Response) {
  const order = await Order.findOneById(request.params.id)
  await order.remove()

  response.redirect('/admin/orders')
}
