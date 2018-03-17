import {Request, Response} from "express";


/**
 * Loads all posts from the database.
 */
export async function index(request: Request, response: Response) {
    response.render('index', {
        title: 'Dashboard',
        page_name: 'dashboard'
    })
}