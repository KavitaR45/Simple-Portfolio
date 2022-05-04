import React from "react"
import styled from "styled-components"

export default function SectionHeading({ title,section }) {

    const Title = styled.h2`
    margin-bottom:30px;
    position:relative;
    font-weight:bolder;
//     &::before {
//       position: relative;
//       bottom: 0px;
//       counter-increment: section ${section};
//       content: "0" counter(section) ".";
//       margin-right: 10px;
//       color: white;
//       font-weight: 600;
//       font-size:2.2rem;
//   }
  @media(max-width:576px){
      margin-left:25px;
  }
//   &::after{
//       content: "";
//       display: block;
//       position: relative;
//       top: -10px;
//       width: 300px;
//       left:200px;
//       height: 1px;
//       margin-left: 20px;
//       background-color: #233554;
//   }
//   @media(max-width:576px){
//     &::after{
//         width: 100px;
//         left:150px;
//     } 
//   }
    `

    return (
        <Title className="heading-text numbered-heading">{title}</Title>
    )
}
