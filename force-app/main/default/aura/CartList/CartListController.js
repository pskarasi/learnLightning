({
    doInit : function(component, event, helper) {
        var userId = $A.get("$SObjectType.CurrentUser.Id");
        //var cartList = [];
        //helper.getList(component, userId, cartList);
        var action = component.get("c.getCartList");
        action.setParams({
            'UserId' : userId
        })
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === 'SUCCESS'){
                var cartList = response.getReturnValue();
                component.set("v.cartList", cartList);
                var totalRecords = cartList.length;
        		var tagLine = "My Cart (" + totalRecords + ")";
                alert('my message ' + tagLine);
        		component.set("v.TagLine" , tagLine);
            } else{
                alert ('error');
            }
        });
        $A.enqueueAction(action);
    },
    
	removeRecord : function(component, event, helper) {
		var index = event.currentTarget.id;
        var existingRecords = component.get("v.cartList");
        var removedRecord = existingRecords[index];
        //alert (removedRecord.Id);
        
        var action = component.get('c.removeRecordFromCart')
        action.setParams({'removedRecord' : removedRecord })
        action.setCallback(this, function(response){
            var state = response.getState()
            if(state === 'SUCCESS'){
                var totalRecords = existingRecords.length - 1;
                var tagLine = 'My Cart (' + totalRecords + ')';
                component.set("v.TagLine" , tagLine);
                existingRecords.splice(index, 1);
                component.set("v.cartList", existingRecords);
            }
            else{
                alert('There is some server issue in removing record Please try again');
            }
        });
		$A.enqueueAction(action);
	},
    
    goBackToHome : function(component, event, helper) {
        var beerExp =  $A.get("e.force:navigateToComponent");
        beerExp.setParams({
            componentDef : "c:BeerExplorer",
            componentAttributes: {
            
        	}
        })
        beerExp.fire();
    },
})