import React from 'react'

function SponsorCard({ img, name, role, detail}) {
  return (
    <>
      {' '}
     <div className="flex flex-col justify-center max-w-xs py-1  w-[500px] md:w-[450px] lg:w-[500px] h-[350px] shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
        <img
          src={img}
          alt=""
          className="w-36 h-36 mx-auto rounded-full dark:bg-gray-500 object-cover"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-lg font-semibold sm:text-md">{name}</h2>
            <h4 className="text-lg font-semibold sm:text-md">{role}</h4>
            <i>
              <p className="px-0.5 text-xs sm:text-base dark:text-gray-600 font-[300]">{detail}</p>
            </i>
          </div>
        </div>
      </div>

    </>
  )
}

export default SponsorCard;