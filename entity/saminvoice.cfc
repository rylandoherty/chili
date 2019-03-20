<cfcomponent persistent="true" entityname="saminvoice" table="saminvoice"> 
    <cfproperty name="id" generator="increment" fieldType="id" column="saminvoiceid" >
   
    
    <cfproperty name="type" >
    <cfproperty name="date" >
<cfproperty name="collected" >
<cfproperty name="relatedinvoice">
      <cfproperty name="saminventorytrx" fieldtype="one-to-many" cfc="saminventorytrx" fkcolumn="saminvoiceid">
   <cfproperty name="samcustomer" fieldtype="many-to-one" cfc="samcustomer">
    
   
</cfcomponent>