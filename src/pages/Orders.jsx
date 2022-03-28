import { Link, Outlet } from "react-router-dom";

const Orders = () => {
  return (
    <div className="space-x-2">
      <Link to={"/place-order"} class="btn" onCl>
        Place An Order
      </Link>
      <Link to={"/orders-list"} class="btn btn-primary" onCl>
        Orders List
      </Link>
      <Outlet />
    </div>
  );
};

export default Orders;
