Public class CreateContactPK {
    public static void createNewContact(String FName, String LName, String SPhone, String SEmail){
        contact con = new Contact();
            con.FirstName 	 = FName;
            con.LastName	 = LName;
            con.Phone 		 = Sphone; 
            con.Email		 = SEmail;
        	insert con;
    }
}