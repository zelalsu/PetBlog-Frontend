
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Row
} from 'reactstrap';
import { withRouter } from 'react-router'
import React from 'react'
import { Footer } from '../Footer/Footer'

const Favorites = (props) => {
  debugger
  return (
    <div>


      <div className='container-fluid'>
        <h3 style={{ display: "flex", justifyContent: "center", marginTop: "40px" ,borderStyle: "solid", borderRadius: "20px" }}>
          Favori Ürünleriniz
        </h3>
      </div>
  
      <Row>
        {props.location && props.location.state && props.location.state.cart ? props.location.state.cart.map(favorite => (

          <Card color="danger" outline key={favorite.product.ID} style={{ backgroundColor: "#e6f2ff", width: '25rem', display: "flex", justifyContent: "flex-end", margin: "40px 40px 40px 40px" }}>
            <img
              alt=".."
              className=" img-fluid rounded shadow-lg"
              src={favorite.product.Image}
              style={{ width: "auto", height: "500px" }}
            ></img>
            <CardBody>
              <CardTitle tag="h5">
                {favorite.product.ProductName}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6">
                {favorite.product.ProductBrand}
              </CardSubtitle>
              <CardText>
                {favorite.product.ProductProps}
              </CardText>

            </CardBody>

          </Card>
        )) : null}
      </Row>



      <Footer />
    </div>
  )

}





export default withRouter(Favorites);