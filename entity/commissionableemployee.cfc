<cfcomponent persistent="true" entityname="commissionableemployee" table="commissionableemployee"> 
    
 <cfproperty name="commissionableemployeeid" generator="increment" fieldType="id" > 
  

   <cfproperty name="month">
   <cfproperty name="year">
   <cfproperty name="userlist" fieldtype="many-to-one" cfc="userlist" >
   <cfproperty name="commissionspiffgroup" fieldtype="one-to-many" cfc="commissionspiffgroup" fkcolumn="commissionableemployeeid" lazy="false" fetch="select">   
   <cfproperty name="commissiongroup" fieldtype="one-to-many" cfc="commissiongroup" fkcolumn="commissionableemployeeid" lazy="false" fetch="select">
</cfcomponent>