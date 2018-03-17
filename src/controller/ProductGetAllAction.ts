import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Product} from "../entity/Product";

/**
 * Loads all posts from the database.
 */
export async function productGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const productRepository = getManager().getRepository(Product);

    // load a post by a given post id
    const posts = await productRepository.find();

    // return loaded posts
    response.send(posts);
}