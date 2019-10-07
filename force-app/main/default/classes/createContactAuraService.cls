public class createContactAuraService {
	@AuraEnabled
    public static void createcontact(List<Contact> contactList){
        insert contactList;
    }
}