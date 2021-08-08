import globalState from '@/globalState';

export default function useCart() {
  const [cart, setCart] = globalState.useGlobalState('cart');

  return {
    cart,
    addItem(product, count = 1) {
      let targetItem = cart.find(e => e.productId === product.productId);

      if (targetItem === undefined) {
        setCart(
          cart.concat({ ...product, count }),
        );
      } else {
        setCart(
          cart.map(e => (e.productId === product.productId ? { ...e, count: e.count + count } : e)),
        );
      }
    },
    removeItem(product, count = Infinity) {
      let targetItem = cart.find(e => e.productId === product.productId);

      if (targetItem === undefined) return;

      if (targetItem.count - count < 0) {
        setCart(
          cart.filter(e => e.productId !== product.productId),
        );
      } else {
        setCart(
          cart.map(e => (e.productId === product.productId ? { ...e, count: e.count - count } : e)),
        );
      }
    },
    clearCart() {
      setCart([]);
    },
  };
}
