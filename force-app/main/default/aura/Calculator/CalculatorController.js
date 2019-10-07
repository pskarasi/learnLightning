({
	doAdd : function(component, event, helper) {
		var number1 = component.get("v.input1");
        var number2 = component.get("v.input2");
        var res = parseInt(number1) + parseInt(number2);
        component.set("v.result", res);
	},
    
    	doSubstract : function(component, event, helper) {
		var number1 = component.get("v.input1");
        var number2 = component.get("v.input2");
        var res = parseInt(number1) - parseInt(number2);
        component.set("v.result", res);
	},
    
    	doMultiply : function(component, event, helper) {
		var number1 = component.get("v.input1");
        var number2 = component.get("v.input2");
        var res = parseInt(number1) * parseInt(number2);
        component.set("v.result", res);
	},
    
    	doDivide : function(component, event, helper) {
		var number1 = component.get("v.input1");
        var number2 = component.get("v.input2");
        var res = parseInt(number1) / parseInt(number2);
        component.set("v.result", res);
	}
})