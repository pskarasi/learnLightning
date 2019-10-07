public class getAccountContact {
    @AuraEnabled
    public static map<string,List<sObject>> getMap(){
        map<string, List<sObject>> myMap = new map<string, List<sObject>>();
        List<Account> accList = [select Name from Account LIMIT 10];
        List<contact> conList = [select Name from Contact LIMIT 10];
        myMap.put('RecentAccounts', accList);
        myMap.put('RecentContacts', conList);
        
        return myMap;
    }
    
    @AuraEnabled
    public static list<Account> getAccountwithContact(){
       List<Account> accList = [select Name, (select Name from contacts) from Account Limit 10] ;
        return accList;
       
    }
    
    @AuraEnabled
    public static List<contact> getContact(){
        List<contact> conList = [Select ID, Name, Email, Phone from contact Limit 10];
        return conList;
    }
    
}