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
  
  let flx = lrg ? {flex: 1} : {flex: 2.5, paddingRight: "30px"}; 

  let sidebar = lrg ? SideBarContent() : '';

  return (
  <div
    style={{
      margin: "0 auto",
      maxWidth: 980,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: "100%",
      padding: "25px"
    }}
  >
  <div style={flx}>{children()}</div>
    {sidebar}
  </div>
  ); 
}

const SideBarContent = () => {
  return(
    <div styles={{ flex: 1}}>
    <Sidebar
      title="Lawson's Blog"
      descrption="Articles on my everything"
      />
    <Sidebar
      title="About Me"
      description="Boring Facts"
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
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
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
