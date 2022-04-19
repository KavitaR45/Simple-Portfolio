import React from "react"
import { Row, Col, Button} from "antd"
import styled from "styled-components"

export default function About({title,desc,img,num}) {
 
 
  const DescSection = styled.p`
  max-width:90%;
  @media(max-width:992px){
    max-width:100%
  }
  ul{
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-wrap:wrap;
  }
  ul li{
      width:45%;
  }
  `
  
  const Img = styled.div`
  width:100%;
  border-radius:4px;
  position:relative;
 background:#64ffda;
 :hover{
     background:white !important;
 }
 &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0px;
    z-index: 3;
    background-color:#0a192f;
    mix-blend-mode: screen;
 }
 &:hover::before{
    background-color:transparent !important;
    mix-blend-mode: none !important;
 }
 .img-class{
    filter: grayscale(30%) contrast(1) brightness(90%);
    mix-blend-mode: multiply;
    width:100%;
 }
  @media(max-width:992px){
      display:block;
      margin:20px auto 0 auto;
  }
  `
 
  
  return (
    <>
        <Row className="desktop-space-between" gutter={4} justify="space-between" align="start">
          <Col xs={21} sm={16} lg={16}>
            <DescSection className="para-text">{desc}</DescSection>
         </Col>
          <Col xs={21} sm={7} lg={7}>
          <Img><img className="img-class" src={img} /> </Img>
          </Col>
        </Row>
    </>

  )
}
