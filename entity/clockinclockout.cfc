<cfcomponent persistent="true" entityname="clockinclockout" table="clockinclockout"> 
	<cfproperty name="id" generator="increment" fieldType="id" column="clockinclockoutid" >
    
    
    <cfproperty name="timein">
    <cfproperty name="timeout">
     <cfproperty name="date">
    <cfproperty name="userlist" fieldtype="many-to-one" cfc="userlist">
    <cfproperty name="stores" fieldtype="many-to-one" cfc="stores">
    <cfproperty name="storename">
    <cfproperty name="username">
    <cfproperty name="hours">
    
     
</cfcomponent>