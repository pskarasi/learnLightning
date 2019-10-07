@isTest
private class CreateContactPKTest{
    @isTest static void testCreateContact(){
        String Fname = 'Puspendra';
        String Lname = 'Singh';
        String Email = 'pskarasi@gk.com' ;
        String Phone = '9717007120' ;
        CreateContactPK.createNewContact(Fname, LName,Email,Phone);
        Contact Con = [select ID, Lastname from contact Limit 1];
        system.assertEquals('Singh', con.Lastname, 'Error running test');
    }
}