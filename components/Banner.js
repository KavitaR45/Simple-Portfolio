import React from "react"
import { Row, Col, Button} from "antd"
import styled from "styled-components"

export default function Banner({title,desc,btnLink,btnText,subtitle,subheading}) {
 
  const Section = styled.section`
  height:80vh;
  `
  const RowWrapper = styled(Row)`
  height:100%;
  h2{
    font-size: 7rem;
    color:#8892b0;
  }
  @media(max-width:576px){
    justify-content:center;
    align-content:center;
    h2{
      font-size: 4rem;
      line-height:4.3rem;
    }
  }
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
        <RowWrapper  gutter={4} justify="start" align="start">
          <Col xs={21} sm={22} lg={22}>
            <p className="text-primary" style={{letterSpacing:"2.25px"}}>{subtitle}</p>
            <h1 className="heading-text">{title}</h1>
            <h2 className="heading-text">{subheading}</h2>
            <DescSection className="para-text">{desc}</DescSection>
            <Button type="ghost" size="large" target={"_blank"} href={btnLink} style={{marginTop:"15px"}}>{btnText}</Button>
          </Col>
        </RowWrapper>
        
      </Section>
    </>

  )
}
