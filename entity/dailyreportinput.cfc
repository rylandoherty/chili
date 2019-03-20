<cfcomponent persistent="true" entityname="dailyreportinput" table="dailyreportinput"> 
    
 <cfproperty name="id" generator="increment" fieldType="id" column="dailyreportinputid"> 
  
  
  <cfproperty name="type">
  <cfproperty name="date">
  <cfproperty name="store">
  <cfproperty name="user">
  <cfproperty name="dateadded">
  <cfproperty name="QTY">
 <cfproperty name="comment">
  
   
</cfcomponent>