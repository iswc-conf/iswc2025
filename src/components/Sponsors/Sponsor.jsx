import React from 'react'
import AvatarSlider from './SliderSponsor'


function Sponsor({word, users}) {
  return (
    <>
      <section className="lg:px-16 px-6 py-8">
        <p className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 pb-6 lg:pb-4">
          <span className="tracking-wide underline underline-offset-8 decoration-4 decoration-[#E30022]">
            {word.substring(0,3)}
          </span>
          {word.substring(3)}
        </p>
        
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8">
          <AvatarSlider users={users.slice(0, 5)} />
          <AvatarSlider users={users.slice(5, 10)} />
          <AvatarSlider users={users.slice(10, 15)} />
          <AvatarSlider users={users.slice(15, 20)} />
          <AvatarSlider users={users.slice(20, 25)} />
          {/* Add more AvatarSlider components as needed */}
        </div>
      </section>
    </>
  )
}

export default Sponsor;