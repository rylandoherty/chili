<cfcomponent persistent="true" entityname="inventory" table="inventory"> 
    <cfproperty name="inventoryid" fieldtype="id"> 
    <cfproperty name="productlist" fieldtype="many-to-one" cfc="productlist"> 
   
    <cfproperty name="name"> 
    <cfproperty name="storename"> 
    <cfproperty name="productsku"> 
    <cfproperty name="cost">
     <cfproperty name="store" fieldtype="many-to-one" cfc="store" >
      
   
    
   
</cfcomponent>