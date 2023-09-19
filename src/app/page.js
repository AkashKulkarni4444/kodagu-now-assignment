"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import NavbarSmallScreen from "@/components/NavbarSmallScreen";
import SideBar from "@/components/SideBar";
import Content from "@/components/Content";

export default function Home() {
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();
  return (
    <>
      {size.width >= 1024 ? (
        <div className="flex flex-row">
          <SideBar />
          <div className="w-[83%] ml-[17%] bg-[#0d0b21] text-white">
            <Navbar />
            <Content screenWidth={size.width}/>
          </div>
        </div>
      ) : (
        <div className="w-full bg-[#0d0b21] text-white">
          <NavbarSmallScreen screenWidth={size.width} />
          <Content screenWidth={size.width} />
        </div>
      )}
    </>
  );
}
