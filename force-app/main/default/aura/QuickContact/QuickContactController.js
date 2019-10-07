({
	doSave : function(component, event, helper)
    {
        var action = component.get('c.createContact');
        var accountId = component.get("v.accountId");
        var contact = component.get("v.CreateContact");
		console.log('accountId ' + accountId)
        console.log('fromCon ' + contact.FirstName)
        action.setParams({
            con : component.get('v.CreateContact'),
          	accountId : component.get('v.accountId')
          })
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state==="SUCCESS" || state==="DRAFT" ){
                var contact = response.getReturnValue();
                var componentEvent = component.getEvent("quickContact");
                componentEvent.setParams({ContactRecord: contact});
                componentEvent.fire();
            } else if (state === 'INCOMPLETE'){
                
            } else if  (state === 'ERROR'){
                var error = console.getError();
                console.log(error[0].duplicateResults[0].message);
                console.log(error[0].fieldErrors[0].message);
                console.log(error[0].pageErrors[0].message);
            }
        }, 'ALL');
        $A.enqueueAction(action);
	}
})