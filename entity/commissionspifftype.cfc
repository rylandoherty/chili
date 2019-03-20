<cfcomponent persistent="true" entityname="commissionspifftype" table="commissionspifftype"> 
    
 <cfproperty name="commissiontypeid" generator="increment" fieldType="id" > 
  
  	<cfproperty name="name">

	
   	<cfproperty name="bonusratetype">
   
     <cfproperty name="commissionspiffgroup" fieldtype="many-to-one" cfc="commissionspiffgroup">
      <cfproperty name="formulalist" fieldtype="many-to-one" cfc="formulalist">
   		<cfproperty name="commissionspiffpeg" fieldtype="one-to-many" cfc="commissionspiffpeg" fkcolumn="commissionspifftypeid">
   
</cfcomponent>