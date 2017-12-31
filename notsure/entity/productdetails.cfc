<cfcomponent persistent="true" entityname="productdetails" table="productdetails"> 
    <cfproperty name="id" generator="increment" fieldType="id" column="productdetailsid" >
   <cfproperty name="saleinvoice" fieldtype="many-to-one" cfc="saleinvoice">
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
   
    
</cfcomponent>
