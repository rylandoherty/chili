<cfcomponent persistent="true" entityname="region" table="region" >
    <cfproperty name="regionid" fieldtype="id">
   <cfproperty name="district" fieldtype="one-to-many" cfc="district" fkcolumn="regionid">
    <cfproperty name="stores" fieldtype="one-to-many" cfc="stores" fkcolumn="regionid">
    <cfproperty name="productdetails" fieldtype="one-to-many" cfc="productdetails" fkcolumn="regionid">
    <cfproperty name="userlist" fieldtype="one-to-many" cfc="userlist" fkcolumn="regionid">
</cfcomponent>