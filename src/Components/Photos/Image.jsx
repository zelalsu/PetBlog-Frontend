import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

class Image extends Component {//ref oluşturma kısmı

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.myRef);
  }
  render() {
    const { image } = this.props;//gelen propsu image i aldık
    return (
    
        <Card style={{  backgroundColor: "#e6f2ff", width: '35em', height: "550px", display: "flex",
         justifyContent: "flex-end", margin: "30px 30px 30px 30px" }}  >
          <img height={"550"} width={"auto"} ref={this.myRef} key={image.id} src={image.urls.small} alt="" />
        </Card>
    )
  }
}
export default Image
