@isTest
private class myDataGenerationTests {

    @testSetup
    static void Mock_DataMethod(){
        List<sObject> acc = Test.loadData(Account.sobjectType, 'Mock_Data');
    }
    
    @isTest static void testMockData(){
        List<account> accts = [select id from account];
        system.assert(accts.size() == 15 , 'expected 15 accounts');
    }
}