import React, { createContext, useContext, useState } from "react";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [dataObj, setDataObj] = useState({
    title: "",
    originalTitle: "",
    pages: "",
    releaseDate: "",
    des: "",
    src: "",
  });

  const value = { dataObj, setDataObj };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export const usePost = () => {
  return useContext(PostContext);
};
