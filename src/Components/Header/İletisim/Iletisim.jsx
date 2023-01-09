import emailjs from "emailjs-com"
import { Row } from 'reactstrap'
import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBTextArea
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Form from 'react-bootstrap/Form';
import { Footer } from '../../Footer/Footer';
import alertify from "alertifyjs";

const İletisim = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("service_zw4iwbd", "template_twqlrjc", e.target, "uv35BRiGSE2f58p9v")
      .then(res => {
        console.log(res);
        alertify.success("Mail Gönderildi...", 3)
      }).catch(err => console.log(err));
  }
  
  return (
    <div style={{ marginTop: "30px" }}>
      <Row>
        <MDBContainer >
          <MDBCard className='text-black m-5' style={{ borderRadius: '50px', borderStyle: "solid" }}>
            <MDBCardBody   >
              <MDBRow>
                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex  '>
                  <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                </MDBCol>
                <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                  <p className="text-center h2 mb-5 mx-1 mx-md- mt-4">Bize Ulaşmak için..</p>
                  <Form onSubmit={sendEmail}>
                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon='user me-3' size='lg' />
                      <MDBInput
                        name="name"
                        placeholder="Adınız"
                        type="text"
                        label='Adıniz'
                        required
                        className='w-100'
                      />
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="envelope me-3" size='lg' />
                      <MDBInput

                        label=' Email'
                        required
                        type='email'
                        name='user_mail'
                      />
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="envelope me-3" size='lg' />
                      <MDBTextArea
                        label=' Mesajınız'
                        required
                        type="textarea"
                        name='message'
                      />
                    </div>

                    <MDBBtn type="submit" className='mb-4' size='lg'>GÖNDER</MDBBtn>
                  </Form>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </Row>
      <Footer />
    </div>
  )
}
export default İletisim;