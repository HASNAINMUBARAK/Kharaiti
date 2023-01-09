import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../containers/redux/actions/productActions";
import axios from "axios";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(products);

  /// fetching  function
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("error", error);
      });
    dispatch(setProducts(response.data, "data"));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products, "products");
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
