import { Category } from './../../entity/Category';
import { categories } from './../../routes/categories';
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
  const categories = await Category.find({ select: ['id', 'name'] })
  response.render('products/new', {
    title: 'New Product',
    page_name,
    product,
    categories
  })
}


export async function edit(request: Request, response: Response) {
  const product = await Product.findOneById(request.params.id)
  const categories = await Category.find({ select: ['id', 'name'] })

  response.render('products/edit', {
    title: 'Update Product',
    page_name,
    product,
    categories
  })
}

export async function create(request: Request, response: Response) {
  const { name, description, categories, published } = request.body
  const product = new Product()
  product.name = name
  product.description = description
  product.published = published
  product.categories = await Category.findByIds(getCategoryArray(categories))
  await product.save()

  response.redirect('/admin/products')
}

export async function update(request: Request, response: Response) {
  const product = await Product.findOneById(request.params.id)
  const { name, description, categories, published } = request.body
  product.name = name
  product.description = description
  product.published = published === 'on' ? true : false
  product.categories = await Category.findByIds(getCategoryArray(categories))
  await product.save()

  response.redirect(`/admin/products/${product.id}`)
}

export async function destroy(request: Request, response: Response) {
  const product = await Product.findOneById(request.params.id)
  await product.remove()

  response.redirect('/admin/products')
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