
import React, { useState } from 'react';
import {
  MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBInput, MDBIcon,
} from 'mdb-react-ui-kit';
import Snackbar from '@mui/material/Snackbar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Form } from 'react-bootstrap';
import IconButton from '@mui/material/IconButton';
import { withRouter } from 'react-router-dom';


const UyeOl = () => {
  const [snackbaropen, setSnackbarOpen] = useState(false);
  const [snackbarmsg, setSnackbarMsg] = useState('');

  const snackbarClose = () => {
    setSnackbarOpen(false);
  }
  const handleSubmit = (e) => {

    const request = JSON.stringify({

      UserFirstName: e.target.userFirstName.value,
      UserName: e.target.userName.value,
      UserMail: e.target.userMail.value,
      UserPassword: e.target.userPassword.value

    });
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_ENDPOINT}/api/User/`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: request
      })
      .then(response => response.json())
      .then((result) => {
        setSnackbarOpen(true);
        setSnackbarMsg(result);
      },
        (error) => {
            setSnackbarOpen(true);
            setSnackbarMsg("Fail");
        },
      )
  }
  return (
    <div>
    <Snackbar //sayfanın nerede gözükmesini istiyorsak anchorOrigin kullanılır
      anchorOrigin={{ vertical: 'center', horizontal: "center" }}
      open={snackbaropen}//snackbar a open özelliği verdin
      autoHideDuration={3000}
      onClose={snackbarClose}
      message={<span id="message-id">{snackbarmsg} </span>}
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={snackbarClose}>
          x
        </IconButton>
      ]}
    />
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '1px' }}>
        <MDBCardBody   >
          <MDBRow>
            <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md- mt-4">Üye Ol</p>
              <Form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon='user me-3' size='lg' />
                  <MDBInput
                    label='Adiniz'
                    id='form1'
                    type='text'
                    required
                    className='w-100'
                    name='userFirstName'
                  />
                </div>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user-check me-3" size="lg" />
                  <MDBInput
                    label='Kullanci Adi'
                    id='form1'
                    type='text'
                    required
                    className='w-100'
                    name='userName'
                  />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg' />
                  <MDBInput
                    label=' Email'
                    id='form2'
                    required
                    type='email'
                    name='userMail'
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg' />
                  <MDBInput
                    label='Şifre'
                    id='form3'
                    required
                    type='password'
                    name="userPassword"
                  />
                </div>
                <MDBBtn type="submit" className='mb-4' size='lg'>Üye ol</MDBBtn>
              </Form>
            </MDBCol>
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex '>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  </div>
  )
}

export default withRouter(UyeOl);


// class UyeOl extends Component {

//   constructor(props) {
//     super(props);
//     this.state =
//     {
//       snackbaropen: false,
//       snackbarmsg: '',

//     }

//     this.handleSubmit = this.handleSubmit.bind(this);

//   }
//   snackbarClose = () => {
//     this.setState({
//       snackbaropen: false
//     });
//   }

//   handleSubmit(e) {
//     const request = JSON.stringify({

//       UserFirstName: e.target.userFirstName.value,
//       UserName: e.target.userName.value,
//       UserMail: e.target.userMail.value,
//       UserPassword: e.target.userPassword.value

//     });
//     e.preventDefault();
//     fetch(`${process.env.REACT_APP_BASE_ENDPOINT}/api/User/`,
//       {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: request
//       })
//       .then(response => response.json())
//       .then((result) => {
//         this.setState({
//           snackbaropen: true,//data geldiğinde snackbar true olur
//           snackbarmsg: result,

//         })
//       },
//         (error) => {
//           this.setState({
//             snackbaropen: true,
//             snackbarmsg: 'Fail'

//           })
//         },
//       )
//   }
//   render() {
//     return (
//       <div>
//         <Snackbar //sayfanın nerede gözükmesini istiyorsak anchorOrigin kullanılır
//           anchorOrigin={{ vertical: 'center', horizontal: "center" }}
//           open={this.state.snackbaropen}//snackbar a open özelliği verdin
//           autoHideDuration={3000}
//           onClose={this.snackbarClose}
//           message={<span id="message-id">{this.state.snackbarmsg} </span>}
//           action={[
//             <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
//               x
//             </IconButton>
//           ]}
//         />
//         <MDBContainer fluid>
//           <MDBCard className='text-black m-5' style={{ borderRadius: '1px' }}>
//             <MDBCardBody   >
//               <MDBRow>
//                 <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>
//                   <p className="text-center h1 fw-bold mb-5 mx-1 mx-md- mt-4">Üye Ol</p>
//                   <Form onSubmit={this.handleSubmit}>
//                     <div className="d-flex flex-row align-items-center mb-4 ">
//                       <MDBIcon fas icon='user me-3' size='lg' />
//                       <MDBInput
//                         label='Adiniz'
//                         id='form1'
//                         type='text'
//                         required
//                         className='w-100'
//                         name='userFirstName'
//                       />
//                     </div>
//                     <div className="d-flex flex-row align-items-center mb-4 ">
//                       <MDBIcon fas icon="user-check me-3" size="lg" />
//                       <MDBInput
//                         label='Kullanci Adi'
//                         id='form1'
//                         type='text'
//                         required
//                         className='w-100'
//                         name='userName'
//                       />
//                     </div>
//                     <div className="d-flex flex-row align-items-center mb-4">
//                       <MDBIcon fas icon="envelope me-3" size='lg' />
//                       <MDBInput
//                         label=' Email'
//                         id='form2'
//                         required
//                         type='email'
//                         name='userMail'
//                       />
//                     </div>

//                     <div className="d-flex flex-row align-items-center mb-4">
//                       <MDBIcon fas icon="lock me-3" size='lg' />
//                       <MDBInput
//                         label='Şifre'
//                         id='form3'
//                         required
//                         type='password'
//                         name="userPassword"
//                       />
//                     </div>

//                     <MDBBtn type="submit" className='mb-4' size='lg'>Üye ol</MDBBtn>
//                   </Form>

//                 </MDBCol>

//                 <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex '>
//                   <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
//                 </MDBCol>

//               </MDBRow>
//             </MDBCardBody>
//           </MDBCard>

//         </MDBContainer>
//       </div>

//     );
//   }
// }
// export default withRouter(UyeOl);



















