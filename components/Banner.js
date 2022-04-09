import React from "react"
import { Row, Col, Button} from "antd"
import {FaPlay} from "react-icons/fa"

export default function Banner({title,desc,btnLink,btnText,subtitle}) {
  return (
    <>
      {/* Banner Section */}
      <section >
        <Row  gutter={4} justify="start" align="middle">
          <Col xs={22} sm={15} lg={15}>
            <p className="text-primary">{subtitle}</p>
            <h1 className="heading-text">{title}</h1>
            <p className="para-text">{desc}</p>
            <Button type="ghost" size="large" href={btnLink}><FaPlay style={{margin:"0px 12px 0 0"}}/>{btnText}</Button>
          </Col>
        </Row>
        
      </section>
    </>

  )
}
