<cfcomponent>
	<cfscript>
	
/*
<cfif rq4file.fileWasSaved and finfile.fileWasSaved and vzwfile.fileWasSaved>
	<cfset rq4 = rq4file.serverDirectory & "/" & rq4file.serverFile>
	<cfset fin = finfile.serverDirectory & "/" & finfile.serverFile>
	<cfif isSpreadsheetFile(rq4) and isSpreadsheetFile(fin)>
		<cfspreadsheet action="read" src="#rq4#" query="rq4Data" headerrow="3">
		<cfspreadsheet action="read" src="#fin#" query="finData" headerrow="3">
	<!---
		<cfspreadsheet action="read" src="#vzw#" query="newData" headerrow="1"
		               sheetname="New">
		<cfspreadsheet action="read" src="#vzw#" query="upgData" headerrow="1"
		               sheetname="Upgrade">
		<cfspreadsheet action="read" src="#vzw#" query="insData" headerrow="1"
		               sheetname="Mobile Adjustment">
		<cfspreadsheet action="read" src="#vzw#" query="cbData" headerrow="1"
		               sheetname="Chargebacks">
		<cfspreadsheet action="read" src="#vzw#" query="deactData" headerrow="1"
		               sheetname="Deact Upgrade">--->
		               
		<cffile action="delete" file="#rq4#">
		<cffile action="delete" file="#fin#">
		
		<cfset showForm = false>
	<cfelse>
		<cffile action="write" file="#rq4#" output="" addnewline="false"/>
		<cffile action="write" file="#fin#" output="" addnewline="false"/>
		
		<cfset errors = "One or More of the files was not an Excel file.">
	</cfif>
<cfelse>
	<cfset errors = "The file was not properly uploaded.">
</cfif>*/
	
	
	
	remote void function abc(){
	try { 
    newArtistObj = EntityNew('artists'); 
    newArtistObj.setID("9");
    newArtistObj.setfirstname("John"); 
    newArtistObj.setlastname("Smith"); 
    newArtistObj.setaddress("5 Newport lane"); 
    newArtistObj.setcity("San Francisco"); 
    newArtistObj.setstate("CA"); 
    newArtistObj.setPostalCode("90012"); 
    newArtistObj.setphone("612-832-2343"); 
    newArtistObj.setfax("612-832-2344"); 
    newArtistObj.setemail("jsmith@company.com"); 
    newArtistObj.setThePassword("jsmith"); 
    EntitySave(newArtistObj); 
    ormflush(); 
} catch(Exception ex) { 
    WriteOutput("<p>#ex.message#</p>"); 
} 
	}
	remote void function xyz(){
	try { 
    
} catch(Exception ex) { 
    WriteOutput("<p>#ex.message#</p>"); 
} 
	}


	
	</cfscript>
</cfcomponent>