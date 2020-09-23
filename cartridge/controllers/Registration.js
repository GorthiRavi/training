/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Registration
*/

'use strict';

var ISML = require('dw/template/ISML');
var guard = require('sitegenesis_storefront_controllers/cartridge/scripts/guard');
var product=require('dw/catalog/ProductMgr');
var catalog=require('dw/catalog/CatalogMgr');
var registrationForm = session.forms.Registration;
var Transaction = require('dw/system/Transaction');
var Custombject=require('dw/object/CustomObject');


function start() {


	registrationForm.clearFormElement();
	               ISML.renderTemplate('Registration/Registration', {
	                        ContinueURL : dw.web.URLUtils.https('Registration-HandleForm'),
	                        CurrentForms :session.forms
	                });

	}

function HandleForm() {
    var TriggeredAction = request.triggeredFormAction;
    
      response.getWriter().println('Hello World from pipeline controllers!'+TriggeredAction);
      if ( (TriggeredAction != null) && (TriggeredAction.formId == 'subscribe') )
      {
    	  
            ISML.renderTemplate('Registration/Registrationsuccess',{
                CurrentForms    : session.forms
            });  
            return;
  
		}
      else{
          ISML.renderTemplate('Registration/Registrationunsuccess');
     }
}

exports.Start = guard.ensure(['get'], start);
exports.HandleForm = guard.ensure([], HandleForm);


