<html>
	
	<table width="70%" border="0" cellspacing="0" cellpadding="0">
		<title>
			Activation Errors
		</title>
		
												
		<tr>
			<th>ID</th>
			<th>date</th>
			<th>store</th>
			<th>money missing</th>
			<th>invoice#</th>
			<th>app#</th>
			<th>mtn#</th>
			<th>name on invoice</th>
			<th>name on app</th>
			<th>comments</th>
			<th>Fixed</th>
			<th>Unfixable</th>
			
		</tr>
		<tr> 
			<td>New Error</td>
			<td><input style="width: 100px;" ng-model="errorObj.date"> </td>
			<td><input style="width: 100px;" ng-model="errorObj.store"> </td>
			<td><input style="width: 80px;" ng-model="errorObj.money"> </td>
			<td><input style="width: 150px;" ng-model="errorObj.invoice"> </td>
			<td><input style="width: 150px;" ng-model="errorObj.app"> </td>
			<td><input style="width: 120px;" ng-model="errorObj.mtn"> </td>
			<td><input style="width: 100px;" ng-model="errorObj.nameone"> </td>
			<td><input style="width: 100px;" ng-model="errorObj.nametwo"> </td>
			<td><input ng-model="errorObj.comments"> </td>
			<td></td>
			<td></td>
			<td><button ng-click="addError()">Add</button> </td>
			
		</tr>
		<tr ng-repeat="items in errorList">
			<td>{{items.id}}</td>
			<td>{{items.date}}</td>
			<td>{{items.storename}}</td>
			<td>{{items.moneylost}}</td>
			<td>{{items.invoicenumber}}</td>
			<td>{{items.applicationnumber}}</td>
			<td>{{items.mtnnumber}}</td>
			<td>{{items.employeename}}</td>
			<td>{{items.employeeresponsible}}</td>
			<td>{{items.comment}}</td>
			<td><input type="checkbox" ng-checked="items.isfixed" ng-model="items.isfixed" ng-change="setfixed(items)"></td>
			<td><input type="checkbox" ng-checked="items.cantbefixed" ng-model="items.cantbefixed" ng-change="setunfixed(items)"></td>
			<td><button ng-if="thisGuy.accesslevel < 2" ng-click="deleteerror(items)">Delete</button></td>
			
		</tr>
		
	</table>
	
	
	
	
</html>