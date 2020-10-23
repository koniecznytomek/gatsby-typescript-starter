import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ src, ...props }: any) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(quality: 100, maxWidth: 4000) {
              originalName
                ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `);

  const match = data.allImageSharp.edges.find(({ node }: any) =>
    node.fluid.originalName.match(src)
  );
  const isValid = match && match.node.fluid;

  return isValid ? <Img fluid={match.node.fluid} {...props} loading="eager" fadeIn={true}/> : null;
};

export default Image;
