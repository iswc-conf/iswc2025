import React from 'react';

function SponsorCard({ img, name, role, detail, hideImage = false }) {
  return (
    <div className="max-w-xs w-72 h-64 shadow-md rounded-lg overflow-hidden flex flex-col items-center bg-white p-4">
      {!hideImage && (
        <div className="mb-4">
          {img ? (
            <img
              src={img}
              alt={name}
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              <span className="text-sm">No Image</span>
            </div>
          )}
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
