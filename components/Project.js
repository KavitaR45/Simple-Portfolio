import React from "react"
import { Row, Col, Button } from "antd"
import styled from "styled-components"

export default function Project({link, subtitle, title, desc, img, flexDirection, textAlign, technology }) {


    const DescSection = styled.p`
  background:#112240;
  padding:30px 30px;
  z-index:5;
  margin-top:30px;
  border-radius:4px;
  `
    const Title = styled.h3`
    color: #ccd6f6 ;
     font-size: 2.8rem;
      font-weight: 700;
    :hover{
        color:#64ffda;
        cursor:pointer
    }
  `
    const Img = styled.div`
  width:120%;
  border-radius:4px;
  position:relative;
 right:${flexDirection ? " 20%" : "0%"};
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
      width:100%;
      display:block;
      margin:20px auto 0 auto;
      right:0 !important;
  }
  `
    const RowWrapper = styled(Row)`
  margin:80px 0;
  @media(max-width:992px){
      margin:10px 0;
  }
  `


    return (
        <a href={link} target="_blank">
            <RowWrapper gutter={4} justify="space-around" align="middle" style={{ flexDirection: `${flexDirection ? "row-reverse" : "row"}` }}>
                <Col style={{ margin: "20px 0" }} xs={21} sm={22} lg={12}>
                    <Img><img className="img-class" src={img} /> </Img>
                </Col>
                <Col xs={21} sm={22} lg={12} style={{ textAlign: `${textAlign ? "left" : "right"}`, margin: "20px 0", zIndex: "5", position: "relative" }}>
                    <p style={{ color: "#64ffda", marginBottom: "5px" }}>{subtitle}</p>
                    <Title>{title}</Title>
                    <DescSection className="para-text">{desc}</DescSection>
                    <p className="para-text">{technology}</p>
                </Col>
            </RowWrapper>
        </a>

    )
}
