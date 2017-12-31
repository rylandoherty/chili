<cfcomponent persistent="true" entityname="district" table="district" > 
    <cfproperty name="districtid" fieldtype="id"> 
    <cfproperty name="region" fieldtype="many-to-one" cfc="region">
	<cfproperty name="stores" fieldtype="one-to-many" cfc="stores" fkcolumn="districtid">
</cfcomponent>