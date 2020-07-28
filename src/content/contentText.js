// contentText.js
const HeaderText = function() {
  return "Propojte se ve firmě jediným komunikačním nástrojem"
}

module.exports = {
  HeaderText: HeaderText(), // hlavní nadpis webu
  textIntro: function() {
    return "Workforce Connect spojuje veškerou komunikaci zaměstnanců do jednoho a snadno spravovatelného zařízení. Systém pracuje na vnitřní Wi-Fi síti a využijete jej například ve skladech, v logistice, na prodejnách, v dopravě a nemocnicích. Bez problému můžete také použít svá stávající zařízení Zebra nebo jiné mobilní telefony se systémem iOS či Android, popřípadě stolní a přenosné počítače. Využitím Workforce Connect nevznikají žádné dodatečné náklady, nepotřebujete ani placené služby mobilních operátorů."
  }(), // úvodní text
  wha: () => imaginaryLib.render('implicit return 👌'),
}
