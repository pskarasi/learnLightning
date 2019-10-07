public class ContactListController {

    @AuraEnabled
    public static List<contact> getContactList(String accountId){
        List<Contact> contactList = new List<Contact>([select Id, LastName, Name, Email, Phone 
                                                        from Contact where Email != null AND AccountId = :accountId]);
        return contactList;
    }
    
    @AuraEnabled
    public static Contact createContact(Contact con, ID accountId){
        con.AccountId = accountId;
        insert con;
        system.debug(con.FirstName);
        //system.debug(con.AccountId);
        return con;
    }
}