import React, { useEffect, useState } from "react";
import EndPoints from "../Apis/Endpoints";
import Category from "./Category";
import axios from "axios";
import Header from "./Header";
import Navbar from "./Navbar";
const Jewelery = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch();
  }, []);
  const fetch=()=>{
    axios
    .get(EndPoints.JEWELERY_URL)
    .then((response) => {
      console.log(response.data);
      setProducts(response.data);
    })
    .catch((error) => console.log(error));
  }
  return (
    <>
      <Header />
      <Navbar />
      <div className="row">
        {products.map((item, index) => (
          <Category key={index} data={item} />
        ))}
      </div>
    </>
  );
};
export default Jewelery;
