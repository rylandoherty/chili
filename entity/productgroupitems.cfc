<cfcomponent persistent="true" entityname="productgroupitems" table="productgroupitems"> 
    <cfproperty name="id" generator="increment" fieldType="id" column="productgroupitemsid"> 
   
   
    <cfproperty name="name"> 
  
    <cfproperty name="categorycode">
    <cfproperty name="categorydepth"> 
    
    <cfproperty name="productSKU">
    
    
      
    <cfproperty name="isGroup">  

    
     <cfproperty name="productgroup" fieldtype="many-to-one" cfc="productgroup">
  
    
    
   
    
    
    
   
     
</cfcomponent>