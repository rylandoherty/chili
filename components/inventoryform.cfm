





<link rel="shortcut icon" type="image/ico" 
      href="C:/ColdFusion10/cfusion/wwwroot/greenchili/greenchili/content/greenchili.ico/">

<cfset showForm = true>


<cfset dest = getTempDirectory()>
<cffile action="upload" destination="#dest#" filefield="inventoryFile" result="inventoryFile"
        nameconflict="makeunique">

        
<cfif inventoryFile.fileWasSaved >
	<cfset inventory = inventoryFile.serverDirectory & "/" & inventoryFile.serverFile>
	
	
	<cfif isSpreadsheetFile(inventory)>
		<cfspreadsheet action="read" src="#inventory#" query="inventoryData" headerrow="3">
		
	
	
		               
		<cffile action="delete" file="#inventory#">
		
	
		<cfset showForm = false>
	<cfelse>
		<cffile action="write" file="#inventory#" output="" addnewline="false"/>
		
		
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
	
	<cfset metadata = getMetadata(inventoryData)>

	<cfset colList = "">

	<cfloop index="col" array="#metadata#">
	
		<cfset colList = listAppend(colList, col.name)>
	</cfloop>

	
<cfscript>
		
		 logic = createObject("component", "logic");
		
		//numberStruct = logic.testGet();
		numberStruct =  logic.setInventory(inventoryData , inventoryFile.serverFile);
		
		
		//myReturn = TheObject.findingTargetColumns(data);
		
	</cfscript>
	<script type="text/javascript" >
		window.location.href = "/";
	</script>
	

	<cfif inventoryData.recordCount is 1>
		<p>
			This spreadsheet appeared to have no data.
		</p>
	<cfelse>
		
	</cfif>
</cfif>