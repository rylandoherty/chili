<cfcomponent>
<cfscript>



remote any function getVendor(){
	var vendList = entityLoad("accvendor");
	return vendList;
}
remote any function getStatusList(){
	var vendList = entityLoad("accstatus");
	return vendList;
}
remote any function updateStatusList(accObj){
	var ptar = ormExecuteQuery( "FROM accstatus where date like "&thisObj.date&" and store like '"&thisObj.store&"' and type like'"&thisObj.type&"'" );
	
	return vendList;
}

</cfscript>


</cfcomponent>