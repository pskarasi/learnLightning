({
    createContact : function(component, event, helper) {
        var createRecord = $A.get("e.force:createRecord");
        createRecord.setParams({
            "entityApiName": "Contact",
            "defaultFieldValues" : {
                'AccountId' : component.get('v.recordId')
                
            }
        });
        createRecord.fire();
}
 })