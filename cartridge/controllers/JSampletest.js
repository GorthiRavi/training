/**
exports.Start = function(){
         response.setContentType('text/html');
         response.getWriter().println('<h1>Hello World from Javascript controllers!</h1>');
};
exports.Start.public = true;   //World becomes the start node
*/

var guard = require('sitegenesis_storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
function start() {
	ISML.renderTemplate(
			'helloworld.isml', {
			myParameteronISML:
			"Hello world"
			}
			);
};
exports.Start = guard.ensure(['get'], start);