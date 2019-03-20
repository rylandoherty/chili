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
   <cfproperty name="color">
   <cfproperty name="decimal">
   <cfproperty name="belowaveragealert">
   <cfproperty name="warningalert">
   <cfproperty name="displayspercentage">    
    <cfproperty name="payrate"> 
    <cfproperty name="commissiontype" fieldtype="one-to-many" cfc="commissiontype" fkcolumn="formulalistid">
    <cfproperty name="commissionspifftype" fieldtype="one-to-many" cfc="commissionspifftype" fkcolumn="formulalistid">
    
    <cfproperty name="formulaviewgroup" fieldtype="many-to-one" cfc="formulaviewgroup">
     
</cfcomponent>