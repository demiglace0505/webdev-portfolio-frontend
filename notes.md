#### Gatsby Browser

To programmatically wrap our components in the main global Layout component, we can make use of the Gatsby browser API. The **wrapPageElement** is useful for setting up persistent UI elements, in the case of this project, it essentially wraps the children element with the Layout component.
<br>
```
const React = require("react")
const Layout = require("./src/components/Layout").default

// wrap every page in a Layout Component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
```

The Gatsby SSR API lets us alter the content of static HTML files as they are being SSR'd by Gatsby and Node. It is recommended to use this API alongside Gatsby Browser.
<br>
### Navbar Component

Instead of hardcoding links, a good approach is to separate the links into a separate links component, because the links for navigation are typically reused on multiple pages. A good data structure is to arrange them into an array of objects as such:
<br>
```
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]
```
<br>
### Hero

This time around, the social media button links that is decoupled into social\_links.js is actually a React component, unlike the data structure of the links.js from the preceding chapter. This is because the *icon* object contains actual icons, not just text.
<br>
```
import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com",
  },
]

export default data
```

One caveat with working with svg and Static Image is that height property should not be used to control the height as it will crop the image. A workaround is by using CSS grid and adjusting the width property.
<br>
```
  .hero-img {
    display: block;
    grid-row: 1/1;
    grid-column: 7/-1;
  }
```
<br>
### Strapi Setup

To setup strapi, the following command was run
<br>
```
npx create-strapi-app portfolio-backend --quickstart
```

The --quickstart flag setsup SQLite database.
The project can be run in development mode using
<br>
```
npm run develop
```

### Setting up pages programatically

Using the File System Route api, we can set up the individual projects programatically. A subdirectory /projects inside pages was created so that the file system route api will make use of /projects/slug. Inside the projects directory is the template called {StrapiProject.title}.js. The pageContext object of this page will contain the title property for each page generated in this way.
<br>
### Deployment

With the current setup wherein the strapi server is run locally, the only option for deployment is drag & drop. Using the gatsby build command, the project build folder can be generated.
<br>
### siteMetadata

Using gatsby-react-helmet plugin, we can dynamically generate the title for each page using the titleTemplate field, as opposed to doing it manually
<br>
```
  siteMetadata: {
    title: `FullStack Portfolion`,
    description: `An awesome WebDev Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | FullStack Portfolio`,
    url: `https://demiglace0505.netlify.app`,
    image: `/mainimg.png`,
    twitterUsername: `@GatsbyJS`
  },
```

A screenshot of the page was also placed in the static directory mainimg.png.
<br>
### SEO

For the SEO, the ready-made template from Gatsby's official docs was used.
To facilitate Twitter cards for individual projects, we need to pass the publicURL into the Seo component in our project template.