import * as order from "../controller/admin/OrderController";

export const orders = [
  {
    path: "/admin/orders",
    method: "get",
    action: order.index
  },
  {
    path: "/admin/orders/new",
    method: "get",
    action: order.newOrder
  },
  {
    path: "/admin/orders",
    method: "post",
    action: order.create
  },
  {
    path: "/admin/orders/:id",
    method: "get",
    action: order.show
  },
  {
    path: "/admin/orders/:id/edit",
    method: "get",
    action: order.edit
  },
  {
    path: "/admin/orders/:id",
    method: "put",
    action: order.update
  },
  {
    path: "/admin/orders/:id",
    method: "delete",
    action: order.destroy
  }
]