import React from 'react';

function SponsorCard({ img, name, role, detail }) {
  return (
    <div className="flex flex-col items-center w-60 h-auto p-4 shadow-md rounded-lg bg-white">
      {img ? (
        <img
          src={img}
          alt={name}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-gray-500">
          <span className="text-sm">No Image</span>
        </div>
      )}
      <div className="text-center">
        <h3 className="text-lg font-semibold truncate w-full">{name}</h3>
        <p className="text-sm font-medium text-gray-600">{role}</p>
        <p className="text-sm text-gray-500 mt-2 break-words">{detail}</p>
      </div>
    </div>
  );
}

export default SponsorCard;
