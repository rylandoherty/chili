<cfcomponent persistent="true" entityname="viewgroup" table="viewgroup">


   		
<cfproperty name="id" column="VIEWGROUPID" generator="increment" fieldType="id" >
   <cfproperty name="Title">
     <cfproperty name="upload" fieldtype="one-to-many" cfc="upload" fkcolumn="VIEWGROUPID" cascade="delete">
    
			
		
    
    
    </cfcomponent>