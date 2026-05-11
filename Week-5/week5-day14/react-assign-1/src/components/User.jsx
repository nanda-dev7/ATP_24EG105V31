import React from "react";

const User = ({ name, email, image }) => {
  return (
    <div className="w-56 rounded-2xl border border-gray-300 bg-white p-4 text-center shadow-sm transition hover:shadow-md">
      <img
        src={image}
        alt={name}
        className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
      />

      <h2 className="text-base font-semibold text-gray-800">{name}</h2>
      <p className="mt-1 break-words text-sm text-gray-500">{email}</p>

      <button className="mt-4 rounded-md border border-gray-400 px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100">
        Profile
      </button>
    </div>
  );
};

export default User;