<cfcomponent persistent="true" entityname="holiday" table="holiday" > 
	
    <cfproperty name="holidayid" generator="increment" fieldType="id" column="holidayid" > 
    <cfproperty name="date"> 
    <cfproperty name="name">
   
</cfcomponent>