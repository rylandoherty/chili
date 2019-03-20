<cfcomponent persistent="true" entityname="operationlog" table="operationlog" >
    
    <cfproperty name="id" generator="increment" fieldType="id" column="operationlogid" >
    
     <cfproperty name="createddate">
     <cfproperty name="eventdate">
    <cfproperty name="employeename">
    <cfproperty name="problemtype">
    <cfproperty name="storename">
    <cfproperty name="comment">
    <cfproperty name="hidden">
    
    
</cfcomponent>