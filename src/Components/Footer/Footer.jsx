
import React from 'react';
import { Image } from 'react-bootstrap';
import { Row, Col, Container } from 'reactstrap';


export const Footer = () => {
  return (
    <div>
      <footer >
        <Container fluid>
          <div className="widget widget_links widget-li-noicon mb-4 " style={{marginTop: "3em"}}>
            <Row>

              <Col style={{ textAlign: "center", paddingTop: "40px" }} >
                <a style={{ textDecoration: "none" }} href='https://www.instagram.com/kopekvelisiii/' ><Image src="https://img.icons8.com/bubbles/100/000000/instagram-new--v2.png" /></a>
                <a style={{ marginLeft: '30px', textDecoration: "none" }} href="/" target="_blank"><Image src="https://img.icons8.com/bubbles/100/000000/youtube-play.png" /></a>
                <a style={{ marginLeft: '30px', textDecoration: "none" }} href="/iletisim" target="_blank"><Image src="https://img.icons8.com/bubbles/100/000000/weixing--v1.png" /></a>

              </Col>
            </Row>
          </div>
          <div style={{ backgroundColor: '#F0F8FF', padding:"2em" }} className="text-center text-md-start "  >
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-grayish"></i>🐱Su-Pet-Blog🐶
                </h6>
                <p>
                  Bu sayfada hayvanlarımıza aldığımız ürünlerin özellikleri mevcuttur. Aynı zamanda bir blog sayfasıdır. Hayvanlarla ilgili istediğiniz yazıya ulaşabilirsiniz...HEP SEVGİYLE KALIN..♥
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  KURUMSAL
                </h6>
                {/* <p>
                  <a href="/" className="text-reset">Hakkımızda</a>
                </p> */}
                <p>
                  <a href="/iletisim" className="text-reset">İletişim</a>
                </p>

              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4">Size Nasıl Yardımcı OLABİLİRİZ?</h6>
                <p><i className="fas fa-home me-3 text-grayish"></i>Ankara,Yenimahalle</p>
                <p>
                  <i className="fas fa-envelope me-3 text-grayish"></i>
                  supetshop@gmail.com
                </p>
                <p><i className="fas fa-phone me-3 text-grayish"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3 text-grayish"></i> + 01 234 567 89</p>
              </div>

            </div>

          </div>
        </Container>




      </footer>

    </div>
  );
};