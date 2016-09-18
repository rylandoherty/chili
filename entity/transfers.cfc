
	<cfcomponent persistent="true" entityname="transfers" table="transfers"> 
	<cfproperty name="transferid" fieldtype="id"  > 
    <cfproperty name="store" fieldtype="many-to-one" cfc="store">
    <cfproperty name="ShippedFrom"> 
    <cfproperty name="ReceivedAt">
    <cfproperty name="TotalInvoice">
    <cfproperty name="RequestedOn"> 
    <cfproperty name="Committed">
    <cfproperty name="CommittedOn" > 
    <cfproperty name="Completed">  
    <cfproperty name="BillTo">  
    <cfproperty name="RequestedBy"> 
    <cfproperty name="RequestingComments">
    <cfproperty name="ShippingComments">
    <cfproperty name="ReceivingComments">
    <cfproperty name="CancelledOn">
    <cfproperty name="CancelledBy">
    <cfproperty name="ShippedFromDistrict">
    <cfproperty name="ReceivedAtDistrict">
    <cfproperty name="ShippedFromRegion">
    <cfproperty name="ReceivedAtRegion">
    
</cfcomponent>
