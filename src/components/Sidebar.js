import React from "react"
import links from "../constants/links"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes></FaTimes>
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          {links.map(l => {
            return (
              <li key={l.id}>
                <Link to={l.url} onClick={toggleSidebar}>
                  {l.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={isOpen ? "social-links sidebar-icons" : null}>
          {socialLinks.map(l => {
            return (
              <li key={l.id}>
                <a href={l.url} className="social-link">
                  {l.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
