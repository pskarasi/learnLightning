({
	addForReview : function(component, event, helper) {
        
		var isValid = helper.validateFields(component, event)
        
        if(isValid){
            var componentEvent = component.getEvent('CreateContacts');
            component.set("v.ContactRecord.AccountId", component.get("v.recordId"));
            componentEvent.setParams({'conRecord' : component.get("v.ContactRecord")
                                     });
            
            componentEvent.fire();
        } else{
            alert('Please fill all required values');
        }
	}
    
})