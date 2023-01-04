import React, { useState } from "react";
import { Card, Segment } from "semantic-ui-react";
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
      <Segment>
        <Card>
          <Card.Content>
            <Card.Header>Singleton</Card.Header>
            <Card.Meta>Design Pattern</Card.Meta>
            <Card.Description>
              Count is <strong>{count}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <IncrementButton upDataCount={updateCountValue} />
            <DecrementButton upDataCount={updateCountValue} />
          </Card.Content>
        </Card>
      </Segment>
    </>
  );
};

export default SingletonPattern;
