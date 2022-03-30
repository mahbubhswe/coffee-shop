import React, { useContext, useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { contextStore } from "../../utils/Store";
import { Store } from "react-notifications-component";
import ItemSorting from "../../components/ItemSorting";
import {data } from "../../utils/data"
export default function Home() {
  const [allItem, setAllItem] = useState(
    data.filter((x)=>x.category=="coffee")
    
    );
  const { dispatch } = useContext(contextStore);
  const [sortOption, setSortOption] = useState("");

  const AddToCart = (item) => {
    item.qty = 1;
    dispatch({ type: "ADD_TO_CART", payload: item });
    Store.addNotification({
      title: "Success",
      message: "Your item added to cart!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
  };

  const sortProducts = (event) => {
    const sort = event.target.value;
    setSortOption(sort);
    if (sort === "") {
      setAllItem(allItem);
    } else {
      const its = allItem
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "heighest"
            ? a.price < b.price
              ? 1
              : -1
            : a.id < b.id
            ? 1
            : -1
        );
      setAllItem(its);
    }
  };

  return (
    <Layout>
      <ItemSorting
        sortOption={sortOption}
        sortProducts={sortProducts}
      ></ItemSorting>
      <div className="productContainer">
        {allItem
          ? allItem.map((product) => (
              <div className="item" key={product.id}>
                <Image
                  src={product.img}
                  height={200}
                  width={280}
                  alt={product.name}
                  quality={100}
                />
                <div className="price">
                  <strong>{product.name}</strong>
                </div>
                <div className="price">
                  <strong>Price: $</strong>
                  {product.price}
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={() => AddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            ))
          : null}
      </div>
    </Layout>
  );
}
