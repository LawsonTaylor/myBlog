import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Media from 'react-media';
import Sidebar from '../components/sidebar';

import Header from '../components/header'
import './index.css'
import '../styles/layout-override.css'

const MainContent = (lrg, children) => {
  
  let flx = lrg ? {flex: 1, paddingLeft: "340px", paddingTop: "60px"} : {flex: 2.5, paddingLeft: "40px", paddingTop: "60px"}; 

  let sidebar = lrg ? SideBarContent() : '';

  return (
  <div
    style={{
      margin: "0 auto",
      maxWidth: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: "100%",
    }}
  >
  {sidebar}
  <div style={flx}>{children()}</div>
  </div>
  ); 
}

const SideBarContent = () => {
  return(
    <div styles={{ flex: 1, height: "100vh"}}>
    <Sidebar
      title="Lawson's Blog"
      descrption="Articles on my everything"
      />
    </div>
  );
}

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: "100%",
        paddingTop: 0,
      }}
    >
    <Media query={{ maxWidth: 850 }}>
      {matches => 
        MainContent(!matches, children)
      }
    </Media>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
