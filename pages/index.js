import React from "react"
import { Row, Col, Button } from "antd"
import { FaPlay } from "react-icons/fa"
import Banner from "../components/Banner"
import SectionHeading from "../components/SectionHeading"
import Portfolio from "../components/Portfolio"
import About from "../components/About"

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <Banner subtitle={"Hi, my  name  is"} title={"Kavita Rawat."} desc={"I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement."} btnText="Let's Talk !" btnLink={"#"} />
     <section style={{padding:"80px 0"}}>
       <SectionHeading section={1} title={"About Me"}/>
      <About  img={"https://brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif"}   desc={<>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!<br/><br/>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.<br/><br/><ul><li>JavaScript (ES6+)</li><li>React</li><li>WordPress</li><li>Gatsby</li></ul></>}  />
     </section>
    </>
  )
}

