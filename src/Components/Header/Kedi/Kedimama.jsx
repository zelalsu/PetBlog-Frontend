import { Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Footer } from '../../Footer/Footer';
import React from 'react'


const Kedimama = () => {
    return (
        <div style={{ paddingTop: "100px" }}>
            <h3 style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
                KEDİNİZİ DAHA İYİ TANIMAK İÇİN
            </h3>
            <Row >
                <Col style={{ marginLeft: "15em" }}>
                    <Link to='/kedi-mama/yavru-kedi'>
                        <Button style={{ width: "500px", height: "100px" }} size="lg"> Yavru Kedi Mamaları</Button>
                    </Link>
                </Col>
                <Col>
                    <Link to='/kedi-mama/yetiskin-kedi'>
                        <Button style={{ width: "500px", height: "100px" }} size="lg"> Yetiskin Kedi Mamaları</Button>
                    </Link>
                </Col>


            </Row>
            <Footer />
        </div>
    )
}


export default Kedimama;


