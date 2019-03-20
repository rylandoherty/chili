<html>
	<style>
	table {
    border-collapse: collapse;
}

td {
    border: 1px solid black;
    height:5vh;
     text-align: center;
}
table{
	
	
	border: 1px solid black;
}
th{
	
	border: 1px solid black;
}


	</style>
	<table>
		<tr>
			<th>Store</th>
			<th ng-repeat="vend in vars.VendorList">
				{{vend.vendorname}}
			</th>
			
		</tr>
		<tr ng-repeat="store in vars.StoreList">
			<td>{{store.storeid}}</td>
			<td ng-repeat="vend in vars.VendorList">
				<select  ng-model="vars.cont[store.storeid][vend.vendorname].status" ng-change="updateStatus(vars.cont[store.storeid][vend.vendorname].status)" > 
					<option value="Empty"> </option>
					<option value="Ready">Cart Ready</option>
					<option value="Reviewed">Cart Reviewed</option>
					<option value="Complete">Order Placed</option>
					
				</select></td>
		</tr>
	</table>
	
	
	
</html>