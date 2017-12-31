<cfcomponent persistent="true" entityname="stores" table="stores" >
    <cfproperty name="storeid" fieldtype="id">
    <cfproperty name="region" fieldtype="many-to-one" cfc="region">
    <cfproperty name="district" fieldtype="many-to-one" cfc="district">
   <cfproperty name="hoursworked" fieldtype="one-to-many" cfc="hoursworked" fkcolumn="storeid">
   <cfproperty name="saleinvoice" fieldtype="one-to-many" cfc="saleinvoice" fkcolumn="storeid">
   <cfproperty name="goalstore" fieldtype="one-to-many" cfc="goalstore" fkcolumn="storeid">
   <cfproperty name="clockinclockout" fieldtype="one-to-many" cfc="clockinclockout" fkcolumn="storeid">
   <cfproperty name="storeschedule" fieldtype="one-to-many" cfc="storeschedule" fkcolumn="storeid">
   <cfproperty name="hoursclocked" fieldtype="one-to-many" cfc="hoursclocked" fkcolumn="storeid">
   <cfproperty name="productdetails" fieldtype="one-to-many" cfc="productdetails" fkcolumn="storeid">
   </cfcomponent>