public with sharing class CartController {
	
    @AuraEnabled
    public static Cart__c insertCartRecord(Cart__c cartRec)
    {
        try{
        	insert cartRec;
            system.debug(cartRec.Id);
            return cartRec;
            
        } catch(DmlException e){
            system.debug('Exceptin is ' + e);
            //return e.getDmlMessage(0);
            return cartRec;
        }
    }
    
    @AuraEnabled
    public static list<cart__c> getCartList(String UserId){
        list<cart__c> cartList = [select Id, Name, Beer__c, Price__c, Order_Quantity__c from Cart__c where CreatedById = :UserId];
        return cartList;
    }
}