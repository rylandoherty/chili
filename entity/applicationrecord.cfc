<cfcomponent persistent="true" entityname="applicationrecord" table="applicationrecord"> 
	<cfproperty name="id" generator="increment" fieldType="id" column="applicationrecordid" >
    
    
    <cfproperty name="applicationnumber" type="numeric" length="12">
    <cfproperty name="pin">
    <cfproperty name="username">
    <cfproperty name="key">
	<cfproperty name="date">
    
     
</cfcomponent>