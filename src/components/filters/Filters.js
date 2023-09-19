import { useState } from "react";

import FilterListWrapper from "./FilterListWrapper";
import FilterItem from "./FilterItem";

import "./filters.scss";

export default function Filters() {
  const filterItem = { label: "filters", iconUrl: "/images/filtersIcon.png" };
  const sortItem = { label: "sort", iconUrl: "/images/sortIcon.png" };
  const [isFilterListVisible, setIsFilterListVisible] = useState(false);
  const [isSortListVisible, setIsSortListVisible] = useState(false);

  function handleClickFilters() {
    setIsFilterListVisible(true);
  }

  function handleClickSort() {
    setIsSortListVisible(true);
  }

  function handleCloseFilters() {
    setIsFilterListVisible(false);
  }

  function handleCloseSort() {
    setIsSortListVisible(false);
  }

  return (
    <div className="filters-container">
      <div className="filter" onClick={handleClickFilters}>
        <FilterItem item={filterItem} isTitle />
      </div>
      <div className="filter" onClick={handleClickSort}>
        <FilterItem item={sortItem} isTitle />
      </div>
      {isFilterListVisible && (
        <FilterListWrapper onClose={handleCloseFilters} />
      )}
      {isSortListVisible && (
        <FilterListWrapper onClose={handleCloseSort} isSort />
      )}
    </div>
  );
}
