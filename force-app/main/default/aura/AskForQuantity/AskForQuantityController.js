({
    addRecord : function(component, event, helper) {
        
        var beerId = component.get("v.beerRec.Id");
        var quantity = component.get("v.quantity");
        var UserId = $A.get("$SObjectType.CurrentUser.Id");
        
        component.set("v.cartRec.Beer__c", beerId);
        component.set("v.cartRec.Order_Quantity__c", quantity);
        
        var cartRec = component.get("v.cartRec");
        var action = component.get('c.insertCartRecord');
        
        action.setParams({
            'cartRec' : cartRec,
            'UserId'  : UserId
        });
        
        action.setCallback(this, function(response){
            
            var state = response.getState();
            
            if (state === 'SUCCESS'){
        	    var cartItemCount = response.getReturnValue();
                var updateEvent = $A.get("e.c:UpdateCartItemCount");
                updateEvent.setParams({'cartItemCount' : cartItemCount})
                component.find("overlayLib").notifyClose();
                
                updateEvent.fire();
                
            } else {
                var error = response.getError();
                
            }
        });
        
        $A.enqueueAction(action);        
    }
})