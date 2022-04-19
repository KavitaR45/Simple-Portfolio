import React, { useState } from "react"
import { Row, Col, Drawer,Button } from "antd"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"

export default function Header({ }) {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

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
  @media(max-width:992px){
      display:none;
  }
  `
  const RowWrap = styled(Row)`
  a{
    color:#ccd6f6;
    font-size:2.5rem;
    margin:10px auto;
    font-weight:600;
    display:block;
}
a:hover{
    color:#64ffda;
  }
  a span{
    color:#64ffda;
    font-size:2.25rem;
}
margin:20px auto;
`
    const style = { padding: '8px 0', fontSize: '18px', fontWeight: '600', margin: 'auto auto 20px auto' };
    return (
        <>
            {/* Banner Section */}
            <Section >
                <Row justify="space-between" align="middle">
                    <Col span={4}>
                        <img style={{ width: "40px", position: "relative" }} src="/images/logo.svg" />
                    </Col>
                    <ColWrap lg={6} md={8} sm={0} xs={0}>
                        <a href="#about"><span>01.</span> About</a>
                        <a href="#work"><span>02.</span> Work</a>
                        <a href="#contact"><span>03.</span> Contact</a>
                    </ColWrap>
                    <Col sm={7} xs={7} lg={0} className="mobile-menu" style={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                        <GiHamburgerMenu onClick={showDrawer} style={{ color: "white", fontSize: "30px", cursor: "pointer" }} />
                        <Drawer
                            size='default'
                            width='270px'
                            placement="right" onClose={onClose} visible={visible}>
                            <RowWrap>
                                <Col className="gutter-row" span={16} offset={2}>
                                    <a href="#about"><span>01.</span> About</a>
                                </Col>
                                <Col className="gutter-row" span={16} offset={2}>
                                    <a href="#work"><span>02.</span> Work</a>
                                </Col>
                                <Col className="gutter-row" span={16} offset={2}>
                                    <a href="#contact"><span>03.</span> Contact</a>
                                </Col>
                                <Col className="gutter-row" span={16} offset={2}>
                                <Button type="ghost" size="large" href={"/images/Resume.pdf"} target="_blank" style={{marginTop:"15px"}}>Resume</Button>
                                </Col>

                            </RowWrap>
                        </Drawer>
                    </Col>
                </Row>

            </Section>
        </>

    )
}
