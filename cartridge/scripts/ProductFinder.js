
var prdMgr = require('dw/catalog/ProductMgr');


/*exports.start = function(pid){
	return prdMgr.getProduct(pid);

};
exports.start.public = true;*/


function start (pid) {
	return prdMgr.getProduct(pid);	
}
exports.start = start;
