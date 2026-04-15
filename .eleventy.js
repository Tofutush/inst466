import { VentoPlugin } from "eleventy-plugin-vento";

export default function (eleventyConfig) {
	eleventyConfig.setQuietMode(true);
	eleventyConfig.addPlugin(VentoPlugin);
	eleventyConfig.addPassthroughCopy("style.css");
	return {
		markdownTemplateEngine: 'vto',
		htmlTemplateEngine: 'vto'
	}
}