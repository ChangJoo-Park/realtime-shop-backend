
import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Customer } from "../../entity/Customer";

const page_name = 'customers'

export async function index(request: Request, response: Response) {
  const customers = await Customer.find()

  response.render('customers/index', {
    title: 'All Customers',
    page_name,
    customers
  })
}

export async function show(request: Request, response: Response) {
  const customer = await Customer.findOneById(request.params.id)

  response.render('customers/show', {
    title: 'Customer',
    page_name,
    customer
  })
}

export async function newProduct(request: Request, response: Response) {
  const customer = new Customer()

  response.render('customers/new', {
    title: 'New Customer',
    page_name,
    customer
  })
}

export async function edit(request: Request, response: Response) {
  const customer = await Customer.findOneById(request.params.id)

  response.render('customers/edit', {
    title: 'Update Customer',
    page_name,
    customer
  })
}

export async function create(request: Request, response: Response) {
  const { name, description, categories, published } = request.body
  const customer = new Customer()
  await customer.save()

  response.redirect('/admin/customers')
}

export async function update(request: Request, response: Response) {
  const customer = await Customer.findOneById(request.params.id)
  const { name, description, categories, published } = request.body
  await customer.save()

  response.redirect(`/admin/customers/${customer.id}`)
}

export async function destroy(request: Request, response: Response) {
  const customer = await Customer.findOneById(request.params.id)
  await customer.remove()

  response.redirect('/admin/customers')
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