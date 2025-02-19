import { useCart } from '../hooks/useCart';
import PropTypes from 'prop-types';

function Pizza({ pizza }) {
  const { setCart } = useCart();
  function handleOrder() {
    if (!pizza.soldOut) {
      setCart((prev) => [...prev, pizza]);
    }
  }
  return (
    <li
      style={{ padding: '2rem' }}
      className={`pizza ${
        pizza.soldOut ? 'sold-out group' : ''
      } flex flex-col gap-[1.6rem] bg-[#fff] p-[2.5em] rounded-[0.9rem] shadow-list transition-[var(--transition)]   `}
    >
      <img
        className="w-full aspect-[1] object-cover rounded-[0.9rem] shadow-[var(--image-shadow)] m-5 transition-filter duration-300 ease-in-out group-[.sold-out]:opacity-[0.7] group-[.sold-out]:grayscale "
        src={pizza.photoName}
        alt={pizza.name}
      />
      <div className="texts gap-y-container cursor-default flex flex-col h-full justify-between max-sm:gap-1.5  ">
        <h3
          style={{ fontSize: 'clamp(1.9rem, 2.5vw, 2.2rem)' }}
          className="font-medium"
        >
          {pizza.name}
        </h3>
        <p
          style={{ fontSize: 'clamp(1.3rem, 1.8vw, 1.5rem)' }}
          className="text-[#666] italic font-medium"
        >
          {pizza.ingredients}
        </p>
        {!pizza.soldOut && (
          <button
            style={{
              fontSize: 'clamp(1.3rem, 1.8vw, 1.4rem)',
              padding: '1.2rem 2.4rem',
            }}
            className="btn border-none font-medium bg-[#edc84b] cursor-pointer transition-all duration-200 rounded-xl max-sm:font-semibold "
            onClick={handleOrder}
          >
            Order Now
          </button>
        )}

        <span
          style={{ fontSize: 'clamp(1.4rem, 2vw, 1.6rem)' }}
          className="font-medium  text-[#333]"
        >
          {pizza.soldOut ? 'Sold Out' : `${pizza.price}ETB`}
        </span>
      </div>
    </li>
  );
}
Pizza.propTypes = {
  pizza: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    photoName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    soldOut: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Pizza;
