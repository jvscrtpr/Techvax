import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'

const btnStyle = styled.button`
outline: none;
cursor: pointer;
border: none;
border-radius: 6px;
background: #899FA9;
color: #fff;
height: 48px;
width: 48px;
font-size: 20px;
& :hover {
    background: #ff4081;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    transition: 0.5s;
}
`;

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}
            >
              <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
              <ul className="taglist">{postLinks}</ul>
              <Link to="/tags/"><button style={btnStyle}>Browse all tags</button></Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
