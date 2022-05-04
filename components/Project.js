import React from "react"
import { Row, Col, Button } from "antd"
import styled from "styled-components"

export default function Project({link, subtitle, title, desc, img, flexDirection, textAlign, technology }) {


    const DescSection = styled.p`
//   background:#112240;
  z-index:5;
  margin-top:20px;
  border-radius:4px;
  color:white;
  `
    const Title = styled.h3`
    color: #ffd234 !important;
     font-size: 2.8rem;
      font-weight: 900;
    :hover{
        // color:#64ffda;
        cursor:pointer
    }
  `
  const Img = styled.img`
  border-radius:4px;
  position:relative;
 width:90%;
  display:block;
  margin:auto;
  @media(max-width:992px){
    width:75%;
  }
  @media(max-width:576px){
    width:70%;
  }
  .img-class{
    border-radius:4px;
  }
  @media(max-width:992px){
      display:block;
      margin:20px auto 0 auto;
  }
  `
    const RowWrapper = styled(Row)`
  height:100%;
  color:white;
  @media(max-width:992px){
      .mobile-text-center{
          text-align:center !important;
      }
  }
  `


    return (
        <a href={link ? link :"#"} target="_blank" style={{height:"100%"}}>
            <RowWrapper gutter={4} justify="center" align="middle" style={{ flexDirection: `${flexDirection ? "row-reverse" : "row"}` ,alignContent:"center"}}>
                <Col xs={21} sm={22} lg={12}>
                    <Img src={img}/>
                </Col>
                <Col className="mobile-text-center" xs={21} sm={22} lg={10} style={{ textAlign: `${textAlign ? "left" : "right"}`, margin: "20px 0", zIndex: "5", position: "relative" }}>
                    <p style={{ color: "white", marginBottom: "5px" }}>{subtitle}</p>
                    <Title>{title}</Title>
                    <DescSection>{desc}</DescSection>
                    <p style={{color:" #ffd234 !important"}}>{technology}</p>
                </Col>
            </RowWrapper>
        </a>

    )
}
