({
    doInit: function(component, userId) {
        //call aura method from service component:
        
        //component.find("service").callApex(component, "c.getCartList", {'UserId': userId}, this.getsuccessCallBack)
        var UserId = $A.get("$SObjectType.CurrentUser.Id");
        var userName = $A.get("$SObjectType.CurrentUser.Name");
        
        var action = component.get("c.getCartCount");
        action.setParams({
            'UserId' : UserId
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === 'SUCCESS'){
                //alert('Callback Successful')
                var cartItemCount = response.getReturnValue();
                component.set("v.itemCount", cartItemCount);
                //alert(cartItemCount);
            } else{
                alert ('error');
            }
        });
        $A.enqueueAction(action);
    },
    
    handleItemCountEvent : function(component, event, helper) {
        
  		var itemCount = event.getParam("cartItemCount");
        component.set("v.itemCount", itemCount);
    },
    
    goToCart : function(component, event, helper) {
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef : "c:CartList",
            componentAttributes: {
                
            }
        });
        evt.fire();
    }
 })