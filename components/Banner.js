import React from "react"
import { Row, Col, Button} from "antd"
import {FaPlay} from "react-icons/fa"
import styled from "styled-components"

export default function Banner({title,desc,btnLink,btnText,subtitle}) {
 
  const Section = styled.section`
  height:100vh;
  `
  const RowWrapper = styled(Row)`
  height:100%;
  `
  const DescSection = styled.p`
  max-width:600px;
  @media(max-width:992px){
    max-width:100%
  }
  `
  
  return (
    <>
      {/* Banner Section */}
      <Section >
        <RowWrapper  gutter={4} justify="start" align="middle">
          <Col xs={24} sm={15} lg={15}>
            <p className="text-primary" style={{letterSpacing:"2.25px"}}>{subtitle}</p>
            <h1 className="heading-text">{title}</h1>
            <DescSection className="para-text">{desc}</DescSection>
            <Button type="ghost" size="large" href={btnLink} style={{marginTop:"15px"}}>{btnText}</Button>
          </Col>
        </RowWrapper>
        
      </Section>
    </>

  )
}
