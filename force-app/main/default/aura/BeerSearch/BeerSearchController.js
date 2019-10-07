({
	fireSearchEvent : function(component, event, helper) {
		var searchEvent = component.getEvent("searchEvent");
        var searchText = component.find("searchInput").get("v.value")
        searchEvent.setParams({searchText : searchText});
        searchEvent.fire();
	}
})