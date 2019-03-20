<cfcomponent persistent="true" entityname="ordercount" table="ordercount" >
    
    <cfproperty name="id" generator="increment" fieldType="id" column="ordercountid" >
    <cfproperty name="product">
    <cfproperty name="store">
    <cfproperty name="typeoforder">
    <cfproperty name="ordertitle">
    <cfproperty name="desiredcount">
    <cfproperty name="incart">
    
    
</cfcomponent>