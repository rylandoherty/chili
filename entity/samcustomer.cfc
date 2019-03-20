<cfcomponent persistent="true" entityname="samcustomer" table="samcustomer"> 
    <cfproperty name="id" generator="increment" fieldType="id" column="samcustomerid" >
   
    <cfproperty name="name"> 
    
    
     
    
	
      
   <cfproperty name="saminvoice" fieldtype="one-to-many" cfc="saminvoice" fkcolumn="samcustomerid">
    
   
</cfcomponent>