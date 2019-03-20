<cfcomponent persistent="true" entityname="saminventory" table="saminventory"> 
    <cfproperty name="id" generator="increment" fieldType="id" column="saminventoryid" >
   
    <cfproperty name="name"> 
    <cfproperty name="cost"> 
    <cfproperty name="imei"> 
    <cfproperty name="dateadded">
    <cfproperty name="source">
    <cfproperty name="condition">
    <cfproperty name="phobiomodel">
    <cfproperty name="model">
    <cfproperty name="status">  
	<cfproperty name="phobiotradenum">
	<cfproperty name="sellprice">  
      <cfproperty name="productcatalog" fieldtype="many-to-one" cfc="productcatalog">
      <cfproperty name="phobioskulist" fieldtype="many-to-one" cfc="phobioskulist">
   <cfproperty name="saminventorytrx" fieldtype="one-to-many" cfc="saminventorytrx" fkcolumn="saminventoryid">
    
   
</cfcomponent>