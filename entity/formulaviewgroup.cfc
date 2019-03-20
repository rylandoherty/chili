<cfcomponent persistent="true" entityname="formulaviewgroup" table="formulaviewgroup" >
    <cfproperty name="id" generator="increment" fieldType="id" column="formulaviewgroupid" >
    <cfproperty name="name" >
 
   <cfproperty name="formulalist" fieldtype="one-to-many" cfc="formulalist" fkcolumn="formulaviewgroupid">
   <cfproperty name="checked">
   
   </cfcomponent>