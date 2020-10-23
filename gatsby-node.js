const path = require("path");

const { createFilePath } = require('gatsby-source-filesystem');
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value: `/work${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___id }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              id
              image
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/templates/Work/Work.tsx`),
      context: { id: node.id, all: posts },
    });
  });
};
