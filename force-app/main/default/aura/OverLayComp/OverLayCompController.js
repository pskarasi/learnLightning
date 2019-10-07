({
    handleShowModal: function(component, evt, helper) {
        var modalBody;
        component.find('overlayLib').showCustomModal({
            header: "Application Confirmation",
            body: ' This is modalBody Test',
            footer: 'modal footer',
            showCloseButton: true,
            closeCallback: function() {
                alert('You closed the alert!');
            }
        });
    },
    
    navigate: function(component, evt, helper) {
        var navService = component.find("navigation")
        var pageReferenceNav = {    
            "type": "standard__component",
            "attributes": {
                "componentName": "c__BeerExplorer"    
            },    
            "state": {
                "myAttr": "attrValue"    
            }
        }
        //console.log(pagereferenceNav);
        navService.navigate(pageReferenceNav);
    },
    
    handleLoad : function(component, evt, helper) {
        console.log("Saved")
    },
    
    handleShowPopover : function(component, event, helper) {
        component.find('overlayLib').showCustomPopover({
            body: "This is Account Name",
            referenceSelector: ".mypopover",
            
        }).then(function (overlay) {
            setTimeout(function(){
                //close the popover after 3 seconds
                overlay.close();
            }, 300);
        });
    },
    
    createButton : function(component, event, helper) {
        $A.createComponent('lightning:button',
                           {
                               label:"Create New",
                               value: "Create New",
                               onclick: component.getReference("c.handleSubmit")
                           }, function(cmp, status, errormessage){
                              alert(status) 			
                               if (status==="SUCCESS")		         		{
                                   var body = component.get("v.body");
                                   body.push(cmp);
                                   component.set("v.body", body);
                               }
                               
                           });
    },                  
    
    
	handleSubmit : function(component, evt, helper) {
            alert("component button Submitted");
        }
    
});