<cfcomponent persistent="true" entityname="goalemployee" table="goalemployee">
    <cfproperty name="id" generator="increment" fieldtype="id" column="goalemployeeid">
	    <cfproperty name="username">
   	    <cfproperty name="storename">
		<cfproperty name="month">
		<cfproperty name="year">
		<cfproperty name="forcast">
		<cfproperty name="beatbest">
		<cfproperty name="average">
		<cfproperty name="formula">
		<cfproperty name="percentageeffort">
		<cfproperty name="finalized">
</cfcomponent>