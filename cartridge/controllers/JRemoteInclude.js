/**
* Description of the Controller and the logic it provides
*
* @module  controllers/JRemoteInclude
*/

var guard = require('sitegenesis_storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
function start(){
    var param1 = request.httpParameterMap.param1.value;

	ISML.renderTemplate('extras/remoteInclude.isml' ,
	{
		param1 : param1
	} );
} ;
exports.Start = guard.ensure(['get'], start);

