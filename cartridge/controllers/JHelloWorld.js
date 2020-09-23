/**
* Description of the Controller and the logic it provides
*
* @module  controllers/JHelloWorld
*/

'use strict';

var guard = require('sitegenesis_storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
function start(){
	ISML.renderTemplate('helloworld.isml' ,
	{
		param1 : "First Param",
		param2 : "to remote include param showing by ravi to janrdhan"
			
	} );
} ;
exports.Start = guard.ensure(['get'], start);

