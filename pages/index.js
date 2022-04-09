import React from "react"
import { Row, Col, Button } from "antd"
import { FaPlay } from "react-icons/fa"
import Banner from "../components/Banner"
import SectionHeading from "../components/SectionHeading"
import Portfolio from "../components/Portfolio"

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <Banner subtitle={"Hi, my  name  is"} title={"Kavita Rawat."} desc={"I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement."} btnText="Let's Talk" btnLink={"#"} />
    </>

  )
}

