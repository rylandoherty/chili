<cfcomponent persistent="true" entityname="pilot" table="pilot" >
 
	 <cfproperty name="id" column="PILOTID" generator="increment" fieldType="id" >
    <cfproperty name="name">
     <cfproperty name="upload" fieldtype="one-to-many" cfc="upload" fkcolumn="PILOTID" cascade="delete">
    
   
   </cfcomponent>