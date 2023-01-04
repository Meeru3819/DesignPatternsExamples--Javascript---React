import React, { useState } from "react";
import { Statistic } from "semantic-ui-react";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import singletonCounter from "./Counter";

const SingletonPattern = () => {
  const [count, setCount] = useState(0);

  const updateCountValue = () => {
    setCount(singletonCounter.getCount());
  };

  return (
    <>
      <IncrementButton upDataCount={updateCountValue} />
      <DecrementButton upDataCount={updateCountValue} />
      <Statistic.Group>
        <Statistic label="Count" value={count} />
      </Statistic.Group>
    </>
  );
};

export default SingletonPattern;
