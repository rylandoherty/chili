component persistent="true" table="ARTISTS" {

	property name="id" column="ARTISTID" fieldtype="id" generator="increment";
	property name="firstname" ormtype="string";    
	property name="lastname" ormtype="string";    
	
	property name="art" fieldtype="one-to-many" cfc="art" fkcolumn="ARTISTID" cascade="delete";      

}