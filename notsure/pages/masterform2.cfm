
<cfset showForm = true>


<cfset dest = getTempDirectory()>

<cffile action="upload" destination="#dest#\" filefield="file" result="masterfile"
        nameconflict="makeunique">
       
      <cfspreadsheet action="read" src="#dest#\#masterfile.serverFileName#.xls" query="masterData" headerrow="3">

        <cfset something = "read">
        <!---<cfset wsPublish("uploads","thats cool its loading")/>--->

        
       <cfscript>
		
		 if(masterfile.serverFile CONTAINS "Sales By Invoice"){
			application.uploadCount = 0;
			//wsPublish("uploads",application.uploadCount);
			 logic = createObject("component", "logic");
				numberStruct = logic.organizeSales(masterData , masterFile.serverFile);

		}
		else if(masterfile.serverFile CONTAINS "Punch Clock"){
				application.uploadCount = 0;
				//wsPublish("uploads",application.uploadCount);
			 	logic = createObject("component", "logic");
				numberStruct = logic.setclockinclockout(masterData , masterFile.serverFile);

		}
		else if(masterfile.serverFile CONTAINS "Schedule"){
				application.uploadCount = 0;
				//wsPublish("uploads",application.uploadCount);
			 	logic = createObject("component", "logic");
				numberStruct = logic.setSchedule(masterData , masterFile.serverFile);

		}
		else if(masterfile.serverFile CONTAINS "Punch Clock"){
			application.uploadCount = 0;
			//wsPublish("uploads",application.uploadCount);
			 logic = createObject("component", "logic");
				numberStruct = logic.setHoursClocked(masterData , masterFile.serverFile);

		}
		else if(masterfile.serverFile CONTAINS "Employee Payroll Report"){
			application.uploadCount = 0;
			//wsPublish("uploads",application.uploadCount);
			logic = createObject("component", "logic");
			numberStruct =  logic.setHours(masterData , masterFile.serverFile);
			
		}
		else if(masterfile.serverFile CONTAINS "Product Detail"){
			application.uploadCount = 0;
			//wsPublish("uploads",application.uploadCount);
			 logic = createObject("component", "logic");
			numberStruct = logic.setPDR(masterData , masterFile.serverFile);
			
		}
		else if(masterfile.serverFile CONTAINS "RMA History Report"){
			logic = createObject("component", "logic");
			numberStruct =  logic.setRMAHistory(masterData , masterFile.serverFile);
		}
		else if(masterfile.serverFile CONTAINS "Transfer History"){
				 logic = createObject("component", "logic");
				 writeOutput("start");
				numberStruct =  logic.setTransfer(masterData , masterFile.serverFile);
				writeOutput("done");
		}
		if(masterfile.serverFile CONTAINS "Receiving Invoices History Report"){
				 logic = createObject("component", "logic");
				numberStruct =  logic.setReceived(masterData , masterFile.serverFile);
		}
		if(masterfile.serverFile CONTAINS "Payment Type Audit Report"){
				 
		}
		if(masterfile.serverFile CONTAINS "PDR"){
				 
		}
		
	
	</cfscript>