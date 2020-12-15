/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run the `maizzle build` or `maizzle serve` and it
| has the fastest build time, since most transformations are disabled.
|
*/

const fs = require('fs');

let rawdata = fs.readFileSync('src/data/cs/global.json');
let global = JSON.parse(rawdata);

let rawdata_1 = fs.readFileSync('src/data/cs/components.json');
let components = JSON.parse(rawdata_1);

let rawdata_2 = fs.readFileSync('src/data/cs/newsletter_12.json');
let newsletter_12 = JSON.parse(rawdata_2);

module.exports = {

  global: global,
  components: components,
  newsletter_12: newsletter_12,

  build: {
    assets: {
      source: 'src/assets/images',
      destination: 'images',
    },

    destination: {
      path: 'build_local',
    },

    tailwind: {
      css: 'src/assets/css/main.css',
    },

    templates: {
      root: 'src/templates',
    },

    components: {
      root: 'src/components',
    },

    googleFonts: 'Open+Sans:wght@300;400;600;700;800&display=swap',
  },
}
