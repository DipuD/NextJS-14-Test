
import LandscapeView  from './components/LandscapeView'
import CardView  from './components/CardView'
import { useState } from 'react';
import GetProduct from './components/GetProduct';

export default function Home() {

    

  return (
    <>

        <GetProduct/>


      <div className='py-2 pb-20'>
        <nav className='pb-10' aria-label="Page navigation example justify-center">
          <ul className="flex items-center justify-center -space-x-px h-8 text-sm">
            <li>
              <a href="" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500">
                <span className="sr-only">Previous</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="" className="flex items-center justify-center px-3 h-8 leading-tight bg-blue-500 text-white rounded-lg text-center">1</a>
            </li>
            <li>
              <a href="" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500">2</a>
            </li>
            <li>
              <a href="" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500">3</a>
            </li>
            <li>
              <a href="" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500">4</a>
            </li>
            <li>
              <a href="" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500">22</a>
            </li>
            <li>
              <a href="" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500">
                <span className="sr-only">Next</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
    
  );
}


