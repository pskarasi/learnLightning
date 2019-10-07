({
    getList: function(component, userId, cartList) {
        //call aura method from service component:
        
        //component.find("service").callApex(component, "c.getCartList", {'UserId': userId}, this.getsuccessCallBack)
        var action = component.get("c.getCartList");
        action.setParams({
            'UserId' : userId
        })
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === 'SUCCESS'){
                var cartList = response.getReturnValue();
                return cartList;
                //component.set("v.cartList", cartList);
            } else{
                alert ('error');
            }
        });
        $A.enqueueAction(action);
    },
    
    getsuccessCallBack: function(component, returnValue) {
        //process result in some way
         console.log('return value ' + returnValue);
        var cartList = returnValue;
        return cartList;
        
    }
})