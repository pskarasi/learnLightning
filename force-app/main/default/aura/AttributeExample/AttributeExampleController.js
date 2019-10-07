({
	onClickAction: function(component, event, helper) {
        var Name = component.find("testName").get("v.value");
        component.set("v.Whom", Name);
        var Age = component.find("testAge").get("v.value");
        component.set("v.Age", Age);
        var message = 'I am ' + Name + '. My age is ' + Age + '.'
        component.set("v.message", message);
        //alert(message);
	}
})