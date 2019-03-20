<html>
	  <script>
  $( function() {
    $( "#datepickerstart" ).datepicker();
  } );
  $( function() {
	    $( "#datepickerend" ).datepicker();
	  } );
	 
		 
   </script>
   
   
   
   
   
	<div style=" padding-left:100px; padding-top:100px;">
	
	
	<table>
		<tr>
		<th></th>
		<th>Date</th>
		<th>Employee</th>
		<th>Issue</th>
		<th>Store</th>
		<th>Comments</th>
		<th>Add/Remove</th>
		</tr>
<tr>
			<td>
				New Operational Error
			</td>
			<td>
		<input   id="datepickerstart" >
		</td>
		
		
		<td>	
				<select ng-model="vari.selectedUserForNew" ng-selected="">
					<option ng-repeat="types in theseusers" value="{{types.userid}}" >{{types.name}}</option>
				</select>	
	</td>
	<td>
				<select ng-model="vari.selectedTypeForNew" ng-selected="">
					<option ng-repeat="types in opTypes" value="{{types.name}}" >{{types.name}}</option>
				</select>
	</td>
	
	<td>
	<select ng-model="vari.selectedStoreForNew" ng-selected="">
					<option ng-repeat="types in storeslist" value="{{types.storeid}}" >{{types.storeid}}</option>
				</select>
	</td>
	<td>	
				<input type="text" ng-model="vari.commentForNew"  style=" display: inline; height: 200px; width: 300px;">
	</td>
				
				
	<td>
					<button ng-click="addOpLog()"> Add </button>
	</td>
</tr>		
<tr ng-repeat = "items in opLogs">
	<td></td>
	<td>
		{{items.eventdate}}
	</td>
	<td>
		{{items.employeename}}
	</td>
	<td>
		{{items.problemtype}}
	</td>
	<td>
		{{items.storename}}
	</td>
	<td>
		{{items.comment}}
	</td>
	
	<td>
		<button ng-click="changeStatus('hide', items.id)">Hide</button>
	</td>
	<td>
		<button ng-click="changeStatus('delete', items.id)">Delete</button>
	</td>
</tr>


	</div>
	
	<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 
  

</head>
<body>
 

<!---<p>End Date: <input type="text" id="datepickerend" onchange="checkDates()"></p>--->
 
</body>
</html>