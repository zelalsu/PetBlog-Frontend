import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, ButtonToolbar
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import EditProduct from "./EditProduct"
import { FaRegTrashAlt } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import alertifyjs from "alertifyjs";
import AddProduct from "./AddProduct";

const GetProduct = (props) => {

  const [isAdmin, setIsAdmin] = useState(false);
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [brand, setBrand] = useState(null);
  const [productProps, setProductProps] = useState(null);
  const [cart, setCart] = useState([]);
  const [editModalShow, setEditModalShow] = useState(false);
  let editModalClose = () => setEditModalShow(false);
  const [addModalShow, setAddModalShow] = useState(false);
  let addModalClose = () => setAddModalShow(false);


  const addToFavorites = (product) => {
    // Favori listesi oluşt
    debugger
    let newCart = cart;
    let addedItem = newCart.find((c) => c.product.ID === product.ID);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    // Değilse, ürünü listeye ekleyin
    else {
      newCart.push({ product: product, quantity: 1 });
    }
    debugger
    setCart(newCart);

    alertifyjs.success(product.ProductName + "added to favorites", 2);

  };

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin"));
  }, []);

  const deleteDep = (id) => {
    if (window.confirm('Ürünü silmek istediğinize emin misiniz?')) {
      fetch(`${process.env.REACT_APP_BASE_ENDPOINT}/api/ItemProps/` + id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    }
  };

  return (
    <div>
      <Row>
        <Row>
          <Col>
            {isAdmin === 'false' ? (
              <>
                <Button style={{ marginTop: "3em", marginLeft: "70em" }} onClick={() => { props.history.push("/favorites", { cart: cart }) }}  >Favorilerim</Button>

              </>) : null}

          </Col>
          <Col>
            {isAdmin === 'true' ? (
              <>
                <Button style={{ marginTop: "3em" }} onClick={() => {
                  setAddModalShow(true);
                }} >Ürün Ekle</Button>
              </>
            ) : null
            }</Col>
        </Row>



        {props.product.map(product => (
          <Card color="danger" outline key={product.ID} style={{ backgroundColor: "#e6f2ff", width: '25rem', display: "flex", justifyContent: "flex-end", margin: "40px 40px 40px 40px" }}>
            <img
              alt=".."
              className=" img-fluid rounded shadow-lg"
              src={product.Image}
              style={{ width: "auto", height: "500px" }}
            ></img>

            {isAdmin === 'false' ? (
              <>
                <Button onClick={() => { addToFavorites(product) }}>Favorilere ekle</Button>
              </>) : null}
            <CardBody>
              <CardTitle tag="h5">
                {product.ProductName}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6">
                {product.ProductBrand}
              </CardSubtitle>
              <CardText>
                {product.ProductProps}
              </CardText>
              {isAdmin === 'true' ? (
                <>

                  <ButtonToolbar
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: '#008B8B',
                        marginRight: '10px',
                        display: 'flex',
                      }}
                      onClick={() => {
                        setEditModalShow(true);
                        setId(product.ID);
                        setName(product.ProductName);
                        setBrand(product.ProductBrand);
                        setProductProps(product.ProductProps);
                      }}
                    >
                      Güncelle
                    </Button>
                    <Button onClick={() => deleteDep(product.ID)} style={{ backgroundColor: "#B22222", color: "#FFF5EE" }}>
                      <FaRegTrashAlt />
                    </Button>

                    <EditProduct show={editModalShow} onHide={editModalClose} id={id} productProps={productProps} brand={brand} name={name} />
                    <AddProduct show={addModalShow} onHide={addModalClose}></AddProduct>


                  </ButtonToolbar>
                </>
              ) : null
              }
            </CardBody>

          </Card>

        ))}
      </Row>
    </div>
    // </FavoritesContext.Provider>
  );
};
export default withRouter(GetProduct);


