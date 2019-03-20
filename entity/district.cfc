<cfcomponent persistent="true" entityname="district" table="district" >
    <cfproperty name="districtid" fieldtype="id">
    <cfproperty name="region" fieldtype="many-to-one" cfc="region">
	<cfproperty name="stores" fieldtype="one-to-many" cfc="stores" fkcolumn="districtid">
    <cfproperty name="productdetails" fieldtype="one-to-many" cfc="productdetails" fkcolumn="districtid">
    <cfproperty name="userlist" fieldtype="one-to-many" cfc="userlist" fkcolumn="districtid">
</cfcomponent>