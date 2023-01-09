import { Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Footer } from '../../Footer/Footer';
import React from 'react'

 const Kopekmama = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
                <h3 style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
                KÖPEĞİNİZİ DAHA İYİ TANIMAK İÇİN
            </h3>
            <h5  style={{ display: "flex", color:  " #5F9EA0",justifyContent: "center", marginBottom: "40px" }}>KÖPEĞİNİZİ DAHA İYİ TANIYIP SİZE EN UYGUN MAMAYI BULMAK İSTİYORUZ</h5>

                <Row >

                <Col style={{marginLeft:"15em"}}>
                        <Link to='/kopek-mama/yavru-kopek'>
                            <Button style={{ width: "500px", height: "100px" }} size="lg"> Yavru Köpek Mamaları</Button>
                        </Link>

                    </Col>
                    <Col>
                        <Link to='/kopek-mama/yetiskin-kopek'>
                            <Button style={{ width: "500px", height: "100px" }} size="lg"> Yetiskin Köpek Mamaları</Button>
                        </Link>
                    </Col>


                </Row>
                <Footer />
            </div>
  )
}


export default Kopekmama;