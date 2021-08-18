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

let rawdata_en = fs.readFileSync('src/data/en/global.json');
let global_en = JSON.parse(rawdata_en);

let rawdata_1 = fs.readFileSync('src/data/cs/components.json');
let components = JSON.parse(rawdata_1);

let rawdata_2 = fs.readFileSync('src/data/cs/newsletter_12.json');
let newsletter_12 = JSON.parse(rawdata_2);

let rawdata_2_en = fs.readFileSync('src/data/en/newsletter_12.json');
let newsletter_12_en = JSON.parse(rawdata_2_en);

let rawdata_3 = fs.readFileSync('src/data/cs/newsletter_03_21.json');
let newsletter_03_21 = JSON.parse(rawdata_3);

let rawdata_4 = fs.readFileSync('src/data/cs/newsletter_04_21.json');
let newsletter_04_21 = JSON.parse(rawdata_4);

let rawdata_5 = fs.readFileSync('src/data/cs/newsletter_05_21.json');
let newsletter_05_21 = JSON.parse(rawdata_5);

let rawdata_6 = fs.readFileSync('src/data/cs/newsletter_06_21.json');
let newsletter_06_21 = JSON.parse(rawdata_6);

let rawdata_8 = fs.readFileSync('src/data/cs/newsletter_08_21.json');
let newsletter_08_21 = JSON.parse(rawdata_8);

module.exports = {

  global: global,
  global_en: global_en,
  components: components,
  newsletter_12: newsletter_12,
  newsletter_12_en: newsletter_12_en,
  newsletter_03_21: newsletter_03_21,
  newsletter_04_21: newsletter_04_21,
  newsletter_05_21: newsletter_05_21,
  newsletter_06_21: newsletter_06_21,
  newsletter_08_21: newsletter_08_21,

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

    posthtml: {
      fetch: {
        tags: ['get'],
        attribute: 'resource'
      }
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
