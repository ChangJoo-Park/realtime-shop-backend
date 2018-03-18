import * as category from '../controller/admin/CategoryController';

export const categories = [
  {
    path: "/admin/categories",
    method: "get",
    action: category.index
  },
  {
    path: "/admin/categories/new",
    method: "get",
    action: category.newCategory
  },
  {
    path: "/admin/categories",
    method: "post",
    action: category.create
  },
  {
    path: "/admin/categories/:id",
    method: "get",
    action: category.show
  },
  {
    path: "/admin/categories/:id/edit",
    method: "get",
    action: category.edit
  },
  {
    path: "/admin/categories/:id",
    method: "put",
    action: category.update
  },
  {
    path: "/admin/categories/:id",
    method: "delete",
    action: category.destroy
  }
]