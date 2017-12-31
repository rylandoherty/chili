<cfcomponent persistent="true" entityname="storeschedule" table="storeschedule"> 
	
	
	<cfproperty name="id" generator="increment" fieldType="id" column="storescheduleid" >
    
    
    <cfproperty name="starttime">
    <cfproperty name="endtime">
     <cfproperty name="date">
    <cfproperty name="userlist" fieldtype="many-to-one" cfc="userlist">
    <cfproperty name="stores" fieldtype="many-to-one" cfc="stores">
    <cfproperty name="weekcode">
    <cfproperty name="storename">
    <cfproperty name="username">
     
</cfcomponent>