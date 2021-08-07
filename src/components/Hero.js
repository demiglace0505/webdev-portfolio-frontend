import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Christian</h1>
            <h4>Fullstack React Developer</h4>
            <Link to="/contact" className="btn">
              Get in touch
            </Link>
            <div className="social-links">
              {socialLinks.map(l => {
                return (
                  <a href={l.url} key={l.id} id={l.id} className="social-link">
                    {l.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  )
}

export default Hero
