import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase.config";

const OrdersList = () => {
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orderRef = collection(db, "orders");
        const q = query(orderRef);
        const querySnap = await getDocs(q);
        querySnap.forEach((doc) => {
          return orderList.push({ ...doc.data(), id: doc.id });
        });
        setOrderList(orderList);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, [orderList]);
  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="flex justify-between">
      {
        <div className="flex flex-row justify-between w-full -ml-20 space-x-2 text-center shadow-xl card bg-base-100">
          {orderList.map((order) => {
            const { food, drink, price, processing, id } = order;
            return (
              <div className="border-l-2 card-body " key={id}>
                <p>Food: {food}</p>
                <p>drink: {drink}</p>
                <p>price: {price}</p>
                {processing ? (
                  <p className="py-1 font-semibold text-white bg-emerald-500">
                    Deliverd
                  </p>
                ) : (
                  <p className="py-1 font-semibold text-white bg-amber-300">
                    Processing
                  </p>
                )}
                <hr />
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default OrdersList;
