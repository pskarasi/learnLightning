({
	doHandle : function(component, event, helper) {
        
		var contactRec = event.getParam('conRecord');
        console.log('conRecord');
        var conList = component.get("v.contactList");
        if (conList){
            conList.push(contactRec);
            component.set('v.contactList', conList);
        } else {
            conList = [];
            conList.push(contactRec);
            component.set('v.contactList', conList);
        }
	},
    
    handleSave : function(component, event, helper) {
       
        var action = component.get('c.createcontact');
        action.setParams({
            contactList : component.get('v.contactList')
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            alert(state);
            if (state === 'SUCCESS'){
                alert('Record Saved SuccessFully');
                contactList.clear();
                component.set("v.contactList", contactList)
            } else{
                var error = response.getError();
                alert(error);
            }
        });
        $A.enqueueAction(action);
    },
    
    handleEditContact : function(component, event, helper) {
        alert ('handling the event')
        var contactRecord = event.getParam('editedContact');
        component.set("v.ContactRecord", contactRecord);
    }
})