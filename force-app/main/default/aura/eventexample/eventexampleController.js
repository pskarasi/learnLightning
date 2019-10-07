({
	doHandleChange : function(component, event, helper) {
		console.log("value has changed");
	},
    
    changeValue: function(component, event, helper) {
        component.set("v.test", "Changing the Value");
        var aeEvent = $A.get("e.c:aeEvent");
        aeEvent.fire()
    }
})