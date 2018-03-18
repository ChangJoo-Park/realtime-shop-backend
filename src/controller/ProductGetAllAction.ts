import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Product } from "../entity/Product";

export async function productGetAllAction(request: Request, response: Response) {
    const productRepository = getManager().getRepository(Product);

    const posts = await productRepository.find();

    response.send(posts);
}