({
	validateFields : function(component, event, helper) {
        var isValid = component.find('newContact').reduce(function (validFields, inputComp){
            inputComp.showHelpMessageIfInvalid()
         	return validFields && inputComp.get('v.validity').valid;
        }, true);
        
        return isValid;
	}
})