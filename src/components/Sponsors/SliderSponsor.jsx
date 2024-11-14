import React from 'react';
import AvatarCard from './SponsorCard';

function SliderSponsor({ users }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container text-center">
        {Object.keys(users).map((role, idx) => {
          const members = users[role];
          const justifyContent =
            members.length === 1
              ? 'justify-center'
              : members.length === 2
              ? 'justify-center'
              : 'justify-center';

          return (
            <div className="mb-8" key={role}>
              <p  style={{ color: '#e94607' }} className="text-2xl font-bold mb-4 decoration-red-500">
                {role}
              </p>
              <div
                className={`flex ${justifyContent} gap-4 flex-wrap`}
              >
                {members.map((user) => (
                  <div key={user.name} className="max-w-xs">
                    <AvatarCard
                      img={user.img}
                      name={user.name}
                      role={role}
                      detail={`${user.institution}, ${user.country}`}
                      className="p-3"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SliderSponsor;
