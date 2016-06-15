<cfcomponent>
	
    


    <!--- Set up the application. --->
    <cfset THIS.Name = "greenChili" />
    <cfset THIS.ApplicationTimeout = CreateTimeSpan( 0, 0, 15, 0 ) />
    <cfset THIS.SessionManagement = true />
    <cfset THIS.SetClientCookies = true />
    <cfset this.ormenabled = "true"> 
    <cfset this.ormsettings={datasource="greenchili", logsql="false",dbcreate="update"}>
	
</cfcomponent>