<cfcomponent persistent="true" entityname="store" table="store"> 
    <cfproperty name="storeid" fieldtype="id"> 
    <cfproperty name="inventory" fieldtype="one-to-many" cfc="inventory" fkcolumn="storeid">
   
    
   
    <cfproperty name="icon">
    
     
     
    
   
    
    
    
   
     
</cfcomponent>