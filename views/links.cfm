<html>
	<style>
		a {
    		color: blue;
		}
		a:hover {
    		color: hotpink;
		}
		
	</style>
	<table width="70%" border="0" cellspacing="0" cellpadding="0">
		<title>
			Links
		</title>
		
												
		<tr>
			<th>Title</th>
			<th>Link</th>
			
			
		</tr>
		<tr> 
			<td><input style="width: 600px;" ng-model="linkObj.name"> </td>
			<td><input style="width: 200px;" ng-model="linkObj.link"> </td>
			<td><button ng-click="addLink(linkObj)">Add</button></td>
		</tr>
		<tr ng-repeat="items in linkList">
			<td><a ng-click="openLink(items.link)">{{items.name}}</td>
			<td>{{items.addedby}}</td>
			<td ng-if="thisGuy.accesslevel < 1"><button ng-click="deleteLink(items.id)">Delete</button></td>
			
			
			
		</tr>
		
	</table>
	
	
	
	
</html>