import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

import "./filterListWrapper.scss";
import FilterList from "./FilterList";
import SortList from "./SortList";

export default function FilterListWrapper({ onClose, isSort }) {
  const listRef = useRef(null);
  const arrowStyle = isSort ? "arrow-top-sort" : "arrow-top";

  const handleClickOutside = () => {
    onClose();
  };
  
  useOnClickOutside(listRef, handleClickOutside);

  return (
    <div ref={listRef} className="filter-wrapper">
      <div className={arrowStyle} />
      {isSort ? <SortList /> : <FilterList />}
    </div>
  );
}
