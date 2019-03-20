<cfcomponent persistent="true" entityname="eroeslogin" table="eroeslogin"> 
	<cfproperty name="id" generator="increment" fieldType="id" column="eroesloginid" >
    
    
    <cfproperty name="storename">
    <cfproperty name="employeename">
    <cfproperty name="customername">
    <cfproperty name="date">
    <cfproperty name="mtn">
    <cfproperty name="time">
	<cfproperty name="userlist" fieldtype="many-to-one" cfc="userlist">
    <cfproperty name="stores" fieldtype="many-to-one" cfc="stores">
    

    
    
    




   				
     
</cfcomponent>