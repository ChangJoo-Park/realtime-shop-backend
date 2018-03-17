import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Product} from "../entity/Product";

/**
 * Loads post by a given id.
 */
export async function productGetByIdAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const productRepository = getManager().getRepository(Product);

    // load a post by a given post id
    const product = await productRepository.findOneById(request.params.id);

    // if post was not found return 404 to the client
    if (!product) {
        response.status(404);
        response.end();
        return;
    }

    // return loaded post
    response.send(product);
}
