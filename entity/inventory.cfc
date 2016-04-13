<cfcomponent persistent="true" entityname="inventory" table="inventory"> 
    <cfproperty name="inventoryid" fieldtype="id"> 
    <cfproperty name="productlist" fieldtype="many-to-one" cfc="productlist"> 
    <cfproperty name="name"> 
    <cfproperty name="cost"> 
     <cfproperty name="store">  
     <cfproperty name="productSKU">  
   
    
   
</cfcomponent>