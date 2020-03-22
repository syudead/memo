import React, { useState, useCallback } from 'react';
import { Button, Nav, Form } from 'react-bootstrap';

const Memo = () => {
  const [count, setCount] = useState(1)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const props = {
    omg: 1,
  };

  return (
    <div>
      <Form.Control as="textarea"></Form.Control>
      <Button variant="danger" {...props} onClick={() => increment()}>this is button [{count}]</Button>
    </div>
  )
};

export default Memo;
