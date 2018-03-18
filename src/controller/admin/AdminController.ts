import { Request, Response } from "express";


export async function index(request: Request, response: Response) {
    response.render('index', {
        title: 'Dashboard',
        page_name: 'dashboard'
    })
}