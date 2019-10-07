@RestResource(urlMapping='/CreateContact/*')
global without sharing class CreateContact {
    
    @Httppost
    global static void createNewContact(){
        RestRequest req = RestContext.request;
        String JSONString = req.requestBody.toString();
        List<newContactRec> newConList = (List<newContactRec>)JSON.deserialize(JSONString, newContactRec.class);
        List<Contact> con = new List<Contact>();
        
        for(newContactRec newCon: newConList){
            Contact nc		= new contact();
            nc.FirstName	= newCon.FirstName;
            nc.LastName		= newCon.LastName;
            nc.Email		= newCon.Email;
            nc.Phone		= newCon.Phone;	
            con.add(nc);
        }
        
        try{
            insert con;
        }
        catch(DmlException e) {
            System.debug('The following exception has occurred: ' + e.getMessage());
        }
    }
    
    Public Class newContactList {
        Public List<newContactRec> newContactRec ;
    }
    
    public class newContactRec {
        Public string FirstName;
        Public String LastName;
        Public String Email;
        Public String Phone;
    }
 /*   
    public class JsonParser{
		public list<Contacts> Contacts{get;set;}
	public class Contacts{
		public String Email{get;set;}
		public String LastName{get;set;}
		public String Phone{get;set;}
		public String FirstName{get;set;}
	}
}
*/
}