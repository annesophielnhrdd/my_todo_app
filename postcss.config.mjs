import tailwindcss from "tailwindcss";

export default {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require("autoprefixer"),
    require("postcss-import"),
  ],
};
