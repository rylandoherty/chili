<cfcomponent persistent="true" entityname="goalstore" table="goalstore"> 
    <cfproperty name="id" generator="increment" fieldType="id" column="goalstoreid"> 
    <cfproperty name="stores" fieldtype="many-to-one" cfc="stores">
    <cfproperty name="name">
   <cfproperty name="month">
   <cfproperty name="year">
    <cfproperty name="cash">
    <cfproperty name="quantity">
    <cfproperty name="goalformatgroup" fieldtype="many-to-one" cfc="goalformatgroup">
     <cfproperty name="formulalist" fieldtype="many-to-one" cfc="formulalist">
  	
  
</cfcomponent>