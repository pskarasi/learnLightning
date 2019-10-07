({
	validateForm : function(component, event, helper) {
        var formValid = component.find("bOrder").reduce(function (validSoFar, inputCmp){
        	inputCmp.showHelpMessageIfInvalid()
              return validSoFar && inputCmp.get('v.validity').valid;
                }, true);
        
        return formValid;
	}
})