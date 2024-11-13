import React from 'react';
import SponsorCard from './SponsorCard';

function SliderSponsor({ users }) {
  return (
    <div className="container mx-auto px-4 lg:px-8 mt-12">
      {Object.keys(users).map((role) => (
        <div className="mb-12" key={role}>
          {/* Role Title */}
          <p className="text-2xl font-bold text-left mb-6 lg:mb-8">
            <span className="tracking-wide underline underline-offset-8 decoration-4 decoration-[#E30022]">
              {role}
            </span>
          </p>

          {/* Responsive Flex Container for Cards */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
            {users[role].map((user) => (
              <SponsorCard
                key={user.name}
                img={user.img}
                name={user.name}
                role={role}
                detail={`${user.institution}, ${user.country}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SliderSponsor;
