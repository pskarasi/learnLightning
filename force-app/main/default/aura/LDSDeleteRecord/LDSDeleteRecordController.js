({
	 handleDelete : function(component, event, helper) {
        //var saveResult;
        component.find('recordHandler').deleteRecord($A.getCallback(function (deleteResult){
            	if(deleteResult.state ==='SUCCESS' || deleteResult.state ==='DRAFT'){
                    var showToast = $A.get('e.force:showToast');
                    showToast.setParams({                        
                        "title" : "Record Deleted",
                        "type" : "success",
                        "message" : "Beer Record has been successfully Deleted"
                        
                    });
                    showToast.fire();
                    var pageReference = component.find('navRef');
                    var pageReferenceNav = 
                        {
                            type: 'standard__objectPage',
                            attributes : {
                                objectApiName: 'beer__c',
                                actionName : 'list'
                            },
                            state : {   
                                
                            }   
                        };
                    alert(pageReferenceNav);
                    pageReference.navigate(pageReferenceNav);
                } else if (deleteResult.state === 'INCOMPLETE'){
                    console.log('error incomplete');
                }else if (deleteResult.state === 'ERROR'){
                    console.log('error ERROR');
                } else{
                    console.log('error others');
                    }   
            }));
    }
})