// Prefix a file in /public with the deploy base path ("/" on Netlify, "/my-portfolio/" on GitHub Pages).
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
