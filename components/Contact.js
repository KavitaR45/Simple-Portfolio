import React from "react"
import { Row, Col, Button } from "antd"
import styled from "styled-components"
import { RevealContent } from "./Animation/reveal"

export default function Contact({ desc,title }) {


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
    const Form = styled.form`
  input,textarea{
    background: white;
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border: 1px solid white;
    color: black;
    border-radius:4px;
    outline:none;
  }
  textarea{
      height:80px;
      resize:none;
  }
  `


    return (
        <>
            <Row className="desktop-space-between" style={{ height: "100vh", overflow: "hidden" }} gutter={4} justify="space-between" align="middle">
                <Col xs={21} sm={12} lg={12}>
                    <RevealContent Variant={"Variant1"}>
                    <h2>{title}</h2>
                    </RevealContent>
                    <RevealContent Variant={"Variant2"}>
                    <DescSection className="para-text">{desc}</DescSection>
                    </RevealContent>
                </Col>
                <Col xs={21} sm={10} lg={10}>
                    <Form id="myForm" netlify="true" name="contactForm" method="POST" data-netlify="true" >
                        <input type="hidden" name="form-name" value="contactForm" />
                        <input title="Name should not contains any numeric letters" pattern="[A-Za-z ]{1,32}" placeholder="Name" label="Name" type="text" name="name" required />
                        <input title="Please enter a valid email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" label="Email" type="mail" name="email" required />
                        <input pattern="^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$" title="Please enter a valid phone number" placeholder="Mobile Number" label="Mobile Number" type="tel" name="phone" required />
                        <textarea placeholder="Message" label="Message" type="text" name="msg" required></textarea>
                        <Button type="ghost" style={{ marginTop: "15px" }}>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </>

    )
}
