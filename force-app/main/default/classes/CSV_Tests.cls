@isTest
private class CSV_Tests {
@TestSetup
    static void loadTestDataFromStaticResource() {
        List<sObject> accounts = Test.loadData(Account.sobjectType, 'accountData');
    }
    
    @isTest static void testLoadAccountfromStaticResource(){
        
        List<account> accts = [select id from account];
        system.assert(accts.size() == 3, 'expected 3 accounts');
    }
}