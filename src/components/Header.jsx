import { useCart } from '../hooks/useCart';
import '../index.css';
import PropTypes from 'prop-types';

function Header({ setShowOrder }) {
  const { cart } = useCart();

  function toggleOrderView() {
    if (cart.length > 0) {
      setShowOrder((prev) => !prev);
    }
  }

  return (
    <header className="header self-stretch text-center top-0 w-full z-10 flex justify-between relative px-4 items-center">
      <h1
        className="text-[#af8602] uppercase font-light mb-12 relative w-[95%] ml-[10px] tracking-[3px] 
      text-[clamp(3.2rem,5vw,5.2rem)] 
      before:content-[''] before:absolute before:h-[3px] before:w-16 before:bg-[#edc84b] before:top-1/2 before:-translate-y-1/2 before:left-0
      after:content-[''] after:absolute after:h-[3px] after:w-16 after:bg-[#edc84b] after:top-1/2 after:-translate-y-1/2 after:right-0 max-sm:text-[2.5rem] max-sm:tracking-normal "
      >
        Pizza-Hub Co.
      </h1>

      <div
        onClick={toggleOrderView}
        className="cart-logo cursor-pointer relative z-50 h-[40px]  text-[#af8602] flex items-center"
      >
        <img
          src="pizzas/cart.svg"
          alt="Order cart"
          className="w-10 mt-6 block"
        />
        <span
          style={{ padding: '0 0.5rem' }}
          className="text-[1.2rem] absolute top-[-13%] right-[-20%] bg-[#edc84b] text-white rounded-full font-medium"
        >
          {cart.length}
        </span>
      </div>
    </header>
  );
}
Header.propTypes = {
  setShowOrder: PropTypes.func.isRequired,
};

export default Header;
