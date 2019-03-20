<cfcomponent persistent="true" entityname="commissionspiffgroup" table="commissionspiffgroup"> 
    
 <cfproperty name="commissionspiffgroupid" generator="increment" fieldType="id" > 
  
  	<cfproperty name="name">

	
   
  
   
   <cfproperty name="commissionableemployee" fieldtype="many-to-one" cfc="commissionableemployee">
   <cfproperty name="commissionspifftype" fieldtype="one-to-many" cfc="commissionspifftype" fkcolumn="commissionspiffgroupid">
</cfcomponent>