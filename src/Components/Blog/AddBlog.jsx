import React from 'react'
import { Row, Form } from 'react-bootstrap';
import alertify from "alertifyjs";
import {
    MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBTextArea, MDBCardText,
}
    from 'mdb-react-ui-kit';

const AddBlog = () => {



    const handleSubmit = (e) => {
        debugger
        const request = JSON.stringify({
            BlogId: null,
            BlogName: e.target.blogName.value,
            BlogComment: e.target.blogComment.value,
            BlogCommentTwo: e.target.blogCommentTwo.value,
            BlogCommentThree: e.target.blogCommentThree.value,
            BlogCommentFour: e.target.blogCommentFour.value,
            BlogImage: e.target.blogImage.value,
            BlogImageTwo: e.target.blogImageTwo.value,
            BlogImageThree: e.target.blogImageThree.value,

        });

        e.preventDefault();
        fetch(`${process.env.REACT_APP_BASE_ENDPOINT}/api/Blog/`, {//fetch ile istek attık buraya

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: request
        }).then(res => res.json())
            .then((result) => {
                alertify.success(result)
                console.log(result);
            },
                (error) => {
                    alertify.success("Fail")
                }
            )

    }
    return (
        <div style={{ marginTop: "30px" }}>

            <Row>

                <MDBContainer >
                    <MDBCard className='text-black m-5' style={{ borderRadius: '50px', borderStyle: "solid" }}>
                        <MDBCardBody   >
                            <MDBRow>
                                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex  '>
                                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/044.webp' fluid />
                                </MDBCol>
                                <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                                    <p className="text-center h2 mb-5 mx-1 mx-md- mt-4">Bloğunuzu oluşturun</p>

                                    <Form onSubmit={handleSubmit}>

                                        <div className="d-flex flex-row align-items-center mb-4 ">
                                            <MDBCardText style={{ marginRight: "10px" }}>Blog Başlığı</MDBCardText>
                                            <MDBTextArea
                                                rows={2}
                                                cols={30}
                                                type="textarea"
                                                name="blogName"
                                                required//boş geçilemez 
                                                placeholder='Blog başlığınızı giriniz..'
                                                className='w-100'
                                            />
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4 ">

                                            <MDBCardText style={{ marginRight: "10px" }}>* Yazınız(1) </MDBCardText>
                                            <MDBTextArea
                                                rows={2}
                                                cols={30}
                                                type="text"
                                                name="blogComment"
                                                required//boş geçilemez 
                                                placeholder='Bloğunuz için eklemek istediğiniz 1.yazıyı giriniz..'
                                            />

                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4 ">

                                            <MDBCardText style={{ marginRight: "10px" }}>
                                                * Yazınız(2)
                                            </MDBCardText>
                                            <MDBTextArea
                                                rows={2}
                                                cols={30}

                                                type="text"
                                                name="blogCommentTwo"
                                                required//boş geçilemez 
                                                placeholder='Bloğunuz için eklemek istediğiniz 2.yazıyı giriniz..'
                                            />

                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4 ">

                                            <MDBCardText style={{ marginRight: "10px" }}>
                                                * Yazınız(3)
                                            </MDBCardText>
                                            <MDBTextArea
                                                rows={2}
                                                cols={30}
                                                type="text"
                                                name="blogCommentThree"
                                                required//boş geçilemez 
                                                placeholder='Bloğunuz için eklemek istediğiniz 3.yazıyı giriniz..'
                                            />

                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4 ">

                                            <MDBCardText style={{ marginRight: "10px" }}>
                                                * Yazınız(4)
                                            </MDBCardText>
                                            <MDBTextArea
                                                rows={2}
                                                cols={30}
                                                type="text"
                                                name="blogCommentFour"
                                                required//boş geçilemez 
                                                placeholder='Bloğunuz için eklemek istediğiniz 4.yazıyı giriniz..'
                                            />

                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4 ">

                                            <MDBCardText style={{ marginRight: "10px" }}>
                                                1. Fotoğraf
                                            </MDBCardText>
                                            <MDBTextArea
                                                rows={1}
                                                cols={30}
                                                type="text"
                                                name="blogImage"
                                                required//boş geçilemez 
                                                placeholder='Lütfen eklemek istediğiniz 1. fotoğrafı link şeklinde giriniz...'
                                            />

                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4 ">

                                            <MDBCardText style={{ marginRight: "10px" }}>
                                                2. Fotoğraf
                                            </MDBCardText>
                                            <MDBTextArea
                                                rows={1}
                                                cols={30}
                                                type="text"
                                                name="blogImageTwo"
                                                required//boş geçilemez 
                                                placeholder='Lütfen eklemek istediğiniz 1. fotoğrafı link şeklinde giriniz...'
                                            />

                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4 ">

                                            <MDBCardText style={{ marginRight: "10px" }}>
                                                3. Fotoğraf
                                            </MDBCardText>
                                            <MDBTextArea
                                                rows={1}
                                                cols={30}
                                                type="textarea"
                                                name="blogImageThree"
                                                required//boş geçilemez 
                                                placeholder='Lütfen eklemek istediğiniz 1. fotoğrafı link şeklinde giriniz...'
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
        </div >
    )
}
export default AddBlog;