import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Disqus from 'disqus-react';
import { ArticalStyle } from '../components/styles';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Sidebar from '../components/sidebar';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  url
}) => {
  const PostContent = contentComponent || Content;
  const disqusShortname = 'techvax';
  const disqusConfig = {
    url: 'https://techvax.netlify.com'+url,
    identifier: url,
    title
  };
  return (
   <div>
    <ArticalStyle>
      {helmet || ''}
      <h1 style={{ marginBottom: 10 + 'px' }}>{title}</h1>
      <PostContent content={content} />
    </ArticalStyle>
    <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
   </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <React.Fragment>
      <Sidebar />
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        url={post.fields.slug}
        id={post.id}
      />
    </React.Fragment>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
