import React from "react"
import Banner from "../components/Banner"
import SectionHeading from "../components/SectionHeading"
import About from "../components/About"
import Contact from "../components/Contact"
import Project from "../components/Project"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Head from "next/head"
import Slides from "../components/Slides"

export default function Home() {

  return (
    <>
      <Head>
          <title>Kavita Rawat | Front-end Developer & Freelancer Portfolio</title>
          <meta name="description" content="As a skilled front-end developer, I create visually stunning, responsive designs. Check out my work and let's collaborate to bring your project to life." />
          <link rel="icon" href="/images/logo.svg" />
          <link rel="canonical" href="https://webwizardry.netlify.app/" />
      </Head>
      <Header />
      {/* Banner Section */}
      <Banner subheading={"I build things for the web."} subtitle={"Hi, my  name  is"} title={"Kavita Rawat."} desc={"Welcome to my personal portfolio website. I'm an experienced front-end developer with a passion for creating visually stunning, responsive, and interactive web designs. Take a look at my portfolio to see my skills in action and let's collaborate to bring your project to life."} btnText="Download Resume" btnLink={"/images/Resume.pdf"} />
      <section id="about" style={{ padding: "50px 0" }}>
        <SectionHeading section={1} title={"About Me"} />
        <About img={"/images/profile.png"} desc={<>Hello! My journey in web development began in 2019 when I first experimented with building a simple landing page. Since then, I have had the privilege of working with a start-up, where I collaborated with clients, assisted senior developers, and honed my skills on several projects.<br /><br />My primary focus is on building accessible and high-performing digital experiences for clients, without compromising on browser support or performance. <br /><br />Here are a few technologies I’ve been working with recently:<br /><br /><ul><li>JavaScript (ES6+)</li><li>ReactJs</li><li>NextJs</li><li>ERP Next</li><li>Wordpress</li><li>Woocommerce</li><li>Directus CMS</li><li>FireCMS & Netlify CMS</li></ul></>} />
      </section>
      <section id="work" style={{ padding: "50px 0" }}>
        <SectionHeading section={2} title={"Some Things I’ve Built"} />
        {/* <Slides> */}
        <Project link={"https://syncmedia.io/"} technology={"NextJs , React , ThreeJs , Parallax , ThemeUI"} img={"/images/project/sync.png"} desc={"A website designed for an advertising agency, featuring captivating animations that respond to user interaction. Parallax and reveal effects are incorporated to enhance the visual experience, while Three.js is utilized to create a wave animation in the banner."} subtitle={"Featured Project"} title={"Sync Media"} />
        <Project link={"https://blockbuster-review.netlify.app/"} technology={"React , NextJs , AntDesign , API"} flexDirection textAlign img={"/images/project/movie.png"} desc={"A movie review website using NEXT Js, which is styled using AntDesign and styled components. To retrieve movie data, I have used 'The Movie Database API'. This website has an extensive search feature, and also provides a detailed page where one can read the movie's overview."} subtitle={"Featured Project"} title={"Block Buster Film Review"} />
        <Project link={"https://www.parrotcrow.in/"} technology={"Wordpress , Elementor , Woocommerce, Multisite"} img={"/images/project/ecom.png"} desc={"An e-commerce site for fashion-conscious parents and their little ones. Built on WordPress with Elementor and WooCommerce, it's a modern and professional store with multisite options for B2B and B2C customers, providing a seamless shopping experience."} subtitle={"Featured Project"} title={"Parrot Crow"} />
        <Project link={"https://webify.neuralcms.ai/"} technology={"NextJs, ParticleJs, React, Material UI"} flexDirection textAlign img={"/images/project/landing.png"} desc={"A professionally designed layout using Next.js with a banner created using Particle.js. For styling, I utilized Material UI, resulting in a polished and modern look. The site includes seamless navigation, a swiper, and a professional web page."} subtitle={"Featured Project"} title={"Webify"} />
        {/* </Slides> */}
      </section>
      <section id="contact" style={{ padding: "50px 0" }}>
        <SectionHeading section={3} title={"Get In Touch"} />
        <Contact desc={<>Thank you for scrolling all this way!<br /><br />You can connect with me via email <a href="mailto:kavitarawat1214@gmail.com"><span style={{ color: "#64ffda" }}>kavitarawat1214@gmail.com</span> </a>or you can drop your message in the form below.<br /><br />My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</>} />
      </section>
      <Footer />
    </>
  )
}

