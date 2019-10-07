({
    
    showInfo : function(component, event, helper) { 
        var eventSource = event.getSource();
        console.log(eventSource);
        var id = eventSource.get("v.name");
        component.set("v.beerId", id);
        $A.createComponent('c:BeerDetails',
                           {
                               beerId: id,
                               //onclick: component.getReference("c.handleSubmit")
                           }, function(beerDetails, status, errormessage){
                               
                               if (status==="SUCCESS")	
                               {  
                                   component.find('overlayLib').showCustomModal({
                                       header: "Beer Details",
                                       body: beerDetails,
                                       footer: 'Terms and Condition Apply',
                                       showCloseButton: true,
                                       closeCallback: function() {
                                           
                                       }
                                   });
                               }
                               
                           });
    },
    
    addToCart : function(component, event, helper) { 
        var eventSource = event.getSource();
        console.log(eventSource);
        var id = eventSource.get("v.name");
        var index = eventSource.get("v.value");
        var selectedBeer = component.get("v.recordList")[index];
        console.log(selectedBeer.Id)
        
        $A.createComponent('c:AskForQuantity',
                           {
                               beerRec: selectedBeer
                               //onclick: component.getReference("c.handleSubmit")
                           }, function(askForQuantity, status, errormessage){
                               
                               if (status==="SUCCESS")	
                               {  
                                   component.find('overlayLib').showCustomModal({
                                       header: "Add To Cart",
                                       body: askForQuantity,
                                       footer: 'Terms and Condition Apply',
                                       showCloseButton: true,
                                       closeCallback: function() {
                                           
                                       }
                                   });
                                   
                               }
                                   
                           });
        
    }
    
})