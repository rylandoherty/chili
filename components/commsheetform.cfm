





<link rel="shortcut icon" type="image/ico" 
      href="C:/ColdFusion10/cfusion/wwwroot/greenchili/greenchili/content/greenchili.ico/">

<cfset showForm = true>


<cfset dest = getTempDirectory()>
<cffile action="upload" destination="#dest#" filefield="commsheetFile" result="commsheetFile"
        nameconflict="makeunique">

        
<cfif commsheetFile.fileWasSaved >
	<cfset  comm = commsheetFile.serverDirectory & "/" & commsheetFile.serverFile>
	
	
	<cfif isSpreadsheetFile(comm)>
		
		<cfspreadsheet action="read" src="#comm#" query="newData" headerrow="1"
		               sheetname="Activations">
		<cfspreadsheet action="read" src="#comm#" query="upgData" headerrow="1"
		               sheetname="Upgrade">
		<cfspreadsheet action="read" src="#comm#" query="insData" headerrow="1"
		               sheetname="Mobile Adj">
		<cfspreadsheet action="read" src="#comm#" query="cbData" headerrow="1"
		               sheetname="Chargebacks">
		<cfspreadsheet action="read" src="#comm#" query="deactData" headerrow="1"
		               sheetname="Upgrade Deact">
	
	
		               
		<cffile action="delete" file="#comm#">
		
	
		<cfset showForm = false>
	<cfelse>
		<cffile action="write" file="#comm#" output="" addnewline="false"/>
		
		
		<cfset errors = "One or More of the files was not an Excel file.">
	</cfif>
<cfelse>
	<cfset errors = "The file was not properly uploaded.">
</cfif>

<cfif showForm>
	<cfif structKeyExists(variables, "errors")>
		<cfoutput>
			<p>
				<b>
					Error: 
					#variables.errors#
				</b>
			</p>
		</cfoutput>
	</cfif>
<cfelse>
	<style>
		.ssTable { width: 100%;
		border-style:solid;
		border-width:thin;
		}
		.ssHeader { background-color: #ffff00; }
		.ssTable td, .ssTable th {
		padding: 10px;
		border-style:solid;
		border-width:thin;
		}
	</style>
	
	

	
<cfscript>
		
		 logic = createObject("component", "fileTheComm");
		//writeDump(newData);
		//writeDump(upgData);
		//writeDump(insData);
		//writeDump(cbData);
		//writeDump(deactData);
		
		//numberStruct = logic.testGet();
		numberStruct =  logic.saveComm(newData,upgData,insData,cbData,deactData,commsheetFile.serverFile);
		
		
		//myReturn = TheObject.findingTargetColumns(data);
		
	</cfscript>
	<script type="text/javascript" >
		//window.location.href = "/";
	</script>
	
</cfif>