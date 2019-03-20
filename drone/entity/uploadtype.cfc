<cfcomponent persistent="true" entityname="uploadtype" table="uploadtype">

 

<cfproperty name="id" column="UPLOADTYPEID" generator="increment" fieldType="id" >
    <cfproperty name="name">
     <cfproperty name="upload" fieldtype="one-to-many" cfc="upload" fkcolumn="UPLOADTYPEID" cascade="delete">
    
    </cfcomponent>