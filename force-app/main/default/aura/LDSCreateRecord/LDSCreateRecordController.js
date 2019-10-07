({
	doInit : function(component, event, helper) {
		component.find('recordCreator').getNewRecord(
        'Beer__c', null,false,
            $A.getCallback(function(){
          		var record = component.get('v.record')   ;
                var error  = component.get('v.recordError');
                if (error || (record==null)){
                    console.log('Error while creating the record' + error);
                }else{
                    console.log('Successfully Created');
                   
                }
            })
        );
	},
    handleSave : function(component, event, helper) {
        //var saveResult;
        component.find('recordCreator').saveRecord(function (saveResult){
            	var showToast = $A.get('e.force:showToast');
                if(saveResult.state ==='SUCCESS' || saveResult.state ==='DRAFT'){
                    //var showToast = $A.get('e.force:showToast');
                    showToast.setParams({
                        "title" : "Record Created",
                        "type" : "success",
                        "message" : "Beer Record has been successfully created"
                    });
                    
                } else if (saveResult.state === 'INCOMPLETE'){
                    console.log('error incomplete');
                }else if (saveResult.state === 'ERROR'){
                    console.log('error ERROR');
                } else{
                    console.log('error others');
                    }   
            	showToast.fire();
            });
    }
})