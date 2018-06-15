import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Banner from '../components/banner';
import Card from '../components/card';
import Sidebar from '../components/sidebar';
import { ContentStyle } from '../components/styles';

export default class IndexPage extends React.Component {
  render() {
    const { data: { news, howto, reviews, blog } } = this.props;

    return (
      <React.Fragment>
        <Banner />
        <Sidebar />
        <ContentStyle>
          <h1>Latest News</h1>
          { news.edges.map(({ node: post }) => <Card card={ post } key={ post.id } />) }
          <h1>Latest How to's</h1>
          { howto.edges.map(({ node: post }) => <Card card={ post } key={ post.id } />) }
          <h1>Latest Reviews</h1>
          { reviews.edges.map(({ node: post }) => <Card card={ post } key={ post.id } />) }
          <h1>Latest Articles</h1>
          { blog.edges.map(({ node: post }) => <Card card={ post } key={ post.id } />) }
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

export const DataFragment = graphql`
fragment Data on MarkdownRemarkConnection {
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
        author {
          name
          image
          twitter
          instagram
        }
      }
    }
  }
}

`

export const pageQuery = graphql`
  query IndexQuery {
  howto: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {category: {eq: "how-to"}}}, limit: 4) {
    ...Data
  }
   news: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {category: {eq: "news"}}}, limit: 4) {
    ...Data
  }
   reviews: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {category: {eq: "review"}}}, limit: 4) {
    ...Data
  }
   blog: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {category: {eq: "blog"}}}, limit: 4) {
    ...Data
  }
}
`;
