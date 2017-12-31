<cfcomponent persistent="true" entityname="saleinvoice" table="saleinvoice"> 
    <cfproperty name="saleinvoiceid" fieldtype="id"> 
    <cfproperty name="productdetails" fieldtype="one-to-many" cfc="productdetails" fkcolumn="saleinvoiceid">
    <cfproperty name="DATE">
    <cfproperty name="TYPE">
    <cfproperty name="stores" fieldtype="many-to-one" cfc="stores">
    <cfproperty name="userlist" fieldtype="many-to-one" cfc="userlist">
    <cfproperty name="user">
    <cfproperty name="store">
    <cfproperty name="Rebates"> 
    <cfproperty name="CASH"> 
    <cfproperty name="DATASCAPE"> 
    <cfproperty name="CARDS">
    <cfproperty name="TRADEIN"> 
    <cfproperty name="COMMENTS">
    <cfproperty name="VirtualTerminal">
    <cfproperty name="Check">
    <cfproperty name="CUSTOMER"> 
</cfcomponent>