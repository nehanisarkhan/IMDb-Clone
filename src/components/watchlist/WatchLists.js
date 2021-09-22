import React from "react";
import WatchListItem from "./WatchListItem";
const WatchLists = ({ value }) => {
  const { watchlist } = value;

  return (
    <div className="container-fluid">
      <div className="row">
        {watchlist.map((item) => {
          return <WatchListItem key={item.id} item={item} value={value} />;
        })}
      </div>
    </div>
  );
};

export default WatchLists;
