import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setQuotes] = useState([]);

  async function fetchData() {
    const res = await fetch("https://cat-fact.herokuapp.com/facts");
    res.json().then((res) => setQuotes(res));
  }
  useEffect(() => {
    fetchData();
  });
  return data;
};
export default Fetch;
