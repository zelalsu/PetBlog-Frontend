
import { Table } from 'react-bootstrap'
import { withRouter } from 'react-router'
import React from 'react'

const Favorites = (props) => {
  debugger
  return (
    <div>
      <h5>Favorilerim</h5>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Adı</th>
            <th>Markası</th>
            <th>Özellikleri</th>
          </tr>
        </thead>
        <tbody>
          {props.location && props.location.state && props.location.state.cart ? props.location.state.cart.map(favorite => (
            <tr key={favorite.ID}>
              <th scope="row">{favorite.product.ID}</th>
              <td>{favorite.product.ItemId}</td>
              <td>{favorite.product.ProductName}</td>
              <td>{favorite.product.ProductBrand}</td>
              <td>{favorite.product.ProductProps}</td>
              <td>{favorite.product.Image}</td>

            </tr>
          )) : null}
        </tbody>
      </Table>

    </div>
  )

}





export default withRouter(Favorites);