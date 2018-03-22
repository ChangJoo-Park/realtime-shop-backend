import { LineItem } from './../../entity/LineItem';
import { Product } from './../../entity/Product';
import { Customer } from './../../entity/Customer';

import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Order } from "../../entity/Order";

const page_name = 'orders'

export async function index(request: Request, response: Response) {
  const orders = await Order.find({relations: ['customer', 'lineItems', 'lineItems.product']})
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
  const { name, description, customer, lineItems = [] } = request.body
  const flattenItems = flatLineItems(lineItems)
  const lineItemIdx = flattenItems.map(f => f.product)
  const products = await Product.findByIds(lineItemIdx)

  // FIXME: 뭔가 한번에 할 수 있을거같은데..
  let newLineItems = []
  await asyncForEach(products, async (p, index) => {
    const item = new LineItem()
    item.product = p
    item.amount = flattenItems[index].amount
    await item.save()
    newLineItems.push(item)
  })

  const order = new Order()
  order.customer = await Customer.findOneById(customer)
  order.lineItems = newLineItems
  const o = await order.save()

  response.redirect('/admin/orders')
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

const flatLineItems = (lineItems) => {
  const flattenItems = []

  lineItems.forEach(li => {
    const existsIndex = flattenItems.findIndex(fi => li.product === fi.product)
    if (existsIndex >= 0) {
      flattenItems[existsIndex].amount += (li.amount * 1)
    } else {
      li.amount = (li.amount * 1)
      flattenItems.push(li)
    }
  })
  return flattenItems
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}
