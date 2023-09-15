import "../styles/filters.scss";

// TODO : remove sort icon on mobile
export default function Filters() {
  return (
    <div className="filters-container">
      <div className="filter">
        <div className="image-box underlined">
          <img alt="btn-filter" src="/images/btn_filters.png" />
        </div>
      </div>
      <div className="image-box">
        <img alt="btn-sort" src="/images/btn_sort.png" />
      </div>
    </div>
  );
}
