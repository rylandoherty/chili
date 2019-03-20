<cfcomponent persistent="true" entityname="phonecats" table="phonecats" >
    
    <cfproperty name="id" generator="increment" fieldType="id" column="phonecatsid" >
    <cfproperty name="title">
    <cfproperty name="tier">
    <cfproperty name="parent">
    <cfproperty name="finaltier">
    <cfproperty name="category">
    
    
    
    
</cfcomponent>