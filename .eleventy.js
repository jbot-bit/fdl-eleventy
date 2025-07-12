// --- FILE: .eleventy.js ---
const { parse } = require("csv-parse/sync");

module.exports = function(eleventyConfig) {
  // ✅ Support for CSV data files in src/_data/
  eleventyConfig.addDataExtension("csv", contents =>
    parse(contents, { columns: true, skip_empty_lines: true })
  );

  // Filter: find collection item by slug
  eleventyConfig.addFilter("findBySlug", (collection, slug) =>
    collection?.find(item => item.data.slug === slug)
  );

  // Passthrough static folders
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("fdl-evidence/");

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
      includes: "_includes",
    },
    templateFormats: ["md", "njk", "html", "csv"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
