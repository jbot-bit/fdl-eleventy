module.exports = function (eleventyConfig) {
  // Filter to find items by slug
  eleventyConfig.addFilter("findBySlug", (collection, slug) => {
    if (!collection) return;
    return collection.find((item) => item.slug === slug);
  });

  // Passthrough static assets and evidence files
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("fdl-evidence");

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
      includes: "_includes",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
