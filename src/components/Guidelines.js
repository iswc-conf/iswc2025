import React from "react";
import tracks from "./tracks.json"
export const Guidelines = () => {
    return(
      <div className="bg-[#33358c] text-white py-2">
        <h1 className="text-white text-3xl  font-bold flex justify-center items-center my-2">Tracks</h1>
        <ul
        class="mt-0 mx-auto text-left font-medium  ">
{
  tracks.tracks.map((track) => (
    <li key={track.title}>
      <p className="py-1 w-full flex items-center font-[500] text-blue-500 hover:text-blue-700 hover:bg-blue-50">
        <span className="ml-5 mr-2.5 w-1 h-4 bg-blue-500 rounded-r-md"></span>
        {track.title}
      </p>
    </li>
  ))
}

        </ul>
        </div>
    );
  }