
import React from 'react';

const ShowCart: React.FC<{ cart: any[], removeFromCart: (index: number) => void }> = ({ cart, removeFromCart }) => {
  const handleRemove = (index: number) => {
    removeFromCart(index); // Remove from parent component state
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); // Remove from local state
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  return (
    <ul className="flex flex-col space-y-4">
      {cart.map((item, index) => (
        <li key={index} className="w-full flex bg-white border border-gray-200 rounded-lg shadow p-4">
          <div className="w-1/3 h-32 overflow-hidden">
            <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
          </div>
          <div className="w-2/3 flex flex-col justify-between pl-4">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate">{item.title}</h5>
            <div className="items-center mb-2">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < item.rating.rate ? 'text-amber-500' : 'text-gray-200 dark:text-gray-600'}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500">({item.rating.count} reviews)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-red-500">${item.price}</span>
              <button onClick={() => handleRemove(index)} className="w-8 h-8 flex items-center justify-center text-white bg-red-500 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ShowCart;
