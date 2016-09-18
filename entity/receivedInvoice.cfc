
	<cfcomponent persistent="true" entityname="receivedInvoice" table="receivedInvoice"> 
	<cfproperty name="receivedInvoiceid" fieldtype="id"> 
    <cfproperty name="store" fieldtype="many-to-one" cfc="store">
    <cfproperty name="Date"> 
    <cfproperty name="PAYMENTS">
    <cfproperty name="StoreTransfer">
    <cfproperty name="VERIZONAMOUNT"> 
    <cfproperty name="RELIANCEAMOUNT">
    <cfproperty name="BRIGHTPOINTAMOUNT" > 
    <cfproperty name="VZWRMA">
    <cfproperty name="IceMobility">
    <cfproperty name="Misc">
    <cfproperty name="filename">
</cfcomponent>
