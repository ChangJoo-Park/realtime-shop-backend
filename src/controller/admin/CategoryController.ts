import { Category } from './../../entity/Category';
import { Request, Response } from "express";
import { getManager } from "typeorm";

export async function index(request: Request, response: Response) {
    const categories = await Category.find();

    response.render('categories/index', {
        title: 'All Categories',
        page_name: 'categories',
        categories: categories
    })
}

export async function show(request: Request, response: Response) {
    const category = await Category.findOneById(request.params.id)

    response.render('categories/show', {
        title: 'Category',
        page_name: 'categories',
        category
    })
}

export async function newCategory(request: Request, response: Response) {
    response.render('categories/new', {
        title: 'New Category', page_name: 'categories',
        category: new Category()
    })
}

export async function create(request: Request, response: Response) {
    const { name, description } = request.body
    const category = new Category()
    category.name = name
    category.description = description
    await category.save()

    response.redirect('/admin/categories')
}

export async function edit(request: Request, response: Response) {
    const category = await Category.findOneById(request.params.id)

    response.render('categories/edit', {
        title: 'Edit Category',
        page_name: 'categories',
        category
    })
}

export async function update(request: Request, response: Response) {
    const category = await Category.findOneById(request.params.id)
    const { name, description } = request.body
    category.name = name
    category.description = description
    await category.save()
    response.redirect(`/admin/categories/${category.id}`)
}

export async function destroy(request: Request, response: Response) {
    const category = await Category.findOneById(request.params.id)
    await category.remove()

    response.redirect('/admin/categories')
}