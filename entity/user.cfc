<cfcomponent persistent="true" entityname="User" table="User" > 
    <cfproperty name="userid" fieldtype="id"> 
    <cfproperty name="password"> 
    <cfproperty name="level">
    <cfproperty name="store" fieldtype="many-to-one" cfc="store">
    <cfproperty name="isLoggedIn" type="boolean">
    <cfproperty name="sales" fieldtype="one-to-many" cfc="sales" fkcolumn="userid">
    <cfproperty name="profitgoal">
    <cfproperty name="newgoal">
    <cfproperty name="strategicgoal">
    <cfproperty name="xlplangoal">
    <cfproperty name="insurancegoal">
    <cfproperty name="accessoryperboxgoal">
    <cfproperty name="profitperboxgoal">
    <cfproperty name="hours">
    <cfproperty name="isHidden" update="true">
</cfcomponent>