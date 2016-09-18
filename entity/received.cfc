
	<cfcomponent persistent="true" entityname="received" table="received"> 
	<cfproperty name="receiveid" fieldtype="id"> 
    <cfproperty name="store" fieldtype="many-to-one" cfc="store">
    <cfproperty name="Reference"> 
    <cfproperty name="ReceivedOn">
    <cfproperty name="ReceivedAt">
    <cfproperty name="ReceivedBy"> 
    <cfproperty name="Vendor">
    <cfproperty name="VendorInvoice" > 
    <cfproperty name="Posted">  
    <cfproperty name="Paid">  
    <cfproperty name="Flagged"> 
   
    <cfproperty name="TotalInvoice">
    <cfproperty name="ReconciliationComments">
    <cfproperty name="OrderingComments">
    <cfproperty name="ReceivingComments">
    <cfproperty name="Region">
    <cfproperty name="District">
   
    
</cfcomponent>
