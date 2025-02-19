import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Order from './components/Order';

export default function App() {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <CartProvider>
      <div
        style={{ margin: '0 auto' }}
        className="container max-w-[95rem]  flex flex-col items-center gap-[4.8rem] max-sm:gap-[3.2rem] p-container "
      >
        <Header setShowOrder={setShowOrder} />
        {showOrder && <Order setShowOrder={setShowOrder} />}
        <Menu />
        <Footer />
      </div>
    </CartProvider>
  );
}
