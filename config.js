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

let global = JSON.parse(fs.readFileSync('src/data/cs/global.json'));
let global_en = JSON.parse(fs.readFileSync('src/data/en/global.json'));
let components = JSON.parse(fs.readFileSync('src/data/cs/components.json'));
let webinair = JSON.parse(fs.readFileSync('src/data/cs/webinair.json'));
let newsletter_12 = JSON.parse(fs.readFileSync('src/data/cs/newsletter_12.json'));
let newsletter_12_en = JSON.parse(fs.readFileSync('src/data/en/newsletter_12.json'));
let newsletter_03_21 = JSON.parse(fs.readFileSync('src/data/cs/newsletter_03_21.json'));
let newsletter_04_21 = JSON.parse(fs.readFileSync('src/data/cs/newsletter_04_21.json'));
let newsletter_05_21 = JSON.parse(fs.readFileSync('src/data/cs/newsletter_05_21.json'));
let newsletter_06_21 = JSON.parse(fs.readFileSync('src/data/cs/newsletter_06_21.json'));
let newsletter_08_21 = JSON.parse(fs.readFileSync('src/data/cs/newsletter_08_21.json'));
let newsletter_12_21 = JSON.parse(fs.readFileSync('src/data/cs/newsletter_12_21.json'));

module.exports = {
  global: global,
  global_en: global_en,
  components: components,
  webinair: webinair,
  newsletter_12: newsletter_12,
  newsletter_12_en: newsletter_12_en,
  newsletter_03_21: newsletter_03_21,
  newsletter_04_21: newsletter_04_21,
  newsletter_05_21: newsletter_05_21,
  newsletter_06_21: newsletter_06_21,
  newsletter_08_21: newsletter_08_21,
  newsletter_12_21: newsletter_12_21,

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

    googleFonts: 'Source+Sans+Pro:ital,wght@0,600;0,700;0,900;1,300;1,400&display=swap',
  },
}
