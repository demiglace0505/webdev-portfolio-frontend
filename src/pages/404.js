import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="Not Found" />
      <main className="error-page">
        <div className="error-container">
          <h1>Error 404. Dead End.</h1>
          <Link to="/" className="btn">
            Home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
