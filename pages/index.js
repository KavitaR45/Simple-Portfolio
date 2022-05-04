import React, { useRef, useState, useEffect } from "react"
import { Row, Col } from "antd"
import Banner from "../components/Banner"
import SectionHeading from "../components/SectionHeading"
import About from "../components/About"
import Contact from "../components/Contact"
import Project from "../components/Project"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Head from "next/head"
import Slider from "../components/Slider"

export default function Home() {

  const DivStyle = {
    position: "relative",
    height: "100vh",
    width: "100%"
  }

  const ImgStyle = {
    width: "100%", height: "100%", position: "absolute"
  }

  const SectionStyle = {
    height: "100vh", position: "relative", overflow: "hidden", width: "100%"
  }
  const ParentSwiper = useRef()
  const ProjectRef = useRef()

  return (
    <>
      <Head>
        <title>Kavita Rawat - Personal Portfolio</title>
        <meta name="description" content="I’m a FrontEnd Developer specializing in building exceptional digital experiences with technologies like ReactJs, Gatsby, NextJs, Wordpress and Woocommerce" />
        <link rel="icon" href="/images/logo.svg" />
        <link rel="canonical" href="https://kavita-portfolio.netlify.app/" />
      </Head>
      {/* <Header /> */}
      <Slider config={{
        ref: ParentSwiper,
         onSlideChange: (s) => {
          if (s.activeIndex === 2) {
            ParentSwiper.current.swiper.allowSlideNext = false
            ParentSwiper.current.swiper.allowSlidePrev = false
          } else {
            ParentSwiper.current.swiper.allowSlidePrev = true
            ParentSwiper.current.swiper.allowSlideNext = true
          }
        }
      }} name="demo-slider">
        <div style={{ ...DivStyle }}><img style={{ ...ImgStyle }} src={"/images/background/yellow.jpg"} />
          <Banner img={"/images/banner.svg"} subtitle={"Hi, my  name  is"} title={"Kavita Rawat."} desc={"I’m a FrontEnd Developer specializing in building (and occasionally designing) exceptional digital experiences with technologies like ReactJs, Gatsby, NextJs, Wordpress and Woocommerce"} btnText="Download Resume" btnLink={"/images/Resume.pdf"} />
        </div>
        <div style={{ ...DivStyle }}><img style={{ ...ImgStyle }} src={"/images/background/purple.jpg"} />
          <section id="about" style={{ ...SectionStyle }}>
            <About title={"About Me"} img={"/images/profile.png"} desc={<>Hello! I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try creating a simple landing page - and since then, there is no turning back. <br /><br />Here are a few technologies I’ve been working with recently:<br /><br /><ul><li>ReactJs</li><li>NextJs</li><li>Gatsby</li><li>Wordpress</li><li>Woocommerce</li><li>Shopify</li></ul></>} />
          </section>
        </div>
        <div style={{ ...DivStyle }}><img style={{ ...ImgStyle }} src={"/images/background/green.jpg"} />
          <Slider
            config={{
              ref: ProjectRef,
              direction: "horizontal",
              effect: "none",
              parallax: true,
              delay: 6000,
              slidesPerView: "auto",
              onReachEnd: () => {
                ParentSwiper.current.swiper.allowSlideNext = true;
                ParentSwiper.current.swiper.slideNext();
            },
              onReachBeginning: () => {
                ParentSwiper.current.swiper.slidePrev();
                ParentSwiper.current.swiper.allowSlidePrev = true;
            },
            }}
            name="FirstSlide"
          >
             <section id="work" style={{ ...SectionStyle }}>
            <Project  flexDirection textAlign  img={"/images/projectimg.svg"} desc={<>From Wordpress, Woocommerce and UI/UX animations to React.JS, NextJs and Gatsby. Check out my latest portfolio projects.<br/><br/><span style={{color:" #ffd234 !important"}}>Scroll down</span> to see the list of projects I've worked on recently.</>} subtitle={"Featured Project"} title={"Lists of Projects"} />
          </section>
             <section id="work" style={{ ...SectionStyle }}>
            <Project link={"https://syncmedia.io/"} flexDirection textAlign technology={"NextJs , React , ThreeJs , Parallax , ThemeUI"} img={"/images/project/sync.png"} desc={"An animation filled website based on user interaction for an advertising agency. For the animation I had used parallax and reveal effects. For the wave animation in banner, three js is used."} subtitle={"Featured Project"} title={"Sync Media"} />
          </section>
          <section id="work" style={{ ...SectionStyle }}>
            <Project link={"https://blockbuster-review.netlify.app/"} technology={"React , NextJs , AntDesign , API"} img={"/images/project/movie.png"} desc={"A Basic Film Review website created with NEXT Js, for styling I had used AntDesign and styled component. For getting the movie data I had used 'The Movie Database API'. It has the search features, and a detailed page where you can read the overview of it."} subtitle={"Featured Project"} title={"Block Buster Film Review"} />
          </section>
          <section id="work" style={{ ...SectionStyle }}>
            <Project link={"https://iamfashion.co.in/"} technology={"Wordpress , Elementor , Woocommerce"} flexDirection textAlign img={"/images/project/ecom.png"} desc={"An e-Commerce clothing site for the fashion lover. It mainly focus on women clothing, the website is created in wordpress with the help of elementor and woocommerce. The site consists all the features of a professional & modern e-commerce site."} subtitle={"Featured Project"} title={"I am Fashion"} />
          </section>
          <section id="work" style={{ ...SectionStyle }}>
            <Project link={"https://drdassans.com/"} technology={"Wordpress , Elementor , Javascript"} img={"/images/project/dassan.png"} desc={"A professional business website for an ayurvedic center. The website is created in Wordpress with the help of elementor. The site is filled with videos and images without affecting browser performance."} subtitle={"Featured Project"} title={"Dr Dassan's"} />
          </section>
          </Slider>
        </div>
        {/* <div style={{ ...DivStyle }}><img style={{ ...ImgStyle }} src={"/images/background/green.jpg"} />
          <section id="work" style={{ ...SectionStyle }}>
            <Project link={"https://syncmedia.io/"} flexDirection textAlign technology={"NextJs , React , ThreeJs , Parallax , ThemeUI"} img={"/images/project/sync.png"} desc={"An animation filled website based on user interaction for an advertising agency. For the animation I had used parallax and reveal effects. For the wave animation in banner, three js is used."} subtitle={"Featured Project"} title={"Sync Media"} />
          </section>
        </div>
        <div style={{ ...DivStyle }}><img style={{ ...ImgStyle }} src={"/images/background/green.jpg"} />
          <section id="work" style={{ ...SectionStyle }}>
            <Project link={"https://blockbuster-review.netlify.app/"} technology={"React , NextJs , AntDesign , API"} img={"/images/project/movie.png"} desc={"A Basic Film Review website created with NEXT Js, for styling I had used AntDesign and styled component. For getting the movie data I had used 'The Movie Database API'. It has the search features, and a detailed page where you can read the overview of it."} subtitle={"Featured Project"} title={"Block Buster Film Review"} />
          </section>
        </div>
        <div style={{ ...DivStyle }}><img style={{ ...ImgStyle }} src={"/images/background/green.jpg"} />
          <section id="work" style={{ ...SectionStyle }}>
            <Project link={"https://iamfashion.co.in/"} technology={"Wordpress , Elementor , Woocommerce"} flexDirection textAlign img={"/images/project/ecom.png"} desc={"An e-Commerce clothing site for the fashion lover. It mainly focus on women clothing, the website is created in wordpress with the help of elementor and woocommerce. The site consists all the features of a professional & modern e-commerce site."} subtitle={"Featured Project"} title={"I am Fashion"} />
          </section>
        </div>
        <div style={{ ...DivStyle }}><img style={{ ...ImgStyle }} src={"/images/background/green.jpg"} />
          <section id="work" style={{ ...SectionStyle }}>
            <Project link={"https://drdassans.com/"} technology={"Wordpress , Elementor , Javascript"} img={"/images/project/dassan.png"} desc={"A professional business website for an ayurvedic center. The website is created in Wordpress with the help of elementor. The site is filled with videos and images without affecting browser performance."} subtitle={"Featured Project"} title={"Dr Dassan's"} />
          </section>
        </div> */}
        <div style={{ ...DivStyle }}><img style={{ ...ImgStyle }} src={"/images/background/blue.jpg"} />
          <section id="contact" style={{ ...SectionStyle }}>
            <Contact title={"Get In Touch"} desc={<>Thank you for scrolling all this way! My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!<br /><br />You can connect with me via email <a href="mailto:kavitarawat1214@gmail.com"><span style={{ color: "#7CD644" }}>kavitarawat1214@gmail.com</span> </a>or you can drop your message in the form below.</>} />
          </section>
        </div>

        {/* Banner Section */}
        {/* <section id="about" style={{ padding: "50px 0" }}>
          <SectionHeading section={1} title={"About Me"} />
          <About img={"/images/profile.png"} desc={<>Hello! I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try creating a simple landing page - and with that my front-end journey began.<br /><br />Fast-forward to today, and I’ve had the privilege of working at a start-up. I started by fixing styles in the project, collabrated with clients and assisted senior developer, while strengthning my base with each passing projects. My main focus these days is building accessible, digital experiences for the clients without compromising the browser support and performance.<br /><br />Here are a few technologies I’ve been working with recently:<br /><br /><ul><li>JavaScript (ES6+)</li><li>ReactJs</li><li>NextJs</li><li>Gatsby</li><li>Wordpress</li><li>Woocommerce</li><li>Shopify</li><li>FireCMS & Netlify CMS</li></ul></>} />
        </section>
        <section id="work" style={{ padding: "50px 0" }}>
          <SectionHeading section={2} title={"Some Things I’ve Built"} />
          <Project link={"https://syncmedia.io/"} technology={"NextJs , React , ThreeJs , Parallax , ThemeUI"} img={"/images/project/sync.png"} desc={"An animation filled website based on user interaction for an advertising agency. For the animation I had used parallax and reveal effects. For the wave animation in banner, three js is used."} subtitle={"Featured Project"} title={"Sync Media"} />
           </section>
        <section id="contact" style={{ padding: "50px 0" }}>
          <SectionHeading section={3} title={"Get In Touch"} />
          <Contact desc={<>Thank you for scrolling all this way!<br /><br />You can connect with me via email <a href="mailto:kavitarawat1214@gmail.com"><span style={{ color: "#64ffda" }}>kavitarawat1214@gmail.com</span> </a>or you can drop your message in the form below.<br /><br />My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</>} />
        </section> */}
      </Slider>
      {/* <Footer /> */}
    </>
  )
}

