<cfcomponent persistent="true" entityname="hoursworked" table="hoursworked" > 
    <cfproperty name="id" generator="increment" fieldType="id" column="hourentryid" >
    <cfproperty name="date">
    <cfproperty name="yearmonth">  
    <cfproperty name="hoursclocked">
    <cfproperty name="user">
    <cfproperty name="store">
    <cfproperty name="userlist" fieldtype="many-to-one" cfc="userlist" >
    <cfproperty name="stores" fieldtype="many-to-one" cfc="stores" >
</cfcomponent>