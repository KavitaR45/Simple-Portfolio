import React from "react"
import Head from "next/head"
import Banner from "../components/Banner"
import SectionHeading from "../components/SectionHeading"
import About from "../components/About"
import Contact from "../components/Contact"
import Project from "../components/Project"
import Footer from "../components/Footer"
import Header from "../components/Header"

export default function Home() {
  return (
    <>
      <Head>
        <title>Kavita Rawat</title>
      </Head>
      <Header/>
      {/* Banner Section */}
      <Banner subheading={"I build things for the web."} subtitle={"Hi, my  name  is"} title={"Kavita Rawat."} desc={"I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement."} btnText="Download Resume" btnLink={"#"} />
      <section id="about" style={{ padding: "50px 0" }}>
        <SectionHeading section={1} title={"About Me"} />
        <About img={"/images/profile.png"} desc={<>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!<br /><br />Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.<br /><br /><ul><li>JavaScript (ES6+)</li><li>React</li><li>WordPress</li><li>Gatsby</li></ul></>} />
      </section>
      <section id="work" style={{ padding: "50px 0" }}>
        <SectionHeading section={2} title={"Some Things I’ve Built"} />
       <Project technology={"Javascript , React , Gatsby"} img={"/images/project/img1.png"} desc={"A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."} subtitle={"Featured Project"} title={"Halcyon Theme"} />
       <Project technology={"Javascript , React , Gatsby"} flexDirection textAlign img={"/images/project/img1.png"} desc={"A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."} subtitle={"Featured Project"} title={"Halcyon Theme"} />
       <Project technology={"Javascript , React , Gatsby"} img={"/images/project/img1.png"} desc={"A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."} subtitle={"Featured Project"} title={"Halcyon Theme"} />
         </section>
      <section id="contact" style={{ padding: "50px 0" }}>
        <SectionHeading section={3} title={"Get In Touch"} />
        <Contact desc={<>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!<br /><br />Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.<br /><br /></>} />
      </section>
      <Footer/>
    </>
  )
}

