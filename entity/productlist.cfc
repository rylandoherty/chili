<cfcomponent persistent="true" entityname="productlist" table="productlist"> 
    <cfproperty name="RQSKU" fieldtype="id"> 
   
    <cfproperty name="inventory" fieldtype="one-to-many" cfc="inventory" fkcolumn="RQSKU">
    
    <cfproperty name="name"> 
    <cfproperty name="hidden">
    <cfproperty name="category" > 
    <cfproperty name="icon">  
    <cfproperty name="ordersettings" fieldtype="one-to-many" cfc="ordersettings" fkcolumn="RQSKU">
    <cfproperty name="cost">
     
    
   
    
    
    
   
     
</cfcomponent>