import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Product } from "../../entity/Product";

const page_name = 'products'

export async function index(request: Request, response: Response) {
  const products = await Product.find()

  response.render('products/index', {
    title: 'All Products',
    page_name,
    products
  })
}


export async function show(request: Request, response: Response) {
  const product = await Product.findOneById(request.params.id)

  response.render('products/show', {
    title: 'Product',
    page_name,
    product
  })
}

export async function newProduct(request: Request, response: Response) {
  const product = new Product()
  response.render('products/new', {
    title: 'New Product',
    page_name,
    product
  })
}


export async function edit(request: Request, response: Response) {
  const product = await Product.findOneById(request.params.id)

  response.render('products/edit', {
    title: 'Update Product',
    page_name,
    product
  })
}

export async function create(request: Request, response: Response) {
  const { name, description } = request.body
  const product = new Product()
  product.name = name
  product.description = description
  await product.save()

  response.redirect('/admin/products')
}

export async function update(request: Request, response: Response) {
  const product = await Product.findOneById(request.params.id)
  const { name, description } = request.body
  product.name = name
  product.description = description
  await product.save()
  response.redirect(`/admin/products/${product.id}`)
}

export async function destroy(request: Request, response: Response) {
  const product = await Product.findOneById(request.params.id)
  await product.remove()

  response.redirect('/admin/products')
}
