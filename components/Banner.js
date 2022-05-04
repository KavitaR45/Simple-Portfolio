import React from "react"
import { Row, Col, Button } from "antd"
import styled from "styled-components"
import { RevealContent, RevealImg } from "./Animation/reveal"

export default function Banner({ title, desc, btnLink, btnText, subtitle, subheading, img }) {

  const Section = styled.section`
  height:100vh;
  overflow:hidden;
  width:100%;
  position:relative;
  `
  const RowWrapper = styled(Row)`
  height:100%;
  h1{
    font-size: 6rem;
  }
  @media(max-width:576px){
    justify-content:center;
    align-content:center;
    h1{
      font-size: 2.5rem;
      line-height:2.3rem;
    }
  }
  `
  const DescSection = styled.p`
  max-width:600px;
  @media(max-width:992px){
    max-width:100%
  }
  `
  const Image= styled.img`
  width:90%;
  display:block;
  margin:auto;
  @media(max-width:992px){
    width:75%;
  }
  @media(max-width:576px){
    width:65%;
  }
  `

  return (
    <>
      {/* Banner Section */}
      <Section >
        <RowWrapper gutter={4} justify="center" align="middle">
          <Col xs={21} sm={12} lg={10}>
            <RevealContent Variant={"Variant1"}>
            <p>{subtitle}</p>
            </RevealContent>
            <RevealContent Variant={"Variant2"}>
            <h1>{title}</h1>
            </RevealContent>
            <RevealContent Variant={"Variant3"}>
            <DescSection className="para-text">{desc}</DescSection>
            </RevealContent>
            <RevealContent Variant="Variant2">
            <Button type="ghost" size="large" target={"_blank"} href={btnLink} style={{ marginTop: "15px" }}>{btnText}</Button>
            </RevealContent>
          </Col>
          <Col xs={21} sm={12} lg={12}>
            <RevealImg Variant="Variant3">
              <Image src={img}  />
            </RevealImg>
          </Col>
        </RowWrapper>


      </Section>
    </>

  )
}
