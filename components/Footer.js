import React from "react"
import {FiLinkedin,FiGithub} from "react-icons/fi"
import styled from "styled-components"

export default function Footer({ }) {

    const Section = styled.section`
  height:7vh;
  a{
    color:#8892b0;
    margin: 10px auto 0 auto;
    padding: 10px 10px 0 10px;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    display: inherit;
    text-decoration-skip-ink: auto;
    position: relative;
  }
  a:hover{
      color:#64ffda;
  }
  a.no-after::after{
display:none !important;
  }
  a::after{
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 10px auto 0 auto;
    background-color: #8892b0;
  }
  `
    const SideDiv = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: auto;
    right: 0px;
    @media(min-width:1200px){
        right: 35px;
    }
  `
    const SideDivLeft = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0px;
    right: auto;
    left: 0px;
    @media(min-width:1200px){
        left: 35px;
    }
  `
    const EmailDiv = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
  `

    return (
        <>
            {/* Banner Section */}
            <Section >
                <SideDiv orientation="right" >
                    <EmailDiv>
                        <a href="mailto:kavitarawat1214@gmail.com">kavitarawat1214@gmail.com</a>
                    </EmailDiv>
                </SideDiv>
                <SideDivLeft orientation="right" >
                    <EmailDiv>
                        <a className="no-after" href="https://www.linkedin.com/in/kavita-r-722941205/"><FiLinkedin style={{marginBottom:"8px",fontSize:"2.25rem"}}/></a>
                        <a href="https://github.com/KavitaR45/"><FiGithub style={{marginBottom:"8px",fontSize:"2.25rem"}}/></a>
                    </EmailDiv>
                </SideDivLeft>
            </Section>
        </>

    )
}
