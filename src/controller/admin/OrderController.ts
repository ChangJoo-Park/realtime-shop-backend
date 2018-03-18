
import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Order } from "../../entity/Order";

const page_name = 'orders'

export async function index(request: Request, response: Response) {
  const orders = await Order.find()

  response.render('orders/index', {
    title: 'All Orders',
    page_name,
    orders
  })
}

export async function show(request: Request, response: Response) {
  const order = await Order.findOneById(request.params.id)

  response.render('orders/show', {
    title: 'Order',
    page_name,
    order
  })
}

export async function newProduct(request: Request, response: Response) {
  const order = new Order()

  response.render('orders/new', {
    title: 'New Order',
    page_name,
    order
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
  const { name, description, categories, published } = request.body
  const order = new Order()
  await order.save()

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

const getCategoryArray = (categories = []) => {
  let categoryArray = []
  if (typeof categories === 'string') {
    categoryArray.push(categories)
  } else {
    categoryArray = categories
  }
  return categoryArray
}