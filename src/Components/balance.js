import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const Balance = (props) => {
  return (
    <div >
      <h4>Your Balance</h4>
      <h1>Total</h1>
      <Container>
  <Row className="justify-content-md-center">
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
    </div>
  )
}

export default Balance