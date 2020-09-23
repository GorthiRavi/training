var guard = require('sitegenesis_storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');

function start() {
	ISML.renderTemplate('test.isml');
}

exports.Start = guard.ensure(['get'], start);