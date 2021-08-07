import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Jobs = () => {
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(query)
  const [value, setValue] = useState(0)
  const { company, position, date, desc } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="work experience" />
      <div className="jobs-center">
        {/* btn container*/}
        <div className="btn-container">
          {jobs.map((j, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => setValue(index)}
              >
                {j.company}
              </button>
            )
          })}
        </div>

        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(i => {
            return (
              <div key={i.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{i.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More info
      </Link>
    </section>
  )
}

const query = graphql`
  {
    allStrapiJobs(sort: { fields: created_at, order: ASC }) {
      nodes {
        position
        company
        date
        desc {
          id
          name
        }
      }
    }
  }
`

export default Jobs
