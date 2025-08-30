import React from "react";

const Cart = (props) => {
  const { cartItem } = props;

  return (
    <>
      <div>
        <h2 className="text-center mt-2 mb-3 m-auto">Added Cart</h2>
      </div>
   <div className="container" style={{ position: "sticky", top: 0, background: "#fff", zIndex: 1 }}>
  <div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItem.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.qty}</td>
            <td>₹{item.price}</td>
            <td>₹{(item.price * item.qty).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </>
  );
};

export default Cart;
