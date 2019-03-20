<cfcomponent persistent="true" entityname="phobioskulist" table="phobioskulist"> 
    <cfproperty name="id" generator="increment" fieldType="id" column="phobioskulistid" >
   
    
    <cfproperty name="model" >
    <cfproperty name="sellprice" >
    <cfproperty name="sellpricedmg" >
    <cfproperty name="cost" >
    <cfproperty name="costdmg" >
    <cfproperty name="costdate" >
    <cfproperty name="costdmgdate" >
    
   <cfproperty name="phobio" fieldtype="one-to-many" cfc="phobio" fkcolumn="phobioskulistid">
   <cfproperty name="saminventory" fieldtype="one-to-many" cfc="saminventory" fkcolumn="phobioskulistid"> 
    

   
    
   
</cfcomponent>