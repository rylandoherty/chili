<cfcomponent persistent="true" entityname="formulalist" table="formulalist"> 
    <cfproperty name="id" generator="increment" fieldType="id" column="formulalistid"> 
    
   
    
    <cfproperty name="name"> 
    <cfproperty name="count">
    <cfproperty name="formula"> 
    <cfproperty name="icon">
	<cfproperty name ="showsInCalendar">
	<cfproperty name ="showsInTable">
	<cfproperty name ="trending">
	<cfproperty name="storegoal" fieldtype="one-to-many" cfc="storegoal" fkcolumn="formulalistid">
	<cfproperty name="goalstore" fieldtype="one-to-many" cfc="goalstore" fkcolumn="formulalistid">
    <cfproperty name="orderlocation">
   
    
    
    
   
     
</cfcomponent>