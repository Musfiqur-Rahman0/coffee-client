import React from "react";

const InstaGallery = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div className="space-y-3 text-center">
        <p className="text-sm text-gray-400">-- Follow Us Now --</p>
        <h2 className="font-secondary text-3xl font-semibold text-title">
          Follow on Instagram
        </h2>
      </div>
      <div className="w-full grid grid-cols-4 gap-5 mt-10">
        <img
          className="rounded-lg"
          src="/assets/cups/Rectangle 10.png"
          alt=""
        />
        <img
          className="rounded-lg"
          src="/assets/cups/Rectangle 11.png"
          alt=""
        />
        <img
          className="rounded-lg"
          src="/assets/cups/Rectangle 12.png"
          alt=""
        />
        <img
          className="rounded-lg"
          src="/assets/cups/Rectangle 13.png"
          alt=""
        />
        <img
          className="rounded-lg"
          src="/assets/cups/Rectangle 14.png"
          alt=""
        />
        <img
          className="rounded-lg"
          src="/assets/cups/Rectangle 15.png"
          alt=""
        />
        <img
          className="rounded-lg"
          src="/assets/cups/Rectangle 10.png"
          alt=""
        />
        <img
          className="rounded-lg"
          src="/assets/cups/Rectangle 9.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default InstaGallery;
