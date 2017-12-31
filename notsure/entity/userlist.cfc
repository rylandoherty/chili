<cfcomponent persistent="true" entityname="userlist" table="userlist" >
    <cfproperty name="userid" fieldtype="id">
    <cfproperty name="password">
    <cfproperty name="accesslevel">
    <cfproperty name="username">
    <cfproperty name="wage">
    <cfproperty name="isdrawtrue">
    <cfproperty name="commissiontype">
    <cfproperty name="employeetier">
    <cfproperty name="employeeposition">
    <cfproperty name="commissionstartdate">


	<cfproperty name="district" fieldtype="many-to-one" cfc="district">

    <cfproperty name="districtname">

    <cfproperty name="hoursworked" fieldtype="one-to-many" cfc="hoursworked" fkcolumn="userid">
    <cfproperty name="saleinvoice" fieldtype="one-to-many" cfc="saleinvoice" fkcolumn="userid">
    <cfproperty name="clockinclockout" fieldtype="one-to-many" cfc="clockinclockout" fkcolumn="userid">
	    <cfproperty name="productdetails" fieldtype="one-to-many" cfc="productdetails" fkcolumn="userid">
     <cfproperty name="storeschedule" fieldtype="one-to-many" cfc="storeschedule" fkcolumn="userid">
   <cfproperty name="hoursclocked" fieldtype="one-to-many" cfc="hoursclocked" fkcolumn="userid">

</cfcomponent>