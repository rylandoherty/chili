<cfcomponent persistent="true" entityname="productcatalog" table="productcatalog"> 
   <cfproperty name="productcatalogid" fieldType="id"  >
   
   
    
    <cfproperty name="name"> 
    <cfproperty name="rqsku"> 
    <cfproperty name="hidden">
    <cfproperty name="category"> 
    <cfproperty name="icon">  
    
    <cfproperty name="lowcost">
    <cfproperty name="highcost">
      <cfproperty name="parentid">
      <cfproperty name="isfromrq">
    <cfproperty name="vendor">  
    <cfproperty name="accessorybelongstodevice"> 
    <cfproperty name="accessorytype">
    <cfproperty name="hidefromsam">  
    <cfproperty name="saminventory" fieldtype="one-to-many" cfc="saminventory" fkcolumn="productcatalogid">
    
    
   
     
</cfcomponent>