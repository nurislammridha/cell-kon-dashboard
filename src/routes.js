import React from "react";
import CategoryList from "./modules/category/components/CategoryList";
import CreateCategoryContainer from "./modules/category/views/CreateCategoryContainer";
import OrderAcceptContainer from "./modules/order/views/OrderAcceptContainer";
import OrderDeliveredContainer from "./modules/order/views/OrderDeliveredContainer";
import OrderDeliveringContainer from "./modules/order/views/OrderDeliveringContainer";
import OrderProcessingContainer from "./modules/order/views/OrderProcessingContainer";
import CreateProductContainer from "./modules/product/views/CreateProductContainer";
import EditProductContainer from "./modules/product/views/EditProductContainer";
import ProductListContainer from "./modules/product/views/ProductListContainer";
import UserListContainer from "./modules/user/views/UserListContainer";
import BrandList from "./modules/brand/components/BrandList";
import CreateBrandContainer from "./modules/brand/views/CreateBrandContainer";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/brand", name: "Brand", component: BrandList },
  {
    path: "/brand-add",
    name: "Create Brand",
    component: CreateBrandContainer,
  },
  { path: "/category", name: "Category", component: CategoryList },
  {
    path: "/category-add",
    name: "Create Category",
    component: CreateCategoryContainer,
  },
  {
    path: "/product",
    name: "Product List",
    component: ProductListContainer,
  },
  {
    path: "/product-add",
    name: "Create Product",
    component: CreateProductContainer,
  },
  {
    path: "/product-update",
    name: "Create Product",
    component: EditProductContainer,
  },
  {
    path: "/user",
    name: "User",
    component: UserListContainer,
  },
  {
    path: "/order-accept",
    name: "Order Accept",
    component: OrderAcceptContainer,
  },
  {
    path: "/order-processing",
    name: "Order Processing",
    component: OrderProcessingContainer,
  },
  {
    path: "/order-delivering",
    name: "Order Delivering",
    component: OrderDeliveringContainer,
  },
  {
    path: "/order-delivered",
    name: "Order Delivered",
    component: OrderDeliveredContainer,
  },
];

export default routes;
