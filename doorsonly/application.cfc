<cfcomponent>
	<!---Setup Socket Channels--->
    <cfscript>
		
		this.name = "WebSocket";
		this.wschannels = [{name="uploads"},{name="chat"},{name="debugging"}];
		
		function onApplicationStart(){
        application.uploadCount = 0;
        return true;
    }
 
    this.mappings["/entity"] = "C:\ColdFusion10\cfusion\wwwroot\chilipos\entity";
    ORMreload();
	</cfscript>


    <!--- Set up the application. --->
    
    <cfset THIS.Name = "doors" />
    <cfset THIS.ApplicationTimeout = CreateTimeSpan( 0, 0, 15, 0 ) />
    <cfset THIS.SessionManagement = true />
    <cfset THIS.SetClientCookies = true />
    <cfset this.ormenabled = "true"> 
    
    
    <cfset this.ormsettings={datasource="qretails", logsql="false",dbcreate="update"}>
    
	
</cfcomponent>