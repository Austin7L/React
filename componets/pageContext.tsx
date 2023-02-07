import React from "react";

export const pageInfo = {
  index: {
    title: "index",
    page: "index",
  },

  about: {
    title: "about",
    page: "about",
  },

  default: {
    title: "",
    page: ""
  }
};

export const PageContext = React.createContext(pageInfo.default);
