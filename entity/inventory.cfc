<cfcomponent persistent="true" entityname="inventory" table="inventory"> 
    <cfproperty name="id" generator="increment" fieldType="id" column="inventoryid" >
   
    <cfproperty name="name"> 
    <cfproperty name="tracking"> 
    <cfproperty name="storename"> 
     
    <cfproperty name="districtname"> 
    <cfproperty name="regionname">
     <cfproperty name="category">
    <cfproperty name="productsku"> 
    <cfproperty name="cost">
    <cfproperty name="quantity">

      
   
    
   
</cfcomponent>