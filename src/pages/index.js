import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Banner from '../components/banner';
import Card from '../components/card';
import Sidebar from '../components/sidebar';
import { ContentStyle } from '../components/styles';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const news = posts.filter(
      ({ node: val }) => val.frontmatter.category == 'news'
    );
    const howto = posts.filter(
      ({ node: val }) => val.frontmatter.category == 'how-to'
    );
    const reviews = posts.filter(
      ({ node: val }) => val.frontmatter.category == 'review'
    );
    const blog = posts.filter(
      ({ node: val }) => val.frontmatter.category == 'blog'
    );

    return (
      <React.Fragment>
        <Banner />
        <Sidebar />
        <ContentStyle>
          <h1>Latest News</h1>
          {news.map(({ node: post }) => <Card card={post} />)}
          <h1>Latest How to's</h1>
          {howto.map(({ node: post }) => <Card card={post} />)}
          <h1>Latest Reviews</h1>
          {reviews.map(({ node: post }) => <Card card={post} />)}
          <h1>Latest Articles</h1>
          {blog.map(({ node: post }) => <Card card={post} />)}
        </ContentStyle>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 35)
          id
          fields {
            slug
          }
          frontmatter {
            title
            image
            category
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
