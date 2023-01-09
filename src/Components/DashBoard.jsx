import { Row } from "reactstrap"
import Body from './Body/Body'
import Card from './Card/Card'
import { Footer } from './Footer/Footer'
import "./navigation.css"



import React from 'react'

 const DashBoard = () => {
  return (
    <div>
    <Row>
      <Body />
    </Row>
    <Row>
      <Card />
    </Row>
    <Row>
      <Footer />
    </Row>
  </div>
  )
}
export default DashBoard;
