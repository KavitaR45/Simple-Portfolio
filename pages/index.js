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
      <Banner subheading={"I build things for the web."} subtitle={"Hi, my  name  is"} title={"Kavita Rawat."} desc={"I’m a FrontEnd Developer specializing in building (and occasionally designing) exceptional digital experiences with technologies like ReactJs, Gatsby, NextJs, Wordpress and Woocommerce"} btnText="Download Resume" btnLink={"/images/Resume.pdf"} />
      <section id="about" style={{ padding: "50px 0" }}>
        <SectionHeading section={1} title={"About Me"} />
        <About img={"/images/profile.png"} desc={<>Hello! I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try creating a simple landing page - and with that my front-end journey began.<br /><br />Fast-forward to today, and I’ve had the privilege of working at a start-up. I started by fixing styles in the project, collabrated with clients and assisted senior developer, while strengthning my base with each passing projects. My main focus these days is building accessible, digital experiences for the clients without compromising the browser support and performance.<br /><br />Here are a few technologies I’ve been working with recently:<br/><br/><ul><li>JavaScript (ES6+)</li><li>ReactJs</li><li>NextJs</li><li>Gatsby</li><li>Wordpress</li><li>Woocommerce</li><li>Shopify</li><li>FireCMS & Netlify CMS</li></ul></>} />
      </section>
      <section id="work" style={{ padding: "50px 0" }}>
        <SectionHeading section={2} title={"Some Things I’ve Built"} />
       <Project link={"https://syncmedia.io/"} technology={"NextJs , React , ThreeJs , Parallax , ThemeUI"} img={"/images/project/sync.png"} desc={"An animation filled website based on user interaction for an advertising agency. For the animation I had used parallax and reveal effects. For the wave animation in banner, three js is used."} subtitle={"Featured Project"} title={"Sync Media"} />
       <Project link={"https://iamfashion.co.in/"} technology={"Wordpress , Elementor , Woocommerce"} flexDirection textAlign img={"/images/project/ecom.png"} desc={"An e-Commerce clothing site for the fashion lover. It mainly focus on women clothing, the website is created in wordpress with the help of elementor and woocommerce. The site consists all the features of a proffessional & modern e-commerce site."} subtitle={"Featured Project"} title={"I am Fashion"} />
       <Project link={"https://drdassans.com/"} technology={"Wordpress , Elementor , Javascript"} img={"/images/project/dassan.png"} desc={"A proffessional business website for an ayurvedic center. The website is created in Wordpress with the help of elementor. The site is filled with videos and images without affecting browser performance."} subtitle={"Featured Project"} title={"Dr Dassan's"} />
         </section>
      <section id="contact" style={{ padding: "50px 0" }}>
        <SectionHeading section={3} title={"Get In Touch"} />
        <Contact desc={<>Thank you for scrolling all this way!<br /><br />You can connect with me via email <a href="mailto:kavitarawat1214@gmail.com"><span style={{color:"#64ffda"}}>kavitarawat1214@gmail.com</span> </a>or you can drop your message in the form below.<br/><br/>My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</>} />
      </section>
      <Footer/>
    </>
  )
}

