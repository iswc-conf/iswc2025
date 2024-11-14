import React from 'react'
import AvatarSlider from './SliderSponsor'


function Sponsor({word, users}) {
  return (
    <>
      <div className="w-full mb-8">
        <img
          src="../ISWC2025banner.webp" // Replace with the actual path to your banner image
          alt="Banner"
          className="w-full h-auto object-cover"
        />
      </div>
      <section className="lg:px-16 px-6 py-8">
        <p style={{ color: '#e94607' }}  className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 pb-6 lg:pb-4">{word}</p>
        
        <div className="lg:mx-24 mx-6 mt-2">
          <AvatarSlider users={users} />
          {/* Add more AvatarSlider components as needed */}
        </div>
      </section>
    </>
  )
}

export default Sponsor;