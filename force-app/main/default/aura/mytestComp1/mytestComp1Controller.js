({
	doFire : function(component, event, helper) {
        var testEvent = $A.get("e.c:mytestEvent");
        var jmessage = component.get("v.message");
        
        testEvent.setParams({"message": jmessage});
        alert('event fired')
        testEvent.fire();
        
	}
})