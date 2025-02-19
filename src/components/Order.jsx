import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import PropTypes from 'prop-types';

function Order({ setShowOrder }) {
  const [isPlaced, setIsPlaced] = useState(false);
  const { cart, setCart } = useCart();
  function handleDelete(pizza) {
    const updateCart = cart.filter((item) => item.name !== pizza.name);
    setCart(updateCart);
    if (cart.length === 0) {
      setShowOrder(false);
    }
  }

  function placeOrder() {
    setIsPlaced(true);
    setTimeout(() => {
      setCart([]);
      setShowOrder(false);
      setIsPlaced(false);
    }, 5000);
  }

  return (
    <>
      {isPlaced ? (
        <div
          style={{ padding: '1em 2em' }}
          className="order font-semibold max-w-2xl text-2xl border-2 border-solid border-[#edc84b]  rounded-[0.9rem]  shadow-image "
        >
          <h2>Your order is placed!</h2>
        </div>
      ) : (
        cart.length > 0 && (
          <div
            style={{ padding: '2em' }}
            className="order font-semibold leading-11 w-[27em] shadow-list max-w-[42em] border-2 border-solid relative border-[#edc84b] rounded-[0.9em]"
          >
            <div className="title flex">
              <h2 className="text-[2em] text-center w-full">Your Order</h2>
              <span
                className="close group-[.close]-hover:text-[#b79a3b] absolute right-[2%] top-0 cursor-pointer text-[2em] text-[#1a1919]"
                onClick={() => setShowOrder(false)}
              >
                &#x2715;
              </span>
            </div>
            <ul className="list-none leading-10 ">
              {cart.map((pizza) => (
                <div
                  style={{ margin: '1em 0' }}
                  className="order-item flex justify-between items-center"
                  key={pizza.name}
                >
                  <li className="text-[1.5em]">
                    {pizza.name} -{pizza.price}ETB
                  </li>
                  <span
                    className="close group-[.close]-hover:text-[#b79a3b] cursor-pointer text-[#1a1919] text-[1.4em] hover:text-amber-200"
                    onClick={() => handleDelete(pizza)}
                  >
                    &#x2715;
                  </span>
                </div>
              ))}
            </ul>
            <p style={{ margin: '1em 0' }} className="text-[1.5em] ">
              Total: {cart.reduce((total, pizza) => total + pizza.price, 0)}ETB
            </p>

            <span
              style={{ margin: '1em 0em 0em' }}
              className="tax text-[1.4em]"
            >
              All price is vat included
            </span>
            <button
              style={{
                padding: '0.7em 2em',
                marginTop: '1em',
                fontSize: 'clamp(1.5rem, 1.8vw, 1.4rem)',
              }}
              className="btn w-full text-inherit border-none font-semibold bg-[#edc84b] cursor-pointer rounded-[0.5rem] "
              onClick={() => placeOrder()}
            >
              Place Order
            </button>
          </div>
        )
      )}
    </>
  );
}

Order.propTypes = {
  setShowOrder: PropTypes.func.isRequired,
};
export default Order;
