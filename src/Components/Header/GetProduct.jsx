import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, ButtonToolbar
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import EditProduct from "./EditProduct"
import { FaRegTrashAlt } from "react-icons/fa";
// import { AddProduct } from './AddProduct';
import React, { useState, useEffect  } from 'react';
import alertifyjs from "alertifyjs";
import AddProduct from "./AddProduct";
import Favorites from "../Favorites/Favorites"



const GetProduct = (props) => {


  const [isAdmin, setIsAdmin] = useState(false);
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [brand, setBrand] = useState(null);
  const [productProps, setProductProps] = useState(null);
  const [cart,setCart]=useState([]);
  const [editModalShow, setEditModalShow] = useState(false);
  let editModalClose = () => setEditModalShow(false);
  const [addModalShow,setAddModalShow]=useState(false);
  let addModalClose=()=> setAddModalShow(false);
 
  
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
      newCart.push({ product:product, quantity: 1 });
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
    // <FavoritesContext.Provider value={{favorites,addToFavorites}}>
    <div>
      <Row>
        <Button onClick={() => { props.history.push("/favorites", { cart: cart }) }}  >Favorilerim</Button>


        {isAdmin === 'true' ? (
            <>
        <Button onClick={()=>{
                setAddModalShow(true);
        }} >Ürün Ekle</Button>
           </>
                ) : null
              }
        {props.product.map(product => (
          <Card color="danger" outline key={product.ID} style={{ backgroundColor: "#e6f2ff", width: '25rem', display: "flex", justifyContent: "flex-end", margin: "40px 40px 40px 40px" }}>
            <img
              alt=".."
              className=" img-fluid rounded shadow-lg"
              src={product.Image}
              style={{ width: "auto", height: "500px" }}
            ></img>           
            <Button onClick={()=>{addToFavorites(product)}}>Favorilere ekle</Button>
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
                      {/* <Favorites cart={cart} /> */}

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


// export default class GetProduct extends Component {
//   constructor(props)
//   {
//     super(props);
//     this.state(
//       {
//         isAdmin:null
//   editModalShow:false
//       }
//     )
//   }
 
//   componentDidMount() {

//     this.setState({isAdmin:localStorage.getItem("isAdmin")})
//   }
//   deleteDep(id) {
//     if (window.confirm('Ürünü silmek istediğinize emin misiniz?')) {
//       fetch( `${process.env.REACT_APP_BASE_ENDPOINT}/api/ItemProps/` + id, {
//         method: 'DELETE',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         }
//       }
//       )
//     }
//   }
//   render() {
//     const { id, name, brand, props, isAdmin } = this.state
//     güncelleme işlemi için const değeri oluşturduk ve o değerleri güncelle butonuna gönderdik

//     true olan add modal show değerimi false yapıyor. Tıklandığı zamana açılıyor. Diğer türlü false oluyor
//     let editModalClose = () => this.setState({ editModalShow: false })
//     return (
//       <div>
//         <Row>
//           {/* <Button onClick={() => this.setState({ addModalShow: true })}>Yeni  ekle</Button> */}
//           {this.props.product.map(product => (
//             <Card color="danger" outline key={product.ID} style={{ backgroundColor: "#e6f2ff", width: '25rem', display: "flex", justifyContent: "flex-end", margin: "40px 40px 40px 40px" }}>
//               <img
//                 alt=".."
//                 className=" img-fluid rounded shadow-lg"
//                 src={product.Image}
//                 style={{ width: "auto", height: "500px" }}
//               ></img>
//               <CardBody   >
//                 <CardTitle tag="h5">
//                   {product.ProductName}
//                 </CardTitle>
//                 <CardSubtitle
//                   className="mb-2 text-muted"
//                   tag="h6">
//                   {product.ProductBrand}
//                 </CardSubtitle>
//                 <CardText>
//                   {product.ProductProps}
//                 </CardText>
//                 {
//                   isAdmin === "true" ? <>
//                     <ButtonToolbar style={{ justifyContent: "center", alignItems: "center" }}>
//                       <Button style={{ backgroundColor: "#008B8B", marginRight: "10px", display: "flex" }} onClick={() => this.setState({
//                         editModalShow: true,
//                         id: product.ID,
//                         name: product.ProductName,
//                         brand: product.ProductBrand,
//                         props: product.ProductProps

//                         image: product.Image
//                       }
//                       )} >

//                         Güncelle
//                       </Button>
//                       <Button onClick={() => this.deleteDep(product.ID)} style={{ backgroundColor: "#B22222", color: "#FFF5EE" }} ><FaRegTrashAlt />
//                       </Button>

//                       <EditProduct show={this.state.editModalShow} onHide={editModalClose} id={id} props={props} brand={brand} name={name} />
//                     </ButtonToolbar>
//                   </> : null}
//               </CardBody>
//               {/* <AddProduct show={this.state.addModalShow} onHide={addModalClose} /> */}

//             </Card>


//           ))}

//         </Row>


//       </div >
//     )
//   }
// }
