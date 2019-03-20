<cfcomponent persistent="true" entityname="commissiontype" table="commissiontype"> 
    
 <cfproperty name="commissiontypeid" generator="increment" fieldType="id" > 
  
  	<cfproperty name="name">

	
   	<cfproperty name="bonusratetype">
   
     <cfproperty name="commissiongroup" fieldtype="many-to-one" cfc="commissiongroup">
      <cfproperty name="formulalist" fieldtype="many-to-one" cfc="formulalist">
   		<cfproperty name="commissionpeg" fieldtype="one-to-many" cfc="commissionpeg" fkcolumn="commissiontypeid">
   
</cfcomponent>