<!--- Read spreadsheet --->
<cfdirectory action="list" directory="#expandPath("./")#" recurse="false" name="myList">
<cfdump var="#myList#">
<cfspreadsheet action="read"
src="Sales.xls"
query="myQuery">

<cfdump var="#myQuery#">