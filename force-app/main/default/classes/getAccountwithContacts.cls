public class getAccountwithContacts {

    @AuraEnabled
    public static list<Account> getAccountwithContact(){
       List<Account> accList = [select Name, (select Name from contacts) from Account Limit 10] ;
        return accList;
       
    }
}