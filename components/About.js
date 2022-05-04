import React from "react"
import { Row, Col, Button } from "antd"
import styled from "styled-components"
import { RevealContent, RevealImg } from "./Animation/reveal"

export default function About({ title, desc, img, num, }) {


  const DescSection = styled.p`
  max-width:90%;
  @media(max-width:992px){
    max-width:100%
    ul li{
      width:25%;
      margin-bottom:5px !important;
  }
  }
  ul{
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-wrap:wrap;
      margin-bottom:0 !important;
  }
  ul li{
      width:45%;
      margin-bottom:5px !important;
  }
  margin-top:10px;
  `

  const Img = styled.img`
  border-radius:4px;
  position:relative;
//  background:#64ffda;
 width:90%;
  display:block;
  margin:auto;
  @media(max-width:992px){
    width:75%;
  }
  @media(max-width:576px){
    width:50%;
  }
  .img-class{
    border-radius:4px;
  }
//  :hover{
//      background:white !important;
//  }
//  &::before{
//     content: "";
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     inset: 0px;
//     z-index: 3;
//     background-color:#0a192f;
//     mix-blend-mode: screen;
//  }
//  &:hover::before{
//     background-color:transparent !important;
//     mix-blend-mode: none !important;
//  }
//  .img-class{
//     filter: grayscale(30%) contrast(1) brightness(90%);
//     mix-blend-mode: multiply;
//     width:100%;
//  }
  @media(max-width:992px){
      display:block;
      margin:20px auto 0 auto;
  }
  `


  return (
    <>
      <Row style={{ height: "100vh", position: "relative", width: "100%", justifyContent: "center", alignContent: "center" }} className="desktop-space-between" gutter={4} justify="center" align="middle">
        <Col xs={21} sm={12} lg={14}>
          <RevealContent  Variant={"Variant1"}>
            <h2>{title}</h2>
          </RevealContent>
          <RevealContent  Variant={"Variant2"}>
            <DescSection className="para-text">{desc}</DescSection>
          </RevealContent>
        </Col>
        <Col xs={21} sm={12} lg={8}>
          <RevealImg Variant="Variant1">
            <Img src={img} alt="profile-pic" />
          </RevealImg>
        </Col>
      </Row>
    </>

  )
}
