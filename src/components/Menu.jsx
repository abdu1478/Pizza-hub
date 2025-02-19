import Pizza from './Pizza';
import pizzaData from '../data/data';
const Menu = function () {
  return (
    <main className="menu flex flex-col items-center gap-[4rem] w-full">
      <h2
        style={{ fontSize: 'clamp(2rem, 3vw, 2.4rem)' }}
        className="inline-block pt-4 pb-4 px-0 border-t-2 border-solid border-[currentColor] border-b-2  uppercase tracking-[3px]  max-sm:text-[1.8rem] font-semibold "
      >
        Our Menu
      </h2>
      <ul className="pizzas list-none grid grid-cols-[var(--cols-5)] gap-[4.8rem] w-full ">
        {pizzaData.map((pizza, index) => (
          <Pizza key={index} pizza={pizza} />
        ))}
      </ul>
    </main>
  );
};

export default Menu;
