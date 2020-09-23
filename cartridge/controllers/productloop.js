'use strict';
var guard = require('sitegenesis_storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
var product = require('dw/catalog/ProductMgr');
var catalog = require('dw/catalog/CatalogMgr');
exports.myproducts = function() {
	var catee = catalog.getSiteCatalog();
	if (catee === null) {
		ISML.renderTemplate('notfound.isml', {
			message : 'not found'
		});
	} else {
		/*
		 * ISML.renderTemplate('catalogfound.isml', { mycat:catee });
		 */
		var prods = product.queryProductsInCatalog(catee);
		product.close();
		ISML.renderTemplate('prodlist.isml', {
			plist : prods
		});
	}
};
exports.myproducts.public = true;