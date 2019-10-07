({
	doInit : function(component, event, helper) {
        
		var action = component.get("c.getContactList");
        var accountId = component.get("v.recordId");
        action.setParams({accountId: accountId})
        action.setCallback(this, function(response){
			var state =  response.getState()
            if (state == 'SUCCESS'){
        		var contactList = response.getReturnValue();
                console.log("Contact List" + contactList);
                component.set("v.contactList", contactList);
            }
		  });
        $A.enqueueAction(action);
	},
    
    doRedirect : function(component, event, helper) { 
        var eventSource = event.getSource();
        console.log(eventSource);
        var id = eventSource.get("v.name");
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": id,
            "slideDevName": "detail"
        });
        navEvt.fire();
    },
    
    handleQuickContactEvent : function(component, event, helper){
        alert("Test");
        var availableContact = component.get("v.contactList");
        var contactRec = event.getParam("ContactRecord");
        availableContact.push(contactRec);
        component.set("v.contactList", availableContact);
    }
})