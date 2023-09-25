import React from "react";

import FilterItem from "./FilterItem";

import { SORT_ITEMS } from "../../constants";
import "./sortList.scss";

export default function SortList() {
  return (
    <div className="sort-list-container">
      <ul className="container-flex-v sort-list">
        {SORT_ITEMS.map((sortItem, index) => (
          <li key={index}>
            <FilterItem item={sortItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
