<cfcomponent persistent="true" entityname="Sales" table="Sales"> 
    <cfproperty name="salesid" fieldtype="id"> 
    <cfproperty name="saledetails" fieldtype="one-to-many" cfc="saledetails" fkcolumn="salesid">
    <cfproperty name="DATE">
    <cfproperty name="TYPE">
    <cfproperty name="store" fieldtype="many-to-one" cfc="store">
    <cfproperty name="user" fieldtype="many-to-one" cfc="user" > 
    <cfproperty name="FINANCED"> 
    <cfproperty name="CASH"> 
    <cfproperty name="DATASCAPE"> 
    <cfproperty name="CARDS">
    <cfproperty name="TRADEIN"> 
    <cfproperty name="COMMENTS">
    <cfproperty name="COMM">
    
 
    <cfproperty name="CUSTOMER"> 
    <cfproperty name="EMPLOYEE"> 
	<cfproperty name="PAID">
	<cfproperty name="CHECKEDBYMANAGER">
	<cfproperty name="LASTFOUR">
	<cfproperty name="PASSWORD">
</cfcomponent>