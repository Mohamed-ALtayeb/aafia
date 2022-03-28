import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.config";
const PlaceOrder = () => {
  const [order, setOrder] = useState({
    food: "",
    drink: "",
    price: 0,
  });
  const { food, drink, price } = order;
  const onChange = (e) => {
    setOrder({ ...order, [e.target.id]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(123);
    const orders = { ...order };
    console.log(orders);
    try {
      const orderRef = await addDoc(collection(db, "orders"), orders);
      console.log(orderRef);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10 -mt-10 shadow-xl card w-96 bg-base-100">
      <form
        className="w-full max-w-xs space-y-2 form-control"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          id="food"
          value={food}
          onChange={onChange}
          placeholder="Food"
          className="w-full max-w-xs input input-bordered"
        />
        <input
          type="text"
          id="drink"
          value={drink}
          onChange={onChange}
          placeholder="Drink"
          className="w-full max-w-xs input input-bordered"
        />
        <input
          className="w-full max-w-xs input input-bordered"
          type="number"
          id="price"
          value={price}
          onChange={onChange}
        />
        <button type="submit" className="mt-10 btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PlaceOrder;
