@isTest
Public class TestFactory {
    public static Account getAccount(String Name, Boolean doInsert){
        Account a = new Account(name=Name);
        if (doInsert){
            insert a;
        }
        return a;
    }
    public static Contact getContact(ID accountId, string fname, string lname, Boolean doInsert){
        Contact c = new Contact(FirstName = fname, LastName=lname, accountId = accountId);
        if(doInsert){
            insert c;
        }
        return c;
    }
    
    public static void generateAccountWithContact(Integer numContacts){
        Account a = getAccount('Default Account Ltd', true);
        List<Contact> conList = new List<Contact>();
        for (integer i = 0; i<numContacts; i++){
            String ContactName = 'contact' + i;
            conList.add(getContact(a.id, ContactName, ContactName, false));
        }
        insert conList;
    }
    
    public static Opportunity[] generateOppsForAccount(id accountId, Decimal amount, Integer numOpps){
    List<Opportunity> opps = new List<Opportunity>();
    for(Integer i = 0; i < numOpps; i++){
      Opportunity o = new Opportunity();
      o.name = 'Account ' + i;
      o.accountId = accountid;
      o.amount = amount;
      o.closeDate = Date.today().addDays(5);
      o.stageName = 'Prospecting';
      opps.add(o);
    }
    return opps;
  }
  public static User generateUser(String profileName){
    UserRole userRole = new UserRole(DeveloperName = 'TestingTeam', Name = 'Testing Team');
    insert userRole;
    User u = new User(
      ProfileId = [SELECT Id FROM Profile WHERE Name = :profileName].Id,
      LastName = 'last',
      Email = 'Cpt.Awesome@awesomesauce.com',
      Username = 'Cpt.Awesome@awesomesauce.com',
      CompanyName = 'Testing Co',
      Title = 'Captian',
      Alias = 'alias',
      TimeZoneSidKey = 'America/Los_Angeles',
      EmailEncodingKey = 'UTF-8',
      LanguageLocaleKey = 'en_US',
      LocaleSidKey = 'en_US',
      UserRoleId = userRole.Id
    );
    insert u;
    return u;
  }
}