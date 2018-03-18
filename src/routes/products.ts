import * as product from "../controller/admin/ProductController";

export const products = [
  {
    path: "/admin/products",
    method: "get",
    action: product.index
  }
]