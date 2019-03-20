<cfcomponent persistent="true" entityname="userlist" table="userlist" >
    <cfproperty name="userid" fieldtype="id" generator="increment" >
    <cfproperty name="password">
    <cfproperty name="accesslevel">
    <cfproperty name="name">
    <cfproperty name="namenormalized">
    <cfproperty name="username">
    <cfproperty name="email">
    <cfproperty name="wage">
    <cfproperty name="salary">
    <cfproperty name="isdrawtrue">
    <cfproperty name="commissiontype">
    <cfproperty name="employeetier">
    <cfproperty name="employeeposition">
    <cfproperty name="commissionstartdate">
    <cfproperty name="basepercent">
	 <cfproperty name="hiredate">
	  <cfproperty name="lastactive">
	  <cfproperty name="commissionableemployee" fieldtype="one-to-many" cfc="commissionableemployee" fkcolumn="userid">
	  <cfproperty name="store" fieldtype="many-to-one" cfc="stores">
	<cfproperty name="district" fieldtype="many-to-one" cfc="district">
	<cfproperty name="region" fieldtype="many-to-one" cfc="region">
	<cfproperty name="primarystorename">
    <cfproperty name="districtname">
	<cfproperty name="regionname">
    <cfproperty name="hoursworked" fieldtype="one-to-many" cfc="hoursworked" fkcolumn="userid">
    <cfproperty name="saleinvoice" fieldtype="one-to-many" cfc="saleinvoice" fkcolumn="userid">
    <cfproperty name="clockinclockout" fieldtype="one-to-many" cfc="clockinclockout" fkcolumn="userid">
	    <cfproperty name="productdetails" fieldtype="one-to-many" cfc="productdetails" fkcolumn="userid">
     <cfproperty name="storeschedule" fieldtype="one-to-many" cfc="storeschedule" fkcolumn="userid">
   <cfproperty name="hoursclocked" fieldtype="one-to-many" cfc="hoursclocked" fkcolumn="userid">
	<cfproperty name="eroesid">
	<cfproperty name="eroeslogin" fieldtype="one-to-many" cfc="eroeslogin" fkcolumn="userid">
</cfcomponent>