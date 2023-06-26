exports.createPages = async function ({ actions }) {
  actions.createPage({
    path: "my-dynamic-page",
    component: require.resolve(`./src/templates/products.tsx`),
    context: {
      // Data passed to context is available
      // in pageContext props of the template component
      name: "Product 1",
      description: "This is description of Product 1",
      productID: 1,
    },
  });
  console.log("End of Gatsby Node File");
};
