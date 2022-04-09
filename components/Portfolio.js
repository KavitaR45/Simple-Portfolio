import React from "react"
import { Row, Col, Button } from "antd"
import { FaPlay } from "react-icons/fa"

export default function Portfolio({img,title,desc,btnLink,btnText,flexReverse}) {
  return (
    <>
        <Row gutter={4} justify="space-around" align="middle" style={flexReverse ? {flexDirection:"row-reverse"}:{flexDirection:"row"}}>
          <Col xs={22} sm={8} lg={8}>
            <h2 className="text-white">{title}</h2>
            <p className="text-white">{desc}</p>
            <Button type="ghost" size="large" href={btnLink}><FaPlay style={{margin:"0px 12px 0 0"}}/>{btnText}</Button>
          </Col>
          <Col xs={22} sm={8} lg={8}>
            <img src={img} style={{display:"block",margin:"auto"}} />
          </Col>
        </Row>
    </>

  )
}
