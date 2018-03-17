import { Category } from './../../entity/Category';
import {Request, Response} from "express";
import {getManager} from "typeorm";

/**
 * Loads all posts from the database.
 */
export async function index(request: Request, response: Response) {
    // get a post repository to perform operations with post
    const categoryRepository = getManager().getRepository(Category);

    // load a post by a given post id
    const categories = await categoryRepository.find();
    response.render('categories/index', {
        title: 'Categories',
        page_name: 'categories'
    })
}

export async function show(request: Request, response: Response) {
    // get a post repository to perform operations with post
    const categoryRepository = getManager().getRepository(Category);

    // load a post by a given post id
    const categories = await categoryRepository.find();
    response.render('categories/show', {
        title: 'Categories',
        page_name: 'Category - Show'
    })
}

export async function create(request: Request, response: Response) {
    // get a post repository to perform operations with post
    const categoryRepository = getManager().getRepository(Category);

    // load a post by a given post id
    const categories = await categoryRepository.find();
    response.render('categories/new', {
        title: 'Categories',
        page_name: 'Category - New'
    })
}

export async function edit(request: Request, response: Response) {
    // get a post repository to perform operations with post
    const categoryRepository = getManager().getRepository(Category);

    // load a post by a given post id
    const categories = await categoryRepository.find();
    response.render('categories/edit', {
        title: 'Categories',
        page_name: 'Category - Edit'
    })
}

export async function destroy(request: Request, response: Response) {
    // get a post repository to perform operations with post
    const categoryRepository = getManager().getRepository(Category);

    // load a post by a given post id
    const categories = await categoryRepository.find();
    response.render('categories/edit', {
        title: 'Categories',
        page_name: 'Category - Edit'
    })
}