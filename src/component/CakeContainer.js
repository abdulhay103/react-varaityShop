import React from "react";
import CountUp from "react-countup";
import { Spinner } from "react-bootstrap";

const CakeContainer = () => {
  return (
    <div>
      <CountUp
        className="countup"
        start={0}
        end={100}
        duration={10}
        prefix="Available here "
        suffix=" pices cake only"
      />
      <h2>Number Of Cake</h2>
      <button>
        <span>Buy Cake</span>
        <Spinner animation="grow"></Spinner>
      </button>
    </div>
  );
};

export default CakeContainer;
