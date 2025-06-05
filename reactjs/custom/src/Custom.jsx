import React from "react";
import { useState, useEffect } from "react";

const Custom = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then((res) => setData(res.json()));
  }, [url]);

  return [data];
};

export default Custom;
