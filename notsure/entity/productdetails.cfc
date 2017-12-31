<cfcomponent persistent="true" entityname="productdetails" table="productdetails">
    <cfproperty name="id" generator="increment" fieldType="id" column="productdetailsid" >
   <cfproperty name="saleinvoice" fieldtype="many-to-one" cfc="saleinvoice">
<cfproperty name="invoicenumber">
    <cfproperty name="PRODUCTSKU">
    <cfproperty name="PRODUCTNAME">
    <cfproperty name="TRACKINGNUMBER">
    <cfproperty name="CONTRACTNUMBER">
    <cfproperty name="REFUND">
    <cfproperty name="QUANTITY">
    <cfproperty name="TOTALCOST">
    <cfproperty name="SOLDFOR">
    <cfproperty name="GROSSPROFIT">
    <cfproperty name="CATEGORY">
    <cfproperty name="stores" fieldtype="many-to-one" cfc="stores">
    <cfproperty name="userlist" fieldtype="many-to-one" cfc="userlist">
	<cfproperty name="district" fieldtype="many-to-one" cfc="district">
	<cfproperty name="region" fieldtype="many-to-one" cfc="region">
    <cfproperty name="username">
    <cfproperty name="storename">
    <cfproperty name="date">
    <cfproperty name="customername">
    <cfproperty name="districtname">
	<cfproperty name="regionname">
</cfcomponent>
