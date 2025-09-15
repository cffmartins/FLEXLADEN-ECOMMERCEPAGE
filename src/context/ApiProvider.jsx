import React, { useState, useEffect } from "react";
// importing context already created
import ApiContext from "./ApiContext";

const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <ApiContext.Provider value={{ data, loading }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;

// ApiProvider component to fetch data and provide it via context
