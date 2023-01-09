import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((item) => {
    const { id, title, image, price, category } = item;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} style={{ height: "300px" }} />
              </div>
              <div className="content">
                <div className="header">{title.substring(0, 10)}</div>
                <div className="meta price">${price}</div>
                <div className="meta ">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {renderList}
      </div>
    </>
  );
};

export default ProductComponent;
