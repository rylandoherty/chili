<cfcomponent persistent="true" entityname="ordersettings" table="ordersettings"> 
    <cfproperty name="id" generator="increment" fieldType="id" column="ordersettingid" >
   <cfproperty name="store" fieldtype="many-to-one" cfc="store" >
   <cfproperty name="productlist" fieldtype="many-to-one" cfc="productlist">
   <cfproperty name="storename">
   <cfproperty name="productsku">
    <cfproperty name="desiredcount"> 
   
    
</cfcomponent>
