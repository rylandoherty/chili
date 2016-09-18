	<cfcomponent persistent="true" entityname="rma" table="rma"> 
		
    <cfproperty name="rmaid" fieldtype="id"  > 
    <cfproperty name="Vendor"> 
    <cfproperty name="store" fieldtype="many-to-one" cfc="store">
    <cfproperty name="storename"> 
    <cfproperty name="TotalCost"> 
    <cfproperty name="TotalCostCredited">
    <cfproperty name="VendorRMA" > 
    <cfproperty name="WayBill">  
    <cfproperty name="CreditInvoice">  
    <cfproperty name="ShippingCost"> 
    <cfproperty name="ShippedAway">
    <cfproperty name="Committed">
    <cfproperty name="CommittedOn">
    <cfproperty name="Completed">
    <cfproperty name="CreatedOn">
    <cfproperty name="CreatedBy">
    <cfproperty name="Comments">
    <cfproperty name="ReceivingComments">
    <cfproperty name="Region">
    <cfproperty name="District">
   
    
</cfcomponent>