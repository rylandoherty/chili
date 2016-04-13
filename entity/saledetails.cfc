<cfcomponent persistent="true" entityname="saledetails" table="saledetails"> 
    <cfproperty name="id" generator="increment" fieldType="id" column="saledetailsid" >
   
     <cfproperty name="sales" fieldtype="many-to-one" cfc="sales"> 
    <cfproperty name="INVOICE"> 
    <cfproperty name="PRODUCTSKU"> 
    <cfproperty name="PRODUCTNAME"> 
    <cfproperty name="TRACKINGNUMBER"> 
    <cfproperty name="REFUND"> 
    <cfproperty name="QUANTITY"> 
    <cfproperty name="TOTALCOST"> 
    <cfproperty name="SOLDFOR"> 
    <cfproperty name="GROSSPROFIT"> 
    <cfproperty name="CATEGORY"> 
    <cfproperty name="USED">
    <cfproperty name="TRADEIN"> 
    <cfproperty name="COMMENTS"> 
</cfcomponent>
