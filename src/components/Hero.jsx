import { Link } from "react-router-dom";
import img1 from "./assests/tokyo.jpeg"
export const Hero = () => {
  return (
    <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div class="absolute inset-0">
        <img src={img1} alt="Background" class="object-cover object-center w-full h-full" />
        <div class="absolute inset-0 bg-black opacity-[0.45]"></div>
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center m-2 lg:m-0">
        <h1 class="lg:text-5xl text-3xl font-semibold tracking-wide lg:font-[800] leading-tight mb-4">THE 24RD INTERNATIONAL SEMANTIC WEB CONFERENCE</h1>
        <p class="text-xl font-semibold text-gray-300  mb-6">Date:&nbsp;&nbsp;11 & 15 November,&nbsp;&nbsp;2025</p>
      </div>
    </div>

  );
}