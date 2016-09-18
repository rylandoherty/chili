<cfcomponent persistent="true" entityname="store" table="store"> 
    <cfproperty name="storeid" fieldtype="id"> 
    <cfproperty name="user" fieldtype="one-to-many" cfc="user" fkcolumn="storeid">
    <cfproperty name="sales" fieldtype="one-to-many" cfc="sales" fkcolumn="storeid">
    <cfproperty name="inventory" fieldtype="one-to-many" cfc="inventory" fkcolumn="storeid">
    <cfproperty name="ordersettings" fieldtype="one-to-many" cfc="ordersettings" fkcolumn="storeid">
    <cfproperty name="rma" fieldtype="one-to-many" cfc="rma" fkcolumn="storeid" update="true" >
    <cfproperty name="transfers" fieldtype="one-to-many" cfc="transfers" fkcolumn="storeid" update="true" >
     <cfproperty name="received" fieldtype="one-to-many" cfc="received" fkcolumn="storeid" update="true" >
     <cfproperty name="receivedInvoice" fieldtype="one-to-many" cfc="receivedInvoice" fkcolumn="storeid" update="true" >
    <cfproperty name="region">
    <cfproperty name="district">
    <cfproperty name="profitgoal">
    <cfproperty name="newgoal">
    <cfproperty name="strategicgoal">
    <cfproperty name="xlplangoal">
    <cfproperty name="insurancegoal">
    <cfproperty name="accessoryperboxgoal">
    <cfproperty name="profitperboxgoal">
    <cfproperty name="lastmonthprofitgoal">
    <cfproperty name="lastmonthnewgoal">
    <cfproperty name="lastmonthstrategicgoal">
    <cfproperty name="lastmonthxlplangoal">
    <cfproperty name="lastmonthinsurancegoal">
    <cfproperty name="lastmonthaccessoryperboxgoal">
    <cfproperty name="lastmonthprofitperboxgoal">
    
    
     
</cfcomponent>