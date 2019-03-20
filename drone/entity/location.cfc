<cfcomponent persistent="true" entityname="location" table="location" >
    
    <cfproperty name="id" column="LOCATIONID" generator="increment" fieldType="id" >
    <cfproperty name="name">
     <cfproperty name="upload" fieldtype="one-to-many" cfc="upload" fkcolumn="LOCATIONID" cascade="delete">
    
</cfcomponent>