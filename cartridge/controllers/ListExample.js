var ArrayList = require('dw/util/ArrayList');
var guard = require('sitegenesis_storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');

//dw.util.Iterator
exports.mylist=function()
{
	var l=new ArrayList();
	l.add(1);
	l.add(2);
	l.add(8);
	ISML.renderTemplate('mylist.isml',{
		mlist:l
	});
};
exports.mylist.public=true; 