import React from "react";
import axios from "axios";

const instance = (path) =>
  axios.create({
    baseURL: `https://api.themoviedb.org/3${path}?api_key=99090e29e8bdefea91a422c1d35f8204`,
  });

export default instance;
