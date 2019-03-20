<cfcomponent persistent="true" entityname="acterror" table="acterror" >
    
    <cfproperty name="id" generator="increment" fieldType="id" column="acterrorid" >
    <cfproperty name="date">
    <cfproperty name="storename">
	<cfproperty name="invoicenumber">
    <cfproperty name="applicationnumber">
    <cfproperty name="mtnnumber">
    <cfproperty name="employeename">
    <cfproperty name="employeeresponsible">
    <cfproperty name="moneylost">
    <cfproperty name="comment">
    <cfproperty name="isfixed">
    <cfproperty name="cantbefixed">
    
</cfcomponent>