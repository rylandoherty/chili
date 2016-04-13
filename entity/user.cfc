<cfcomponent persistent="true" entityname="User" table="User"> 
    <cfproperty name="userid" fieldtype="id"> 
    <cfproperty name="password"> 
    <cfproperty name="RQUSERNAME"> 
    <cfproperty name="level">
    <cfproperty name="isLoggedIn" type="boolean">
</cfcomponent>