<cfcomponent persistent="true" entityname="commissiongroup" table="commissiongroup"> 
    
 <cfproperty name="commissiongroupid" generator="increment" fieldType="id" > 
  
  	<cfproperty name="name">

	
   <cfproperty name="basepaypercent">
   
   
   
   <cfproperty name="measuretarget">
   <cfproperty name="drawtype">
   <cfproperty name="drawvalue">
   
   <cfproperty name="commissionableemployee" fieldtype="many-to-one" cfc="commissionableemployee">
    
   <cfproperty name="commissiontype" fieldtype="one-to-many" cfc="commissiontype" fkcolumn="commissiongroupid">
</cfcomponent>