"use client";

import { useEffect, useState } from "react";
import ShowCart from "../components/ShowCart";
import CardView from "../components/CardView";
import LandscapeView from "../components/LandscapeView";
import useFetchProducts from "../components/useFetchProducts";

export default function Home() {
  
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

    return (
      <div className="flex justify-center items-center py-16">
        <div className="w-1/2">
          <div className="w-full bg-white border border-gray-300 rounded-lg shadow justify-center px-2 py-2 pb-3">
            <div className="w-full bg-gray-700 p-2 rounded-lg text-center">
              SELECTED PRODUCTS
            </div>
            <ShowCart cart={cart} removeFromCart={removeFromCart} />
            <div className="flex px-3 py-2 justify-center font-bold items-center text-black">
              <p>TOTAL: $</p>
            </div>
            <div className="flex items-center px-2 py-10">
              <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 bg-gray-800 border-black" />
              <label className="ms-2 text-sm font-medium text-black px-5 pl-10">I&apos;ve read and agree to the terms &amp; conditions, refund policy &amp; privacy policy.</label>
            </div>
            <div className="flex justify-center items-center py-4">
              <button
                className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded text-sm px-5 py-2.5 text-center"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }


  