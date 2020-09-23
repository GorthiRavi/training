/**
* Description of the Controller and the logic it provides
*
* @module  controllers/JShowProduct
*/

'use strict';

var guard = require('sitegenesis_storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
var prdFdr = require('~/cartridge/scripts/ProductFinder');
var pid = request.httpParameterMap.pid.stringValue;
function start(){

	var errorMsg=dw.web.Resource.msgf('productnotfoundMsg', 'myBundle', null, pid);

	var product = prdFdr.start(pid);
	if(product != null){
		ISML.renderTemplate('productfound.isml', 
				{
			product : product
	         	}
				);
	} else {
		ISML.renderTemplate('productnotfound.isml', 
				{
			message:pid,
			message1:errorMsg
			}
				);
	};
	
}
exports.Start = guard.ensure(['get'], start);
