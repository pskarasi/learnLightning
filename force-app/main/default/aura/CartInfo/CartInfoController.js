({
	addToCartList : function(component, event, helper) {
		var cartParam = event.getParams("arguments");
        var beerRecord = cartParam.beerRecord;
        var orderQuantity = cartParam.orderQuantity;
        var totalPrice = beerRecord.Price__c * parseInt(orderQuantity);
        
        component.set("v.beerOrderRec.Beer__c", beerRecord.Name);
        component.set("v.beerOrderRec.Ordered_Quantity__c", orderQuantity);
        component.set("v.beerOrderRec.Total_Price__c", totalPrice);
        var beerOrderRec = component.get("v.beerOrderRec")
        if(beerRecord){
       		var beerOrderList = component.get("beerOrderList");
            if(beerOrderList){
                beerOrderList.push(beerOrderRec)
                component.set("v.beerOrderList", beerOrderList)
            } else{
                beerOrderList = [];
                beerOrderList.push(beerOrderRec)
                component.set("v.beerOrderList", beerOrderList)
            }
            
        } else{
            alert("there is some problem in beer record");
        }
	}
})