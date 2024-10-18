import React from "react";

export default function Card({ data, delFunc, editFunc, index }) {
  const { src, des, originalTitle, pages, releaseDate, title, id } = data;

  return (
    <>
      <div className="bg-gray-200 rounded-lg p-3 text-black space-y-1">
        <img src={src} alt="cover image" className="w-full h-96 rounded-lg" />
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-xl font-semibold">{originalTitle}</p>
        <p>{pages}</p>
        <p>{releaseDate}</p>
        <p>{des}</p>
        <div className="flex gap-2">
          <button
            className="capitalize bg-white border-[0.1rem] border-black"
            onClick={() => editFunc(data, index)}
          >
            edit
          </button>
          <button
            className="capitalize bg-white border-[0.1rem] border-black"
            onClick={() => delFunc(index)}
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
}
