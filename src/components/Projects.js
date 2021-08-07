import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = props => {
  return (
    <section className="section projects">
      <Title title={props.title} />
      <div className="section-center projects-center">
        {props.projects.map((p, index) => {
          // console.log(p, "PROJECT MAP")
          return <Project key={p.id} index={index} {...p}></Project>
        })}
      </div>
      {props.showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
