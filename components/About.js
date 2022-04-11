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
  const Img = styled.img`
  width:100%;
  border-radius:4px;
  @media(max-width:576px){
      width:70%;
      display:block;
      margin:20px auto 0 auto;
      
  }
  `
 
  
  return (
    <>
        <Row  gutter={4} justify="space-around" align="start">
          <Col xs={24} sm={16} lg={16}>
            <DescSection className="para-text">{desc}</DescSection>
         </Col>
          <Col xs={22} sm={7} lg={7}>
           <Img src={img}  />
          </Col>
        </Row>
    </>

  )
}
