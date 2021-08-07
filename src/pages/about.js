import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = props => {
  const {
    strapiAbout: { title, image, info, stack },
  } = props.data
  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <img
            src={image[0].localFile.publicURL}
            alt={title}
            className="about-img-svg"
          />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(i => {
                return <span key={i.id}>{i.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    strapiAbout {
      title
      info
      image {
        localFile {
          publicURL
        }
      }
      stack {
        id
        title
      }
    }
  }
`

export default About
