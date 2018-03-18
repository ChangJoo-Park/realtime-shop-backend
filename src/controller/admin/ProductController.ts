import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Product } from "../../entity/Product";

const page_name = 'products'
/**
 * Loads all posts from the database.
 */
export async function index(request: Request, response: Response) {
  const products = await Product.find()

  response.render('products/index', {
    title: 'All Products',
    page_name,
    products
  })
}


export async function show(request: Request, response: Response) {
  response.render('products/show', {
    title: 'Product',
    page_name
  })
}

export async function newProduct(request: Request, response: Response) {
  const product = new Product()
  response.render('products/new',{
    title: 'New Product',
    page_name,
    product
  })
}


export async function edit(request: Request, response: Response) {
  response.render('products/edit', {
    title: 'Update Product',
    page_name
  })
}

export async function create(request: Request, response: Response) {
}

export async function update(request: Request, response: Response) {
}

export async function destroy(request: Request, response: Response) {
}
