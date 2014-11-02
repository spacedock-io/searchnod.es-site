var stealTools = require("steal-tools");

stealTools.build({
  main: "site/site",
  config: __dirname+"/stealconfig.js"
},{
  bundleSteal: true
})
