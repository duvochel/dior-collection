import React from "react";

import FilterItem from "./FilterItem";

import { FILTER_ITEMS } from "../../constants";
import "./filterList.scss";

export default function FilterList() {

  return (
    <div className="filter-list-container">
      <ul className="container-flex-v filter-list">
        {FILTER_ITEMS.category1.map((filter, index) => (
          <li key={index}>
            <FilterItem item={filter} />
          </li>
        ))}
      </ul>
      <ul className="container-flex-v filter-list">
        {FILTER_ITEMS.category2.map((filter, index) => (
          <li key={index}>
            <FilterItem item={filter} />
          </li>
        ))}
      </ul>
    </div>
  );
}
