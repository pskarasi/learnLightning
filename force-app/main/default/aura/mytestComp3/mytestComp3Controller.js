({
	doHandle : function(component, event, helper) {
		var message = event.getParam("message");
        component.set("v.cmpMessage2", message);
        alert("3 11111" + message)
	}
})