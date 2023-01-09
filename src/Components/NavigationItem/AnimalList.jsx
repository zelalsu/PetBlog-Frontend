
import GetProduct from '../Header/GetProduct';

import React, { useState } from 'react'
import { useEffect } from 'react';


 const AnimalList = (props) => {

const[products,setProducts]=useState([]);


useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_ENDPOINT}/api/ItemProps/` + props.ItemId)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [props.ItemId]);

  return (
    <div>
      <GetProduct product={products} />
    
    </div>
  )
}
export default AnimalList;

// export default class AnimalList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: []
//         }
//     }
//     componentDidUpdate() {
//         this.getProducts();
//     }
//     componentDidMount() {
       
//         this.getProducts();
//     }
//     getProducts = () => {
    
//         fetch(
//             `${process.env.REACT_APP_BASE_ENDPOINT}/api/ItemProps/` + this.props.ItemId,
//         )
//             .then(response => response.json())
//             .then(data => this.setState({ products: data }));;
//     }
//     render() {
//         return (
//             <div >
//                 <GetProduct product={this.state.products} />
//             </div >
//         );
//     }
// }


