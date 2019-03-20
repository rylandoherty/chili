<cfcomponent persistent="true" entityname="commissionspiffpeg" table="commissionspiffpeg"> 
    
 <cfproperty name="commissionspiffpegid" generator="increment" fieldType="id" > 
  
  	<cfproperty name="commissionspifftype" fieldtype="many-to-one" cfc="commissionspifftype">
      <cfproperty name="bonus">
      <cfproperty name="value">
   		
</cfcomponent>