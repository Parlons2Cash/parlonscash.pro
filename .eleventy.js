module.exports = function (eleventyConfig) {
  // Dossiers ou fichiers à copier tels quels
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("Aziz Guellouz.jpg");
  eleventyConfig.addPassthroughCopy("ads.txt");
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("blog.html");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
