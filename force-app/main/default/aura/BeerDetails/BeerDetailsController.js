({
	
    doOrder : function(component, event, helper) {
    var evt = $A.get("e.force:navigateToComponent");
    evt.setParams({
        componentDef : "c:BeerOrder",
        componentAttributes: {
            beerId : component.get("v.beerId")
        }
    });
    evt.fire();
},
    
    addToCart : function(component, event, helper) {
    var addToCartEvent = component.getEvent('addToCartEvent');
        var orderQuantity = component.get("v.orderQuantity");
        If (parseInt(orderQuantity) == 0 || orderQuantity == null)
        {
            orderQuantity = 1;
        }
        
        addToCartEvent.setParams({
            "beerOrderRecord" : component.get("v.beerRecord"),
            "orderQuantity"  : orderQuantity
        })      
        addToCartEvent.fire();
},
    
})