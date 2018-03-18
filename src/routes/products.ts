import * as product from "../controller/admin/ProductController";

export const products = [
  {
    path: "/admin/products",
    method: "get",
    action: product.index
  },
  {
    path: "/admin/products/new",
    method: "get",
    action: product.newProduct
  },
  {
    path: "/admin/products",
    method: "post",
    action: product.create
  },
  {
    path: "/admin/products/:id",
    method: "get",
    action: product.show
  },
  {
    path: "/admin/products/:id/edit",
    method: "get",
    action: product.edit
  },
  {
    path: "/admin/products/:id",
    method: "put",
    action: product.update
  },
  {
    path: "/admin/products/:id",
    method: "delete",
    action: product.destroy
  }
]