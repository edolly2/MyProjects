import React from "react";
import Product from "./Product";

function Products() {
  const getProducts = () => {
    return [
      {
        id: 1,
        imageUrl: "http://loremflickr.com/150/150?random=1",
        productName: "Product 1",
        releasedDate: "May 3, 1991",
        description: "This is the description of the product 1.",
        rating: 4,
        numOfReviews: 2,
      },
      {
        id: 2,
        imageUrl: "http://loremflickr.com/150/150?random=2",
        productName: "Product 2",
        releasedDate: "January 1, 2006",
        description: "This is the description of the product 2.",
        rating: 2,
        numOfReviews: 12,
      },
      {
        id: 3,
        imageUrl: "http://loremflickr.com/150/150?random=3",
        productName: "Product 3",
        releasedDate: "October 31, 2018",
        description: "This is the description of the product 3.",
        rating: 5,
        numOfReviews: 2,
      },
    ];
  };

  const products = getProducts();
  const listProducts = products.map((product) => (
    <Product key={product.id} data={product} />
  ));
  // const products = ["Learning React", "Pro React", "Beginning React"];
  // const listProducts = products.map((product) =>
  //     <li key={product.toString()}>{ product }</li>
  // );
  return (
    <div>
      <h2>Products</h2>
      {listProducts.length > 0 && <ul>{listProducts}</ul>}
      {listProducts.length === 0 && <ul>No Products To Display</ul>}
    </div>
  );
}

export default Products;
