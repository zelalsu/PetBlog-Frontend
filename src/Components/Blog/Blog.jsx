import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {
  MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow,
} from 'mdb-react-ui-kit';
import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import { Footer } from '../Footer/Footer';

const Blog = (props) => {

  const [blogs, setBlogs] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin"));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_ENDPOINT}/api/Blog`)
      .then(response => response.json())
      .then(data => setBlogs(data));
  });
  return (
    <div >
      <Col>
        <Row >

          {isAdmin === 'false' ? (
            <>
              <Button onClick={() => props.history.push('/blog-ekle')} >Yeni Blog Ekle</Button>
            </>
          ) : null
          }
          {blogs.map(blog => (
            <MDBCard key={blog.BlogId} style={{ maxWidth: '400px', display: "flex", justifyContent: "flex-end", margin: "40px 40px 40px 40px",  }}>
              <MDBRow className='g-0'>
                <MDBCardImage alt=".."
                  className=" img-fluid rounded shadow-lg"
                  src={blog.BlogImage}
                  style={{ width: "auto", height: "500px" }} />
                <MDBCardBody >
                  <MDBCardTitle>{blog.BlogName}</MDBCardTitle>
                  <MDBCardText >
                    <small className='text-muted'>
                    </small>
                  </MDBCardText>
                  <ButtonToolbar>
                    <Button onClick={() => {
                      props.history.push("/blog-page", { blog: blog })
                    }}>
                      Devamı..
                    </Button>
                  </ButtonToolbar>
                </MDBCardBody>
              </MDBRow>
            </MDBCard>
          ))}
        </Row>
      </Col>
     <Footer/>
    </div>
  );
};

export default withRouter(Blog);
// class Blog extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       blogs: [],
//     }
//   }
//   componentDidMount() {
//     this.handleSubmit();
//   }

//   handleSubmit() {
//     fetch(`${process.env.REACT_APP_BASE_ENDPOINT}/api/Blog`
//     )
//       .then(response => response.json())
//       .then(data => this.setState({ blogs: data }));;
//   }
//   render() {
//     return (
//       <div>
//         <Col >
//           <Row>
//             {this.state.blogs.map(blog => (
//               <MDBCard key={blog.BlogId} style={{ maxWidth: '540px', display: "flex", justifyContent: "flex-end", margin: "40px 40px 40px 40px" }}>
//                 <MDBRow className='g-0'>
//                   <MDBCardImage alt=".."
//                     className=" img-fluid rounded shadow-lg"
//                     src={blog.BlogImage}
//                     style={{ width: "auto", height: "auto" }} />
//                   <MDBCardBody >
//                     <MDBCardTitle>{blog.BlogName}</MDBCardTitle>

//                     <MDBCardText >
//                       <small className='text-muted'>
//                       </small>
//                     </MDBCardText>
//                     <ButtonToolbar>
//                       <Button onClick={() => {
//                         this.props.history.push("/blog-page", { blog: blog })
//                       }}>
//                         Devamı..
//                       </Button>
//                     </ButtonToolbar>
//                   </MDBCardBody>
//                 </MDBRow>
//               </MDBCard>
//             ))}
//           </Row>
//         </Col>
//       </div>

//     );
//   }
// }
// export default withRouter(Blog);
