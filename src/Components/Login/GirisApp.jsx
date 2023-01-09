
import {
  MDBBtn,
  MDBInput,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
}
  from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Form from 'react-bootstrap/Form';
import { withRouter } from "react-router-dom";
import alertify from "alertifyjs";
import { Link } from 'react-router-dom';



import React from 'react'

const GirisApp = (props) => {

  function handleSubmit(e) {
    e.preventDefault();
    const request = JSON.stringify({
      UserName: e.target.name.value,
      UserPassword: e.target.password.value

    });
    fetch(`${process.env.REACT_APP_BASE_ENDPOINT}/api/Login/`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: request
      })
      .then(Response => Response.json())
      .then((result) => {
        if (result) {
          if (result.Jwt) {

            localStorage.setItem("userToken", result.Jwt);
            localStorage.setItem("userName", result.Username);
            localStorage.setItem("password", result.Password);
            localStorage.setItem("userId", result.UserId);
            localStorage.setItem("isAdmin", result.IsAdmin);
          }
          props.history.push("/Anasayfa");
          window.location.reload(false);
          alertify.success("Giriş yapıldı...", 3)
        }
      },
      )
  };

  return (
    <div>
      <MDBContainer fluid>
        <MDBCard className='text-black m-5' style={{ borderRadius: '1px' }}>
          <MDBCardBody   >
            <MDBRow>

              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex '>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
              </MDBCol>
              <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <h4 style={{ color: "GrayText" }} className="text-center  fw-bold  mx-1 mx-md- mt-4" >Giriş Yapın</h4>
                <Form style={{ marginTop: "3em" }} className="form " onSubmit={handleSubmit.bind(this)}>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user-check me-3" size="lg" />
                    <MDBInput
                      label='Kullanici Adi'
                      type='text'
                      name='name'
                      required
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg' />
                    <MDBInput
                      label='Sifre'
                      type='password'
                      name="password"
                      required
                    />
                  </div>
                  <MDBBtn style={{ marginLeft: "6em" }} type="submit" size='lg'>Giriş</MDBBtn>
                </Form>
                <Link className="mb-8 mt-3" onClick={() => { props.history.push("/uye-ol") }} type="submit" size='lg'> Hesabınız yok mu?  Hemen Üye Olun</Link>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  )
}

export default withRouter(GirisApp);




// class GirisApp extends Component {


//   handleSubmit(e) {
//     e.preventDefault();
//     const request = JSON.stringify({
//       UserName: e.target.name.value,
//       UserPassword: e.target.password.value

//     });
//     fetch(`${process.env.REACT_APP_BASE_ENDPOINT}/api/Login/`,
//       {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: request
//       })
//       .then(Response => Response.json())
//       .then((result) => {
//         if (result) {
//           if (result.Jwt) {

//             localStorage.setItem("userToken", result.Jwt);
//             localStorage.setItem("userName", result.Username);
//             localStorage.setItem("password", result.Password);
//             localStorage.setItem("userId", result.UserId);
//             localStorage.setItem("isAdmin", result.IsAdmin);
//           }
//           this.props.history.push("/Anasayfa");
//           window.location.reload(false);
//           alertify.success("Giriş yapıldı...", 3)
//         }
//       },
//       )
//   };

//   render() {
//     return (
//       <div>
//         <MDBContainer fluid>
//           <MDBCard className='text-black m-5' style={{ borderRadius: '1px' }}>
//             <MDBCardBody   >
//               <MDBRow>

//                 <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex '>
//                   <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
//                 </MDBCol>
//                 <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>
//                 <h4 style={{ color:"GrayText"}} className="text-center  fw-bold  mx-1 mx-md- mt-4" >Giriş Yapın</h4>
//                   <Form style={{ marginTop: "3em" }} className="form " onSubmit={this.handleSubmit.bind(this)}>
//                     <div className="d-flex flex-row align-items-center mb-4 ">
//                       <MDBIcon fas icon="user-check me-3" size="lg" />
//                       <MDBInput
//                         label='Kullanici Adi'
//                         type='text'
//                         name='name'
//                         required
//                       />
//                     </div>
//                     <div className="d-flex flex-row align-items-center mb-4">
//                       <MDBIcon fas icon="lock me-3" size='lg' />
//                       <MDBInput
//                         label='Sifre'
//                         type='password'
//                         name="password"
//                         required
//                       />
//                     </div>
//                     <MDBBtn style={{ marginLeft: "6em" }} type="submit" size='lg'>Giriş</MDBBtn>
//                   </Form>
//                   <Link className="mb-8 mt-3" onClick={() => { this.props.history.push("/uye-ol") }} type="submit" size='lg'> Hesabınız yok mu?  Hemen Üye Olun</Link>

//                 </MDBCol>



//               </MDBRow>
//             </MDBCardBody>
//           </MDBCard>

//         </MDBContainer>


//       </div>
//     )
//   }
// }


// export default withRouter(GirisApp);