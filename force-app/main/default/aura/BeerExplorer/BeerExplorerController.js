({
	doSearch : function(component, event, helper) {
        var searchText = event.getParam("searchText");
		var action = component.get("c.searchBeer");
        action.setParams({searchText : searchText})
        action.setCallback(this, function(response){
            console.log('Success of Search')
           var state = response.getState();
            if (state==="SUCCESS") {
                var beerList = response.getReturnValue();
                component.set("v.beerList", beerList);
            } else if(state==="ERROR"){}
                
        });
        $A.enqueueAction(action);
	}
})