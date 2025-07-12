const eleventyPluginCsv = require("@11ty/eleventy-plugin-csv");

module.exports = function (eleventyConfig) {
  // Use the CSV plugin to reliably load data
  eleventyConfig.addPlugin(eleventyPluginCsv);

  // Filter to find items by slug
  eleventyConfig.addFilter("findBySlug", (collection, slug) => {
    if (!collection) return;
    return collection.find((item) => item.slug === slug); // Simplified for plugin data
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