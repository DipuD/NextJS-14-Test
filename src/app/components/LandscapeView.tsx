/* eslint-disable react/no-unescaped-entities */
import React from 'react';


const LandscapeView: React.FC<{ data: any[], addToCart: (product: any) => void }> = ({ data, addToCart }) => {
  return (
    <ul className="space-y-4">
      {data.map((item: any, index: number) => (
        <li key={index} className="w-full">
          <div className="bg-white border border-gray-200 rounded-lg shadow flex p-4">
            <div className="w-1/3 h-48 overflow-hidden">
              <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
            </div>
            <div className="flex flex-col justify-between flex-grow pl-4">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900">{item.title}</h5>
              <div className="flex items-center mt-2.5 mb-5">
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
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {item.rating.count} reviews
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900">${item.price}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LandscapeView;
