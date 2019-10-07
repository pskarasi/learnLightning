({
	removeRecord : function(component, event, helper) {
		var index = event.currentTarget.id;
        var existingRecords = component.get("v.ContactRecords");
        existingRecords.splice(index, 1);
        component.set("v.ContactRecords", existingRecords);
	},
    
    editRecord : function(component, event, helper) {
       
		var index = event.currentTarget.id;
        var existingRecords = component.get("v.ContactRecords");
        var selectedRecord = existingRecords[index];
         existingRecords.splice(index, 1);
         component.set("v.ContactRecords", existingRecords);
        var editEvent = component.getEvent("editContact");
        editEvent.setParams({
            'editedContact' : selectedRecord
        })
        editEvent.fire();
	}
})