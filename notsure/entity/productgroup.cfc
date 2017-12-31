<cfcomponent persistent="true" entityname="productgroup" table="productgroup"> 
    <cfproperty name="productgroupid" fieldtype="id"> 
    
   <cfproperty name="productgroupitems" fieldtype="one-to-many" cfc="productgroupitems" fkcolumn="productgroupid">
    
    <cfproperty name="type">
    <cfproperty name="name"> 
    <cfproperty name="icon">

    
   
    
    
    
   
     
</cfcomponent>