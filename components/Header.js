import React from "react"
import {Row,Col} from "antd"
import styled from "styled-components"

export default function Header({ }) {
    const Section = styled.div`
  height:7vh;
  margin:30px 30px;
  @media(max-width:576px){
      margin:30px 20px;
  }
  `
  const ColWrap = styled(Col)`
  display:flex;
  width:100%;
  justify-content:space-around;
  a{
      color:#ccd6f6;
      font-size:1.5rem;
  }
  a:hover{
      color:#64ffda;
    }
    a span{
      color:#64ffda;
      font-size:1.5rem;
  }
  `

    return (
        <>
            {/* Banner Section */}
            <Section >
               <Row justify="space-between" align="middle">
                   <Col span={4}>
                   <img style={{width:"40px",position:"relative"}} src="/images/logo.svg"/>
                   </Col>
                   <ColWrap lg={6} md={7}>
                    <a href="#about"><span>01.</span> About</a>
                    <a href="#work"><span>02.</span> Work</a>
                    <a href="#contact"><span>03.</span> Contact</a>
                   </ColWrap>
               </Row>
            </Section>
        </>

    )
}
