<cfcomponent>
	
    


    <!--- Set up the application. --->
    <cfset THIS.Name = "greenChili" />
    <cfset THIS.ApplicationTimeout = CreateTimeSpan( 0, 0, 1, 0 ) />
    <cfset THIS.SessionManagement = true />
    <cfset THIS.SetClientCookies = false />
    <cfset this.ormenabled = "true"> 
    <cfset this.ormsettings={datasource="greenchili", logsql="true",dbcreate="update"}>
	
</cfcomponent>