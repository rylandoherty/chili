<cfcomponent persistent="true" entityname="storegoal" table="storegoal">
    <cfproperty name="id" generator="increment" fieldType="id" column="storegoalid">
    <cfproperty name="storename">
	<cfproperty name="month">
    <cfproperty name="year">
	<cfproperty name="quantity">
		<cfproperty name="forcast">
		<cfproperty name="lastyear">
		<cfproperty name="beatbest">
		<cfproperty name="average">
		<cfproperty name="formula">
    <cfproperty name="formulaname">
    <cfproperty name="finalized">
</cfcomponent>