<cfcomponent persistent="true" entityname="storegoal" table="storegoal">
    <cfproperty name="id" generator="increment" fieldType="id" column="storegoalid">
    <cfproperty name="storename">
	<cfproperty name="month">
    <cfproperty name="year">
	<cfproperty name="quantity">
    <cfproperty name="formulaname">
</cfcomponent>