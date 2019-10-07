public class BeerSearchAuraService {
    @AuraEnabled
    public static list<sObject> searchBeer(string searchText){
        
        string LikeParam = '%' + searchText + '%';
        string Query = '';
        List<sObject> beerList = new List<sObject>();
        if (searchText != null){
            Query = 'Select Id, Name, Alcohol__c, brewery_id__c, brewery_Name__c, Remaining_Quantity__c, Total_Quantity__c,	Price__c from Beer__c where Name Like :LikeParam';
        } else{
        	Query = 'Select Id, Name, Alcohol__c, brewery_id__c, brewery_Name__c, Remaining_Quantity__c, Total_Quantity__c,	Price__c from Beer__c Limit 50';    
        }
        
        beerList =  Database.query(Query);
        return beerList;
    }
}