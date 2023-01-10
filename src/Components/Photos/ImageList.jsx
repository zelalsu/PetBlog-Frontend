import React from 'react';
import { Row } from 'react-bootstrap';
import Image from './Image'


const ImageList = ({ images }) => {//map de döndürmk için


  const preparedImageList = images.map(image => {

    return (
      <Image key={image.id} image={image} />

    )
    //10 tane image vardı. her bir image i dönerek  bir const a atatık

  })

  return (
    //preparedImageList i bastırmış olduk
    <div style={{ backgroundColor: "transparent" }}>
      <Row>
        {preparedImageList}
      </Row>

    </div>
  )

}

export default ImageList;
