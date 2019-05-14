const path = require('path');
const slash = require('slash');
const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Templates for the pages, archives and posts
  const pageTemplate = path.resolve('./src/templates/page.js');
  const archiveTemplate = path.resolve('./src/templates/archive.js');
  const postTemplate = path.resolve('./src/templates/post.js');

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            status
            link
            wordpress_id
            wordpress_parent
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            link
            status
            categories {
              id
            }
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            id
            name
            slug
            count
          }
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Access query results via object destructuring
  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressCategory,
  } = result.data;

  // Create archive pages for each category below
  allWordpressCategory.edges.forEach(async catEdge => {
    // First filter out the posts that belongs to the current category
    const filteredPosts = allWordpressPost.edges.filter(
      ({ node: { categories } }) =>
        categories.some(el => el.id === catEdge.node.id)
    );

    // Some categories can be empty and therefore null
    if (filteredPosts.length > 0) {
      // create paginated archive pages for categories
      paginate({
        createPage, // The Gatsby `createPage` function
        items: filteredPosts, // An array of objects
        itemsPerPage: 10,
        pathPrefix: `/trendspaningar/${catEdge.node.slug}`, // Creates pages like `/blog`, `/blog/2`, etc
        component: slash(archiveTemplate),
        context: {
          catId: catEdge.node.id,
          catName: catEdge.node.name,
          catSlug: catEdge.node.slug,
          catCount: catEdge.node.count,
          categories: allWordpressCategory.edges,
        },
      });
    }
  });

  allWordpressPage.edges.forEach(edge => {
    if (edge.node.status === 'publish') {
      createPage({
        path: edge.node.link,
        component: slash(pageTemplate),
        context: {
          id: edge.node.id,
          parent: edge.node.wordpress_parent,
          wpId: edge.node.wordpress_id,
        },
      });
    }
  });

  allWordpressPost.edges.forEach(edge => {
    if (edge.node.status === 'publish') {
      createPage({
        path: `/trendspaningar${edge.node.link}/`,
        component: slash(postTemplate),
        context: {
          id: edge.node.id,
        },
      });
    }
  });
};
