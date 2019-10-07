public class contactSearch {
    @AuraEnabled
    public static list<contact> searchcontacts(String searchTerm){
        String searchTermS = '%' + searchTerm + '%';
        list<contact> searchResult = [select Name, Email from contact where Name Like :searchTermS ];
        system.debug(searchResult);
        return searchResult;
    }
        
}