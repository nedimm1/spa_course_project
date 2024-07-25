import PageNav from "../components/PageNav";
import { Outlet } from "react-router-dom";
function Product() {
  return (
    <div>
      <PageNav />
      <h1>Product</h1>
      <Outlet />
    </div>
  );
}

export default Product;
