public class ApexCartController {
    @AuraEnabled
    public static Integer insertCartRecord(Cart__c cartRec, String UserId)   
    {         
        try{
            insert cartRec;
                       
            string query = 'select count() from Cart__c where CreatedById = :UserId';
            integer cartItemCount = database.countQuery(query);

            system.debug('Cart Item Count is ' + cartItemCount);
            return cartItemCount;
        } catch(DmlException e){
            system.debug('Exceptin is ' + e);
            //return e.getDmlMessage(0);             
            integer cartItemCount  = [select count() from Cart__c where CreatedById = :UserId];
            return cartItemCount;
            }
	}
    
    @AuraEnabled
    public static void removeRecordFromCart(Cart__c removedRecord){
        Delete removedRecord;
    }
    
    @AuraEnabled
    public static list<cart__c> getCartList(String UserId){
        list<cart__c> cartList = [select Id, Name, Beer__r.Name, Price__c, Order_Quantity__c 
                                  from Cart__c 
                                  where CreatedById = :UserId];
        return cartList;
    } 
      
    @AuraEnabled
    public static integer getCartCount(String UserId){
       integer cartItemCount = [select Count()
                                  from Cart__c 
                                  where CreatedById = :UserId];
        return cartItemCount;
    } 
}