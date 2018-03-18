import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Product} from "../../entity/Product";

/**
 * Loads all posts from the database.
 */
export async function index(request: Request, response: Response) {
  console.log('products')
    // get a post repository to perform operations with post
    response.render('products/index', {
      title: 'Products',
      page_name: 'products'
    })
}


export async function show(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const productRepository = getManager().getRepository(Product);

  // load a post by a given post id
  const products = await productRepository.find();
  response.render('products/show', {
      title: 'Categories',
      page_name: 'Product - Show'
  })
}

export async function create(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const productRepository = getManager().getRepository(Product);

  // load a post by a given post id
  const products = await productRepository.find();
  response.render('products/new', {
      title: 'Categories',
      page_name: 'Product - New'
  })
}

export async function edit(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const productRepository = getManager().getRepository(Product);

  // load a post by a given post id
  const products = await productRepository.find();
  response.render('products/edit', {
      title: 'Categories',
      page_name: 'Product - Edit'
  })
}

export async function destroy(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const productRepository = getManager().getRepository(Product);

  // load a post by a given post id
  const products = await productRepository.find();
  response.render('products/edit', {
      title: 'Categories',
      page_name: 'Product - Edit'
  })
}
