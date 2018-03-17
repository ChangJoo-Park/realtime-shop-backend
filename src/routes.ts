import {productGetAllAction} from "./controller/ProductGetAllAction";
import {productGetByIdAction} from "./controller/ProductGetByIdAction";
import {productSaveAction} from "./controller/ProductSaveAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/products",
        method: "get",
        action: productGetAllAction
    },
    {
        path: "/products/:id",
        method: "get",
        action: productGetByIdAction
    },
    {
        path: "/products",
        method: "post",
        action: productSaveAction
    }
];