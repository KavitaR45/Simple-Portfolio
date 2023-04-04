import React,{useState} from "react"
import { Row, Col, Button } from "antd"
import styled from "styled-components"

export default function Contact({ desc, }) {


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
    const Form = styled.form`
  input,textarea{
    background: transparent;
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border: 1px solid #64ffda;
    color: white;
    border-radius:4px
  }
  textarea{
      height:80px;
      resize:none;
  }
  `

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (event) => {
    console.log("event", event)
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contactForm",
        "name": event.target.elements.name.value,
        "email": event.target.elements.email.value,
        "phone": event.target.elements.phone.value,
        "msg": event.target.elements.msg.value,
      })
    }).then(() => { document.getElementById("myForm").reset() }).catch(error => alert(error))
  }

    return (
        <>
            <Row className="desktop-space-between" gutter={4} justify="space-between" align="middle">
                <Col xs={21} sm={12} lg={12}>
                    <DescSection className="para-text">{desc}</DescSection>
                </Col>
                <Col xs={21} sm={10} lg={10}>
                    <Form name="contactForm" action='https://submit-form.com/nZqVqTKP'>
                        <input type="hidden" name="form-name" value="contactForm" />
                        <input title="Name should not contains any numeric letters" pattern="[A-Za-z ]{1,32}" placeholder="Name" label="Name" type="text" name="name" required />
                        <input title="Please enter a valid email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" label="Email" type="mail" name="email" required />
                        <input pattern="^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$" title="Please enter a valid phone number" placeholder="Mobile Number" label="Mobile Number" type="tel" name="phone" required />
                        <textarea placeholder="Message" label="Message" type="text" name="msg" required></textarea>
                        <Button type="submit" style={{marginTop:"15px"}}>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </>

    )
}
