import * as customer from "../controller/admin/CustomerController";

export const customers = [
  {
    path: "/admin/customers",
    method: "get",
    action: customer.index
  },
  {
    path: "/admin/customers/new",
    method: "get",
    action: customer.newProduct
  },
  {
    path: "/admin/customers",
    method: "post",
    action: customer.create
  },
  {
    path: "/admin/customers/:id",
    method: "get",
    action: customer.show
  },
  {
    path: "/admin/customers/:id/edit",
    method: "get",
    action: customer.edit
  },
  {
    path: "/admin/customers/:id",
    method: "put",
    action: customer.update
  },
  {
    path: "/admin/customers/:id",
    method: "delete",
    action: customer.destroy
  }
]