({
	doCall : function(component, event, helper) {
		var childComp = component.find("childComp");
        childComp.childM("Hello This is Passed from Parent Comp");
	},
    
    doHandle : function(component, event, helper) {
        alert("i am in parent component")
    }
})