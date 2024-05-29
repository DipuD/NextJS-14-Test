'use client'
import { useState, useEffect } from "react";
import CardView from "./CardView";
import LandscapeView from "./LandscapeView";
import useFetchProducts from "./useFetchProducts";
import ShowCart from "./ShowCart";

export default function GetProduct() {
  const { data, loading, error } = useFetchProducts();
  const [isCardView, setIsCardView] = useState(true);
  const [cart, setCart] = useState<any[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setIsInitialized(true);
  }, []);

  const removeFromCart = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
  };

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isInitialized]);

  if (loading) {
    return (
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const addToCart = (product: any) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <div className="flex px-20">
        <div className="w-2/3 p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold text-black">Our All Products</h1>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsCardView(true)}
                className={`w-8 h-8 flex items-center justify-center rounded ${isCardView ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                <p>00</p>
              </button>
              <button
                onClick={() => setIsCardView(false)}
                className={`w-8 h-8 flex items-center justify-center rounded ${!isCardView ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                <span className="[&>svg]:w-7 [&>svg]:stroke-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="relative mb-4">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search An Item" />
          </div>
          {isCardView ? <CardView data={data} addToCart={addToCart} /> : <LandscapeView data={data} addToCart={addToCart} />}
        </div>
        <div className="w-1/3 p-4">
          <div className="w-full bg-white border border-gray-300 rounded-lg shadow justify-center p-2">
            <div className="w-full bg-gray-700 p-2 rounded-lg text-center">SELECTED PRODUCTS</div>
            <ShowCart cart={cart} removeFromCart={removeFromCart} />
            <div className="flex px-3 py-2 justify-end items-end text-black">
              <p>TOTAL: </p>
            </div>
            <div className="flex items-center px-2 py-10">
              <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 bg-gray-800 border-black" />
              <label className="ms-2 text-sm font-medium text-black px-5 pl-10">
              I&apos;ve read and agree to the terms &amp; conditions, refund policy &amp; privacy policy.
              </label>
            </div>
            <div className="flex justify-center items-center py-4">
              <button className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded text-sm px-5 py-2.5 text-center">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
