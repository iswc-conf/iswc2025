import React from 'react';
import AvatarCard from './SponsorCard';

function SliderSponsor({ users }) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container text-center">
        {Object.keys(users).map((role, idx) => (
          <div className="mb-8" key={role}>
            {/* Centered Role Title */}
            <p className="text-3xl font-bold mb-4">{role}</p>

            {/* Centered Cards for Each User */}
            <div className="flex flex-col items-center space-y-6">
              {users[role].map((user) => (
                <div key={user.name} className="flex justify-center w-full">
                  <AvatarCard
                    img={user.img}
                    name={user.name}
                    role={role}
                    detail={`${user.institution}, ${user.country}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderSponsor;
