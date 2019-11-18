import buble from "rollup-plugin-buble";

export default {
  entry: "./lib/index.js",
  moduleName: "srp-react",
  plugins: [buble],
  format: process.env.format,
  dest: `dist/index.${process.env.format}.js`
};
