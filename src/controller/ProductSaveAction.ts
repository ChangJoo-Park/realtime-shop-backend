import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Product} from "../entity/Product";

/**
 * Saves given post.
 */
export async function productSaveAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const productRepository = getManager().getRepository(Product);

    // create a real post object from post json object sent over http
    const newProduct = productRepository.create(request.body);

    // save received post
    await productRepository.save(newProduct);

    // return saved post back
    response.send(newProduct);
}