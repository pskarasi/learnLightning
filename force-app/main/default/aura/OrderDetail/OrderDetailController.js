({
	doInit : function(component, event, helper) {
        console.log('i am in doInIt')
		var pageRef = component.get("v.pageReference");
        if(pageRef){
            console.log('11111 i am in doInIt')
            var state = pageRef.state;
            component.set('v.orderId', state.c__orderId);
            component.find('recordViewer').reloadRecord();
        }
	}
})