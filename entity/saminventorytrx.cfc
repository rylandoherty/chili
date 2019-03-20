<cfcomponent persistent="true" entityname="saminventorytrx" table="saminventorytrx"> 
    <cfproperty name="id" generator="increment" fieldType="id" column="saminventorytrxid" >
   
    <cfproperty name="soldfor"> 
    
	<cfproperty name="type"> 
    <cfproperty name="refunded">   
   <cfproperty name="saminventory" fieldtype="many-to-one" cfc="saminventory">
   <cfproperty name="saminvoice" fieldtype="many-to-one" cfc="saminvoice">
    
   
</cfcomponent>