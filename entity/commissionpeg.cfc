<cfcomponent persistent="true" entityname="commissionpeg" table="commissionpeg"> 
    
 <cfproperty name="commissionpegid" generator="increment" fieldType="id" > 
  
  	<cfproperty name="commissiontype" fieldtype="many-to-one" cfc="commissiontype">
      <cfproperty name="bonus">
      <cfproperty name="value">
   
</cfcomponent>