const React = require("react")
const Layout = require("./src/components/Layout").default

// wrap every page in a Layout Component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
