import { useContext } from 'react';
import CartContext from '../utilities/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, setcartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleDecreaseQuantity = (id) => {
    const newCartItems = cartItems.map(cartItem => {
        if (cartItem.item.card.info.id === id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      })
      .filter(cartItem => cartItem.quantity > 0);
    setcartItems(newCartItems);
  };

  const handleIncreaseQuantity = (id) => {
    const newCartItems = cartItems.map(cartItem => {
      if (cartItem.item.card.info.id === id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setcartItems(newCartItems);
  };

    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
    const price = cartItems[i].item.card.info.defaultPrice
        ? cartItems[i].item.card.info.defaultPrice
        : cartItems[i].item.card.info.price;
    totalPrice += price * cartItems[i].quantity;
    }

    const handlePay=()=>{
         alert("Thank you! Your order will soon reach you.");
        navigate('/');
    }


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(({ item, quantity }) => (
            <div
              key={item.card.info.id}
              className="flex items-center justify-between bg-white p-4 shadow rounded"
            >
              <div>
                <h3 className="font-semibold text-lg">{item.card.info.name}</h3>
                <p className="text-gray-700 text-sm">
                  ₹
                  {item.card.info.defaultPrice
                    ? item.card.info.defaultPrice / 100
                    : item.card.info.price / 100}
                </p>

                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => handleDecreaseQuantity(item.card.info.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item.card.info.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <img
                src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-20 h-16 object-cover rounded"
              />
            </div>
          ))}
        </div>
      )}

        <div className="mt-6 text-right font-bold text-xl">
            Total: ₹{(totalPrice / 100).toFixed(2)}
           
        </div>

        <div className="mt-4 text-right">
        <button
            onClick={handlePay}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition duration-300"
        >
            Pay ₹{(totalPrice / 100).toFixed(2)}
        </button>
        </div>
      </div>

  );
};

export default Cart