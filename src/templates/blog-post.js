import React from "react"
import Helmet from "react-helmet"

function Template({
    data
}) {
    const post = data.markdownRemark;
    return(
        <div className="blog-post-container">
            <Helmet title={`Lawson Taylor - ${post.frontmatter.title}`} />
            <a className="back-button" href="/"><img src="../assets/back-arrow.svg"/></a>
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </div>
    );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default Template;