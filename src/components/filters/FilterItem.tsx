import React, { useRef, useState } from "react";
import classNames from "classnames";
import { useOnClickOutside } from "usehooks-ts";

import "./filterItem.scss";

export type Filter = {
  label: string;
  iconUrl?: string;
}

interface FilterItemProps {
  item: Filter,
  isTitle?: boolean,
}

export default function FilterItem({ item, isTitle }: FilterItemProps) {
  const [isSelected, setIsSelected] = useState(false);

  const labelRef = useRef(null);

  const handleClickOutside = () => {
    setIsSelected(false);
  };

  useOnClickOutside(labelRef, handleClickOutside);

  function handleClick() {
    setIsSelected(true);
  }

  return (
    <button
      ref={labelRef}
      className={classNames({ selected: isSelected }, "filter-item", {
        "selected-title": isSelected && isTitle,
      })}
      onClick={handleClick}
    >
      {item.iconUrl && (
        <div className={isTitle ? "icon-item-title" : "icon-item"}>
          <img alt="icon" src={item.iconUrl} />
        </div>
      )}
      <span className={isTitle ? "label-item-title" : "label-item"}>
        {item.label?.toUpperCase()}
      </span>
    </button>
  );
}
