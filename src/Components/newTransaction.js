import React from 'react'
import '../css/newTranactions.css'
import {Container,Row,Col} from 'react-bootstrap'

const NewTransaction = props => {
  return(
    <div>
      <h3 className= "tranactions">New Transactions</h3>
      <form>
        <div className= "form-group">
          <h6>Text</h6>
          <input className = "form-control" type = "text" placeholder= "enter Text" />
        </div>
        <div className= "form-group">
          <h6>Amount</h6>
          <input className = "form-control" type = "text" placeholder= "enter Amount" />
        </div>
        <Container>
          <Row>
            <Col><button className= "bttn">Expence</button></Col>
            <Col><button className= "bttn">Income</button></Col>
          </Row>
        </Container>
      </form>
    </div>
  )
}

export default NewTransaction