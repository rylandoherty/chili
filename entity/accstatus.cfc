<cfcomponent persistent="true" entityname="accstatus" table="accstatus" >
    
    <cfproperty name="id" generator="increment" fieldType="id" column="accstatus" >
    <cfproperty name="user">
    <cfproperty name="storename">
	<cfproperty name="vendor">
    <cfproperty name="status">
    
</cfcomponent>