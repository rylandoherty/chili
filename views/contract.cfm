<html>
	<style >
		td{
		 border: solid;
		}
		.selected{
		 background-color: #ff800;
		}
	</style>
		
	</style>
	
	<body >
	<div  style=" float: left; border:solid; background-color:powderblue; min-width:90vw">
	
	<div style=" border: dashed;">
	<button  ng-repeat="store in stores" ng-click="vars.selectedStore=store.storeid;vars.selectedInvoice=0;vars.details={};">{{store.storeid}}</button>
	<br><br>
	
	<div id="csvmtn" style="display:none;">{{csv}}</div>
	<input ng-model="vars.monthInput1"></input>
			<input ng-model="vars.monthInput2"></input>
			<button ng-click="setMonth(vars.monthInput1, vars.monthInput2)">Reload</button> 
			<br/>
			<button ng-click="copyCSVMTN()">CopyCSVMTN</button> 
			<br/>
			Filters<br/>
			Checked = <input type="checkbox" ng-model="vars.selectedChecked" >
			Status = <select ng-model="vars.selectedStatus" ng-options="b for b in vars.statusdropdown" ></select>
			</div> 
			<br/>
			<br/>
	<div  style=" display: block; float: left;">
	<table >
		<tr  ng-repeat="item in list | filter:{invoicedby:vars.selectedStore, checked : vars.selectedChecked , status : vars.selectedStatus}">
			
			<td><div ng-click="setInvoice(item.invoice)">{{item.invoice}} --- @{{item.soldon}} <br/>Total Rebate : ${{item.invoicerebate}}
			 <br/>{{item.salesperson}}
			  <br/>{{item.customer}}</div>
			  <div>
			 
			  <span style=" border: dotted;" ng-if="!item.originalinvoice==''" ng-click="setInvoice(item.originalinvoice)">{{item.originalinvoice}} --- @{{item.originalsalesdate}}</span>
			<br/><input type="checkbox" ng-model="item.checked" ng-change="updateInv(item)"> 
			<br/><select ng-model="item.status" ng-options="b for b in vars.statusdropdown" ng-change="updateInv(item)" ></select>
			 <br/><input ng-model="item.comments"></input></div></td>
			
			
		</tr>
	</table>
	</div>
	<div   style="  display: inline; float: left;">
		{{vars.selectedInvoice}}<br/>
		<span ng-if="vars.PTAR[0].CASH!='0'"> CASH {{vars.PTAR[0].CASH}} </span>
  		<span ng-if="vars.PTAR[0].CARDS!='0'"> CARDS {{vars.PTAR[0].CARDS}} </span>
  		<span ng-if="vars.PTAR[0].VIRTUALTERMINAL!='0'"> VIRTUALTERMINAL {{vars.PTAR[0].VIRTUALTERMINAL}} </span>
		<table>
			<tr>
				<th>QTY</th>
				<th>Product</th>
				<th>MTN</th>
				<th>Contract ##</th>
				<th>IMEI</th>
				<th>Rebate</th>
				<th>RelatedItem</th>
				<th>Cost</th>
				<th>SoldFor</th>
			</tr>
			<tr ng-repeat="them in vars.details">
				<td>{{them.qty}}</td>
				<td style=" max-width:300px; overflow: hidden; white-space: nowrap; ">{{them.productname}}</td>
				<td>{{them.tracking}}</td>
				<td>{{them.contract}}</td>
				<td>{{them.relatedsn}}</td>
				<td>{{them.totalrebate}}</td>
				<td style=" max-width:300px; overflow: hidden; white-space: nowrap; ">{{them.relatedproduct}}</td>
				<td>{{them.relatedcost}}</td>
				<td>{{them.relatedprice}}</td>
				
				
				
			</tr>
			
		</table>
		
		
		<table ng-repeat=" thi in vars.mtns" ng-if="thi['stuff'].length" >
			
			<tr>
				<th>MTN</th>
				<th>STATUS</th>
				<th>DATE</th>
				<th>IMEI</th>
				<th>Installment##</th>
				<th>Finance</th>
				<th>Down</th>
				
			</tr>
			<tr ng-repeat="them in thi['stuff']" ng-if="them.status!=='N/A'">
				<td>{{them.mtn}}</td>
				<td>{{them.status}}</td>
				<td>{{them.date}}</td>
				<td>{{them.imei}}</td>
				<td>{{them.installment}}</td>
				<td>{{them.fin}}</td>
				<td>{{them.down}}</td>
				
				
			</tr>
			
		</table>
		
		
		{{$scope.vars.mtns}}
	</div>
	</div>
	</body></html>