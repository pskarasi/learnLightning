public class CustomSearchController {
    @AuraEnabled
    public static List<object> fetchSearchResult(String searchText, String objectName){
        String searchTextWithLike = '%' + searchText + '%';
        String Query = 'Select ID, Name from ' + objectName + 'where Name like ' + searchTextWithLike;
        List<Object> searchResult = Database.query(Query);
        return searchResult;
    }
    
}