@isTest
private class DataGeneration_Tests {
    
    @TestSetup
    Static void dataCreation(){
        Account a = TestFactory.getAccount('Muddy Waters Ltd', true);
        Contact c = TestFactory.getContact(a.Id, 'Muddy', 'Waters',true);
        Opportunity opp = New Opportunity();
          opp.name = 'Long lost record';
          opp.accountId = a.id;
          opp.closeDate = Date.today().addDays(14);
          opp.stageName = 'prospecting';
          insert opp;
    }
    
    @isTest static void testUseTestFactoryToCreateAccountsWithContacts()
    {
        List<Account> accts;
        List<Contact> contacts;
        TestFactory.generateAccountWithContact(5);
        
        Test.startTest();
        accts = [select Id from Account];
        contacts = [select id from contact];
        Test.stopTest();
        system.assert(accts.size() > 0, 'Was expecting to find atleast one account');
        system.assertEquals(6, contacts.size(), 'was expecting to find 5 contacts');
    }

}