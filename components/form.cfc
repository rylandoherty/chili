<cfcomponent>


<cffunction name="uploaded" output="false" access="remote" returnType="void">




<link rel="shortcut icon" type="image/ico" 
      href="C:/ColdFusion10/cfusion/wwwroot/greenchili/greenchili/content/greenchili.ico/">

<cfset showForm = true>


<cfset dest = getTempDirectory()>
<cffile action="upload" destination="#dest#" filefield="rq4file" result="rq4file"
        nameconflict="makeunique">
<cffile action="upload" destination="#dest#" filefield="finfile" result="finfile"
        nameconflict="makeunique">
        
<cfif rq4file.fileWasSaved and finfile.fileWasSaved>
	<cfset rq4 = rq4file.serverDirectory & "/" & rq4file.serverFile>
	<cfset fin = finfile.serverDirectory & "/" & finfile.serverFile>
	
	<cfif isSpreadsheetFile(rq4) and isSpreadsheetFile(fin)>
		<cfspreadsheet action="read" src="#rq4#" query="rq4Data" headerrow="3">
		<cfspreadsheet action="read" src="#fin#" query="finData" headerrow="3">
	
	
		               
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
	
	<cfset metadata = getMetadata(rq4Data)>

	<cfset colList = "">

	<cfloop index="col" array="#metadata#">
	
		<cfset colList = listAppend(colList, col.name)>
	</cfloop>

	
<cfscript>
		
		 logic = createObject("component", "logic");
		
		
		numberStruct = logic.organizeSales(rq4Data,finData);
		
		
		//myReturn = TheObject.findingTargetColumns(data);
	</cfscript>
	
	

	<cfif rq4Data.recordCount is 1>
		<p>
			This spreadsheet appeared to have no data.
		</p>
	<cfelse>
		
	</cfif>
</cfif>
</cffunction>
</cfcomponent>