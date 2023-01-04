import React from "react";
import { Button } from "semantic-ui-react";
import singletonCounter from "./Counter";

const IncrementButton = (props) => {
  const handleClick = () => {
    singletonCounter.increment();
    props.upDataCount();
  };

  return (
    <>
      <Button primary onClick={handleClick}>
        Increment
      </Button>
    </>
  );
};

export default IncrementButton;
