<cfcomponent persistent="true" entityname="Sales" table="Sales"> 
    <cfproperty name="salesid" fieldtype="id"> 
    <cfproperty name="saledetails" fieldtype="one-to-many" cfc="saledetails" fkcolumn="salesid">
    <cfproperty name="STORE"> 
    <cfproperty name="EMPLOYEE"> 
    <cfproperty name="CUSTOMER"> 
    <cfproperty name="DATE"> 
    <cfproperty name="COST"> 
    <cfproperty name="SALES"> 
    <cfproperty name="PROFIT"> 
    <cfproperty name="FINANCED"> 
    <cfproperty name="CASH"> 
    <cfproperty name="CARD">
    <cfproperty name="TRADEIN"> 
    <cfproperty name="COMMENTS"> 
</cfcomponent>