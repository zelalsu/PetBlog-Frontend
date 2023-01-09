
import { Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Footer } from '../../Footer/Footer';

import React from 'react'

const Kedi = () => {
    return (
        <div style={{ paddingTop: "100px" }}>

            <h3 style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>

                KEDİNİZİ DAHA İYİ TANIMAK İÇİN</h3>

            <h5 style={{ display: "flex", color: " #5F9EA0", justifyContent: "center", marginBottom: "40px" }}>KEDİNİZİ DAHA İYİ TANIYIP SİZE EN UYGUN MAMAYI BULMAK İSTİYORUZ</h5>
            <Row >
                <Col style={{ marginLeft: "5em" }}>

                    <Link to='/kedi-mama'>
                        <Button style={{ width: "500px", height: "100px" }} size="lg"> Kedi Mamaları</Button>
                    </Link>
                </Col>
                <Col >
                    <Link to='/kedi-aksesuar'>
                        <Button style={{ width: "500px", height: "100px" }} size="lg">Kedi Aksesuarları</Button>
                    </Link>

                </Col>
                <Col >
                    <Link to='/kedi-tasima'>
                        <Button style={{ width: "500px", height: "100px" }} size="lg"> Kedi Taşımaları</Button>
                    </Link>

                </Col>

            </Row>
            <Footer />
        </div>
    )
}

export default Kedi;
