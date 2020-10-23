import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import './Work.scss';

import SEO from '../../../utils/helmetWrapper';

const Work = ({ data: { mdx }, pageContext }: any) => {
  const linkNext = useRef(null);

  const content = mdx.frontmatter.id;
  const count = pageContext.all.length;
  const current = content;

  let nextPage;
  let nextPageTitle;
  let nextPageImage;

  if (current < count) {
    nextPage = pageContext.all[current].node.fields.slug;
    nextPageTitle = pageContext.all[current].node.frontmatter.title;
    nextPageImage = pageContext.all[current].node.frontmatter.image;
  } else {
    nextPage = pageContext.all[0].node.fields.slug;
    nextPageTitle = pageContext.all[0].node.frontmatter.title;
    nextPageImage = pageContext.all[0].node.frontmatter.image;
  }

  return (
    <>
      <SEO title={mdx.frontmatter.title} description={mdx.frontmatter.desc} />
      <div className="Work">
        <div className="Work__header">
          <span>{mdx.frontmatter.order}</span>
          <h1>{mdx.frontmatter.title}</h1>
        </div>

        <MDXRenderer>{mdx.body}</MDXRenderer>

        <div className="Work__footer"></div>
      </div>
    </>
  );
};
export default Work;

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        id
        slug
        desc
        order
        image
        alt
      }
    }
  }
`;
