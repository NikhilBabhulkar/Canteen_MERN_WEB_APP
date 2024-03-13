import { FaShoppingCart } from "react-icons/fa";
import "../styles/sidebar.css";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function TopSect({ setShow, size,show }: { setShow: (value: boolean) => void; size: number ,show:boolean}) {
  const [firstName, setFirstName] = useState('');

  const location = useLocation();


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const storedFirstName = localStorage.getItem('firstName');

    setFirstName(searchParams.get('firstName') || storedFirstName || '');
  }, [location]);


  return (
    <>
        <div className="flex justify-between items-center px-8 pt-2 pb-4 text-black sticky w-full top-0 z-50 bg-bgColor shadow-lg border-b-[2px] border-bgColor">
          <div className="flex justify-center items-center relative">
            <p className="font-semibold text-base">Welcome To Smart Serve👋</p>
          </div>

          <div className="flex flex-row flex-wrap text-black">
            {/* <p
              onClick={() => setShow(true)}
              className="text-xl mt-5 mr-4 hover:text-brandColor  cursor-pointer"
            >
              Back
            </p> */}
            <span className="text-brandColor text-xl cursor-pointer" onClick={() => setShow(!show)}>
              {/* <FaShoppingCart className="text-2xl mt-6" /> */}
              <button className="mr-2 text-white border-brandColor bg-brandColor border-2 mt-3 px-6  h-10 rounded-lg text-lg ">
                {!show?"Back":"Create Bill"}
              </button>
            </span>
            {/* <p className="mt-4 ml-1 text-sm">{size}</p> */}
          </div>
        </div>
    </>
  );
}

export default TopSect;