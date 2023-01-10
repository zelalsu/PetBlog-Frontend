
import React, { useState } from 'react';
import "./blog.css"
import { withRouter } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import pati from './images/14710.jpg'
import { Footer } from '../Footer/Footer';

const BlogPage = (props) => {
  const [blogs] = useState(props.history.location.state.blog);

  debugger
  return (
    <div style={{ backgroundImage: `url(${pati})` }}>
      <div className="container mt-5" style={{ backgroundColor: "transparent" }}>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Image className="" style={{ borderStyle: "solid", borderRadius: "20px" }} src={blogs.BlogImageTwo}></Image>
          </div>

          <div className="col d-flex justify-content-center">
            <div className="vstack" style={{ borderStyle: "solid", borderRadius: "20px", padding: "15px", backgroundColor: "white" }}>
              <h2 style={{ color: "black" }}>{blogs.BlogName}</h2>
              <hr />

              <h5 className='mt-4'>{blogs.BlogComment}</h5>
              <h5 className='mt-4'>{blogs.BlogCommentTwo}</h5>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col d-flex justify-content-center">
            <div className="vstack" style={{ borderStyle: "solid", borderRadius: "20px", padding: "15px", backgroundColor: "white" }}>
              <h5 className='mt-4'>{blogs.BlogCommentThree}</h5>
              <h5 className='mt-4'>{blogs.BlogCommentFour}</h5>
            </div>
          </div>

          <div className="col d-flex justify-content-center">
            <Image className="" style={{ borderStyle: "solid", borderRadius: "20px" }} src={blogs.BlogImageThree}></Image>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );

}
export default withRouter(BlogPage);



// class BlogPage extends Component {
//   constructor(props) {
//     super(props);
//     var blog = this.props.history.location.state.blog;
//     console.log(blog)
//     this.state = {
//       blog: blog
//     }
//   }

//   componentDidMount() {
//     this.getBlogs();
//   }
//   getBlogs = () => {
//     fetch( `${process.env.REACT_APP_BASE_ENDPOINT}/api/Blog/`)
//       .then(response => response.json())
//       .then(data => this.setState({ blogs: data }));;
//   }
//   render() {
//     const { blog } = this.state;
//     return (
//       <div style={{ backgroundImage: `url(${pati})` }}>
//         <div className="container mt-5" style={{backgroundColor:"transparent"}}>
//           <div className="row">
//             <div className="col d-flex justify-content-center">
//               <Image className="" style={{ borderStyle: "solid", borderRadius: "20px" }} src={blog.BlogImageTwo}></Image>
//             </div>

//             <div className="col d-flex justify-content-center">
//               <div className="vstack" style={{ borderStyle: "solid", borderRadius: "20px", padding:"15px", backgroundColor:"white"}}>
//                 <h2 style={{ color: "black" }}>{blog.BlogName}</h2>
//                 <hr/>
//                 <h5 className='mt-4'>{blog.BlogComment}</h5>
//                 <h5 className='mt-4'>{blog.BlogCommentTwo}</h5>
//               </div>
//             </div>
//           </div>
//           <div className="row mt-5">
//             <div className="col d-flex justify-content-center">
//               <div className="vstack" style={{ borderStyle: "solid", borderRadius: "20px", padding:"15px", backgroundColor:"white"}}>
//                 <h5 className='mt-4'>{blog.BlogComment}</h5>
//                 <h5 className='mt-4'>{blog.BlogCommentThree}</h5>
//               </div>
//             </div>

//             <div className="col d-flex justify-content-center">
//               <Image className="" style={{ borderStyle: "solid", borderRadius: "20px" }} src={blog.BlogImageThree}></Image>
//             </div>
//           </div>
//         </div>
//       </div>

//     );
//   }
// }



// export default withRouter(BlogPage)


