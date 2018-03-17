import {productGetAllAction} from "./controller/ProductGetAllAction";
import {productGetByIdAction} from "./controller/ProductGetByIdAction";
import {productSaveAction} from "./controller/ProductSaveAction";
import { index } from './controller/admin/AdminController';
import * as product from './controller/admin/ProductController';
import * as category from './controller/admin/CategoryController';
/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/api/products",
        method: "get",
        action: productGetAllAction
    },
    {
        path: "/api/products/:id",
        method: "get",
        action: productGetByIdAction
    },
    {
        path: "/api/products",
        method: "post",
        action: productSaveAction
    }
];

export const ViewRoutes = [
    {
        path: "/admin",
        method: "get",
        action: index
    },
    // Categories
    {
        path: "/admin/categories",
        method: "get",
        action: category.index
    },
    // Products
    {
        path: "/admin/products",
        method: "get",
        action: product.index
    }
]