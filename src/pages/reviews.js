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

    return (
      <React.Fragment>
        <ContentStyle>
          <Banner />
          <Sidebar />
          <h1>Reviews</h1>
          {posts.map(({ node: post }) => <Card card={post} />)}
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
  query ReviewQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          category: { eq: "review" }
        }
      }
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
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
