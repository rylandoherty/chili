<cfcomponent persistent="true" entityname="ptar" table="ptar"> 
    
  <cfproperty name="id" generator="increment" fieldType="id" column="ptarid"> 
  <cfproperty name="INVOICE" >
    <cfproperty name="DATE">
    <cfproperty name="TYPE">
    <cfproperty name="RELATEDINVOICE" >
	<cfproperty name="USER">
    <cfproperty name="STORE">
    <cfproperty name="USERTENDER">
    <cfproperty name="TRADEIN">
    
    
    <cfproperty name="BILLPAY"> 
    <cfproperty name="CASH">
    <cfproperty name="GIFTCARD">
    <cfproperty name="REBATES"> 
    <cfproperty name="PHONELOSSWARRANTY"> 
    <cfproperty name="CARDS">
    <cfproperty name="VIRTUALTERMINAL">
    <cfproperty name="CHECK">
    
    

    
</cfcomponent>