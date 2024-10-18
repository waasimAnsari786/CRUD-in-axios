import React, { useState } from "react";
import { postData, putData } from "../APIs/CRUDAPIS";
import { usePost } from "../context/PostContext";

export default function Form({ setAPI_Data, isEdit, setIsEdit }) {
  const { setDataObj, dataObj } = usePost();

  const handlOnChange = (e) => {
    const { name, value } = e.target;
    setDataObj((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addData = async (data) => {
    try {
      const res = await postData(data);
      setAPI_Data((prev) => {
        return [...prev, data];
      });
    } catch (error) {
      alert(error);
    }
  };

  const handleOnSubmit = (data) => {
    addData(data);
    setDataObj({
      title: "",
      originalTitle: "",
      pages: "",
      releaseDate: "",
      des: "",
      src: "",
    });
  };

  const handleOnEdit = async (updatedPost) => {
    console.log(updatedPost);

    const res = await putData(updatedPost.title, updatedPost);
    setAPI_Data((prev) => {
      return prev.map((curObj) => {
        return curObj.title === updatedPost.title ? updatedPost : curObj;
      });
    });

    setDataObj({
      title: "",
      originalTitle: "",
      pages: "",
      releaseDate: "",
      des: "",
      src: "",
    });

    setIsEdit(false);
  };

  const { title, originalTitle, pages, releaseDate, des, src } = dataObj;

  return (
    <>
      <form
        className="bg-green-900 w-1/2 rounded-lg mx-auto mt-5"
        onSubmit={(e) => {
          e.preventDefault();
          isEdit === false ? handleOnSubmit(dataObj) : handleOnEdit(dataObj);
        }}
      >
        <div className="flex flex-wrap gap-2 justify-center p-4  ">
          <input
            type="text"
            placeholder="Title"
            className="rounded-lg p-3 text-green-950 focus:outline-none w-1/2"
            name="title"
            value={title}
            onChange={handlOnChange}
          />
          <input
            type="text"
            placeholder="Original Title"
            className="rounded-lg p-3 text-green-950 focus:outline-none w-1/2"
            name="originalTitle"
            value={originalTitle}
            onChange={handlOnChange}
          />
          <input
            type="number"
            placeholder="Pages"
            className="rounded-lg p-3 text-green-950 focus:outline-none w-1/2"
            name="pages"
            value={pages}
            onChange={handlOnChange}
          />
          <input
            type="date"
            placeholder="Release Date"
            className="rounded-lg p-3 text-green-950 focus:outline-none w-1/2"
            name="releaseDate"
            value={releaseDate}
            onChange={handlOnChange}
          />
          <input
            type="text"
            placeholder="Description"
            className="rounded-lg p-3 text-green-950 focus:outline-none w-1/2"
            name="des"
            value={des}
            onChange={handlOnChange}
          />
          <input
            type="text"
            placeholder="SRC"
            className="rounded-lg p-3 text-green-950 focus:outline-none w-1/2"
            name="src"
            value={src}
            onChange={handlOnChange}
          />
          <button className="rounded-lg p-3 text-green-950 w-1/2 bg-white">
            {isEdit === false ? "add" : "edit"}
          </button>
        </div>
      </form>
    </>
  );
}
