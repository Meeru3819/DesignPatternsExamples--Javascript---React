import React from "react";
import { Button } from "semantic-ui-react";
import singletonCounter from "./Counter";

const DecrementButton = (props) => {
  const handleClick = () => {
    singletonCounter.decrement();
    props.upDataCount();
  };

  return (
    <>
      <Button secondary onClick={handleClick}>
        Decrement
      </Button>
    </>
  );
};

export default DecrementButton;
