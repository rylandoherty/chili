<cfcomponent>
	<!---Setup Socket Channels--->
    <cfscript>
    	this.name = "WebSocket";
		this.wschannels = [{name="uploads"},{name="chat"},{name="debugging"}];
		function onApplicationStart(){
		return true;
    }
	</cfscript>


    <!--- Set up the application. --->
    <cfset THIS.Name = "TwoGuysExploring" />
    <cfset THIS.ApplicationTimeout = CreateTimeSpan( 0, 0, 15, 0 ) />
    <cfset THIS.SessionManagement = true />
    <cfset THIS.SetClientCookies = true />
    <cfset this.ormenabled = "true">
    <cfset this.ormsettings={datasource="drone", logsql="false",dbcreate="update"}>
<cfsetting showDebugOutput="no" />

</cfcomponent>