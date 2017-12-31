<cfcomponent persistent="true" entityname="uploadrecords" table="uploadrecords"> 
	<cfproperty name="id" generator="increment" fieldType="id" column="uploadid" >
    
    <cfproperty name="type">
    <cfproperty name="time">
    <cfproperty name="user">
    <cfproperty name="filename">
    
    
    
     
</cfcomponent>