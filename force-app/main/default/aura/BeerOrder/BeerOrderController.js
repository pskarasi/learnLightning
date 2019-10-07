({
    doInit: function(component, event, helper) {
        // Prepare a new record from template
        component.find("createBeerOrder").getNewRecord(
            "Beer_Order__c", // sObject type (objectApiName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.beerO");
                var error = component.get("v.orderRecordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                    return;
                }
                console.log("Record template initialized: " + rec.apiName);
            })
        );
    },
    

	handleSubmit : function(component, event, helper) {
		var addCheck = component.get("v.beerORec.IsBillingSaveAsShipping__c");
        console.log(component.get("v.beerORec.New_Ship_To_Street__c"));
        if (addCheck){
            
            component.set("v.beerORec.New_Bill_To_Street__c", component.get("v.beerORec.New_Ship_To_Street__c"))
            component.set("v.beerORec.New_Bill_To_City__c", component.get("v.beerORec.New_Ship_To_City__c"))
            component.set("v.beerORec.New_Bill_To_State__c", component.get("v.beerORec.New_Ship_To_State__c"))
            component.set("v.beerORec.New_Bill_To_Postal__c", component.get("v.beerORec.New_Ship_To_Postal__c"))
            component.set("v.beerORec.New_Bill_To_Country__c", component.get("v.beerORec.New_Ship_To_Country__c"))
        }
        
        var isValid = helper.validateForm;
        
        if(!isValid){
        	alert ('Some Error on validation')
            return;
        }
        var userId = $A.get("$SObjectType.CurrentUser.Id");
        
        //alert(userId)
        component.set("v.beerORec.Beer__c", component.get("v.beerId"));
        component.set("v.beerORec.Ordered_By__c", userId);
        component.set("v.beerORec.Status__c", "New");
        component.find("createBeerOrder").saveRecord($A.getCallback(function(saveResult){
            if(saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                //alert (saveResult.recordId)
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParam
                toastEvent.setParams({
                    "title": "Order Placed",
                    "message": "Beer Ordered Successfully.",
                    "type" : "Success"
                    });
                toastEvent.fire();
                var navService = component.find("navigation");
                var pageReferenceNav = {    
                    "type": "standard__component",
                    "attributes": {
                        "componentName": "c__OrderDetail"    
                    },    
                    "state": {
                        "c__orderId": saveResult.recordId
                    }
                }
                navService.navigate(pageReferenceNav);
            	
			}else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }));
	},
    
    hanleSucess : function(component, event, helper) {
		
	},
    hanleError : function(component, event, helper) {
		
	},
    
    updatePrice : function(component, event, helper) {
        var quantity = component.get("v.beerORec.Ordered_Quantity__c");
        var totalPrice = 0;
        if(quantity == '' || quantity == null){
            var totalPrice = 0;
            component.set("v.beerORec.Total_Price__c", totalPrice);   
        } else {
            var unitPrice = component.get("v.beerRec.Price__c");
            component.set("v.totalPrice", totalPrice);   
            totalPrice = parseInt(quantity) * unitPrice;
            component.set("v.totalPrice", totalPrice);   
        }
    }
    
})