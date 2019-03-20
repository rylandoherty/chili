<cfcomponent persistent="true" entityname="goalformats" table="goalformats"> 
    <cfproperty name="id" generator="increment" fieldType="id" column="goalformatsid"> 
   <cfproperty name="progress">
    <cfproperty name="percentpayed"> 
    <cfproperty name="goalformatgroup" fieldtype="many-to-one" cfc="goalformatgroup">
  
  
</cfcomponent>