





<link rel="shortcut icon" type="image/ico" 
      href="C:/ColdFusion10/cfusion/wwwroot/greenchili/greenchili/content/greenchili.ico/">

<cfset showForm = true>


<cfset dest = getTempDirectory()>
<cffile action="upload" destination="#dest#" filefield="masterfile" result="masterfile"
        nameconflict="makeunique">

        
<cfif masterfile.fileWasSaved >
	<cfset master = masterfile.serverDirectory & "/" & masterfile.serverFile>
	
	
	<cfif isSpreadsheetFile(master) >
		<cfspreadsheet action="read" src="#master#" query="masterData" headerrow="1">
		
	
	
		               
		<cffile action="delete" file="#master#">
		
	
		<cfset showForm = false>
	<cfelse>
		<cffile action="write" file="#master#" output="" addnewline="false"/>
		
		
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
		
		
		
			logic = createObject("component", "logic");
			numberStruct =  logic.setReceiveBill
			
			(masterData , masterFile.serverFile);
		
		
	
	</cfscript>
	<script type="text/javascript" >
		//window.location.href = "/";
		
	</script>
	

	<cfif masterData.recordCount is 1>
		<p>
			This spreadsheet appeared to have no data.
		</p>
	<cfelse>
		
	</cfif>
</cfif>