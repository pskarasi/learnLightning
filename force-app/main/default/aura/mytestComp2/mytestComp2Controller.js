({
	doHandle : function(component, event, helper) {
		var message = event.getParam("message");
        component.set("v.cmpMessage1", message);
        alert(message);
	}
})