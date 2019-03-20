<cfcomponent persistent="true" entityname="upload" table="upload" lazy="false" fetch="select">

    <cfproperty name="uploadid" generator="increment" fieldType="id" column="uploadid"  >
   		<cfproperty name="uploadtype" fieldtype="many-to-one"  cfc="uploadtype">
   		<cfproperty name="filename">
   		<cfproperty name="location" fieldtype="many-to-one"   cfc="location">
   		<cfproperty name="viewgroup" fieldtype="many-to-one"  cfc="viewgroup">
   		<cfproperty name="pilot" fieldtype="many-to-one"  cfc="pilot">
   		
   		<cfproperty name="addedon">

	
   

    
    </cfcomponent>