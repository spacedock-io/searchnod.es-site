var stealTools = require("steal-tools");

stealTools.build({
  main: "site/site",
  config: __dirname+"/stealconfig.js"
},{
  bundleSteal: true,
  // the following are the default values, so you don't need
  // to write them.
  minify: true,
  debug: false,
  quiet: false,
  bundleDepth: 3,
  mainDepth: 3
})
