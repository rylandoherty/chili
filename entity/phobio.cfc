<cfcomponent persistent="true" entityname="phobio" table="phobio"> 
    <cfproperty name="id" generator="increment" fieldType="id" column="phobioid" >
   
    
    <cfproperty name="invoicenum">
    <cfproperty name="tradenum">
    <cfproperty name="model" >
    <cfproperty name="imei" >
    <cfproperty name="originalimei" >
    <cfproperty name="notes" >
    <cfproperty name="adjustmentreasons" >
    <cfproperty name="reportedcondition" >
    <cfproperty name="quotedamountcents" >
    <cfproperty name="adjustedcondition" >
    <cfproperty name="paymentamountcents" >
    <cfproperty name="inspectedamountcents" >
    <cfproperty name="invoicereference" >
    <cfproperty name="created" >
    <cfproperty name="shipped" >
    <cfproperty name="received" >
    <cfproperty name="inspected" >
    <cfproperty name="paid" >
    <cfproperty name="quotedcustomeramountcents" >
    <cfproperty name="paymentcustomeramountcents" >
    <cfproperty name="firstname" >
    <cfproperty name="lastname" >
    <cfproperty name="companylocation" >
    <cfproperty name="companyregion" >
    <cfproperty name="localcreated" >
    <cfproperty name="localreceived" >
    <cfproperty name="isactive" >
    <cfproperty name="status" >
    <cfproperty name="productslug" >
    <cfproperty name="hidden" >
    <cfproperty name="shipmenttrackingnumber" >
    <cfproperty name="samcondition" >
    <cfproperty name="samvalue" >
    <cfproperty name="samcomment" >
    <cfproperty name="phobioskulist" fieldtype="many-to-one" cfc="phobioskulist">
    
    

   
    
   
</cfcomponent>