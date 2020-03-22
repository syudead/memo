import React from 'react';
import Memo from '~/components/Memo';
import { Nav, Container, Row, Col, Navbar } from 'react-bootstrap';

const App = () => {


  return (
    <>
    <Navbar bg="dark" variant="dark" sticky="top">
    <Container>
      <Navbar.Brand href="/">Memo</Navbar.Brand>
    </Container>
    </Navbar>
    <Container>
      <Row>
        <Col>
          <div>nya hello~</div>
          <Memo />
        </Col>
      </Row>
    </Container>
    </>
  )
};

export default App;
