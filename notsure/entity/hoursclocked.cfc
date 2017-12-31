<cfcomponent persistent="true" entityname="hoursclocked" table="hoursclocked"> 
	<cfproperty name="id" generator="increment" fieldType="id" column="hoursclockedid" >
    
    
    <cfproperty name="starttime">
    <cfproperty name="endtime">
     <cfproperty name="date">
    <cfproperty name="userlist" fieldtype="many-to-one" cfc="userlist">
    <cfproperty name="stores" fieldtype="many-to-one" cfc="stores">
    
    
     
</cfcomponent>