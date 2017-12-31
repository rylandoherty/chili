<cfcomponent persistent="true" entityname="goalformatgroup" table="goalformatgroup"> 
    <cfproperty name="id" generator="increment" fieldtype="id" column="goalformatgroupid"> 
    
   <cfproperty name="goalformats" fieldtype="one-to-many" cfc="goalformats" fkcolumn="goalformatgroupid">
    <cfproperty name="name"> 
    <cfproperty name="goalstore" fieldtype="one-to-many" cfc="goalstore" fkcolumn="goalformatgroupid">
    
    

</cfcomponent>