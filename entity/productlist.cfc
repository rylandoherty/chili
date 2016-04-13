<cfcomponent persistent="true" entityname="productlist" table="productlist"> 
    <cfproperty name="productlistid" fieldtype="id"> 
    <cfproperty name="inventory" fieldtype="one-to-many" cfc="inventory" fkcolumn="productlistid">
   
    <cfproperty name="name"> 
    <cfproperty name="hidden">
    <cfproperty name="category"> 
    <cfproperty name="icon">  
    <cfproperty name="stockFufillHalifax"> 
    <cfproperty name="stockFufillBridgewater"> 
    <cfproperty name="stockFufillFranklin"> 
    <cfproperty name="cost">
     
    
   
    
    
    
   
     
</cfcomponent>