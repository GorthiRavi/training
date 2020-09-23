/**
* Description of the Controller and the logic it provides
*
* @module  controllers/JCall
*/

'use strict';

var guard = require('sitegenesis_storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');


function start(){
	var param = request.httpParameterMap.pid;
	if(param.stringValue != null){
		ISML.renderTemplate('call/jnotEmpty.isml',
				{
			param1 : param
				});
	} else {
		  ISML.renderTemplate(
                  'call/jempty.isml', 
                  {
                	  param1:'param not found'
                		  }  
                 );
	};
	
}
exports.Start = guard.ensure(['get'], start);

