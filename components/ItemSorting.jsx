import React from "react";
import styles from "../styles/ItemSorting.module.css";
export default function ItemSorting({ sortOption, sortProducts }) {
  return (
    <div className={styles.container}>
      <strong className={styles.title}>Sort By: </strong>
      <select className={styles.selectTag} onChange={sortProducts}>
        <option value="">No sorting applyed</option>
        <option value="lowest">Price(Low to high)</option>
        <option value="heighest">Price(High to low)</option>
      </select>
    </div>
  );
}
