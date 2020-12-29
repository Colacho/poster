exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allImageSharp {
        nodes {
          fluid {
            originalName
          }
        }
      }
    }
  `);

  result.data.allImageSharp.nodes.forEach((i) => {
    const posters = i.fluid.originalName.split(' ').join('').slice(0, -4);
    const posterName = i.fluid.originalName;

    createPage({
      path: `/poster/${posters}/`,
      component: require.resolve('./src/templates/poster.js'),
      context: {
        slug: posterName,
      },
    });
  });
};
