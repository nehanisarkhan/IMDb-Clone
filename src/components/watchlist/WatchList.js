import React from "react";
import { MovieConsumer } from "../../Context";
import WatchLists from "./WatchLists";
import EmptyWatchlist from "./EmptyWatchlist";
import { Button } from "react-bootstrap";
const WatchList = () => {
  return (
    <section>
      <MovieConsumer>
        {(value) => {
          const { watchlist } = value;
          if (watchlist.length > 0) {
            return (
              <>
                <h2 className="text-center mt-3 mb-5">Your WatchList</h2>
                <Button
                  variant="secondary"
                  onClick={() => value.clearWatchlist()}
                  className="text-capitalize"
                >
                  remove all
                </Button>
                <WatchLists value={value} />
              </>
            );
          } else {
            return <EmptyWatchlist />;
          }
        }}
      </MovieConsumer>
    </section>
  );
};

export default WatchList;
