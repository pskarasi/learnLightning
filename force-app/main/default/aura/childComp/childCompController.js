({
	handleChild : function(component, event, helper) {
		var sets = event.getParam("arguments")
        if(sets){
            var param1 = sets.childParam1;
            console.log(param1);
            alert(param1);
        }
	}
})