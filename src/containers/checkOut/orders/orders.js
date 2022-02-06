import axios from "../../../axios-orders";
import { useEffect, useState } from "react";
import { Order } from "../../../components/burger/order/order";
import Spinner from "../../../components/Ui/spinner/spinner";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  // const [price, setPrice] = useState(0);

  const fetchingOrders = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/orders.json");
      const fetchedOrders = [];
      for (let key in res.data) {
        fetchedOrders.push({ ...res.data[key], id: key });
      }
      setLoading(false);
      setOrders(fetchedOrders);
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    fetchingOrders();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        orders?.map((order) => {
          return (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={+order.totalPrice}
            />
          );
        })
      )}
    </div>
  );
}

export { Orders };
