import React from 'react'
import { Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Footer } from '../../Footer/Footer';

export default function () {
    return (
        <div  className="container-fluid" style={{ paddingTop: "100px" }}>
            <h3 style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
                KÖPEĞİNİZİ DAHA İYİ TANIMAK İÇİN
            </h3>
            <Row >
                <Col style={{ marginLeft: "5em" }}>
                    <Link to='/kopek-mama'>
                        <Button style={{ width: "500px", height: "100px" }} size="lg"> Köpek Mamalari</Button>
                    </Link>
                </Col>
                <Col>
                    <Link to='/kopek-aksesuar'>
                        <Button style={{ width: "500px", height: "100px" }} size="lg">Köpek Aksesuarlari</Button>
                    </Link>
                </Col>
                <Col >
                    <Link to='/kopek-tasima'>
                        <Button style={{ width: "500px", height: "100px" }} size="lg"> Köpek Taşmalar</Button>
                    </Link>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}
