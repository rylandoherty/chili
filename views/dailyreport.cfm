<html>
	<style>
		td {
    border: 1px solid black;
    height:1vh;
     text-align: center;
}
table{
	
	
	border: 1px solid black;
}
th{
	height:5vh;
	border: 1px solid black;
}

h1 {
    text-decoration: underline overline dotted red;
}
	</style>
	
	
	<select ng-model="vars.selectedStore" ng-options="store.storeid as store.storeid for store in result.STORES">
	
	</select>
	<input ng-if="thisGuy.accesslevel<3" ng-model="vars.dateone" > </input><button ng-if="thisGuy.accesslevel<3" ng-click="loadDate(vars.dateone)">Reload</button> <button ng-click="setTotalsZero()"> zero out</button>
	<h1 style=" text-height: 40;" ng-if="vars.selectedStore=='' ">PLEASE SELECT A STORE</h1>
	
	
	<table >
		<tr ng-if="thisGuy.accesslevel<2" style="  font-size:30; font-weight:30;">
			<td></td>
			<td></td>
			<td>Totals </td>
			<td>{{vars.total.DAILY | number :2 }}</td>
			<td>{{vars.total.DAILYDATASCAPE | number :2}} </td>
			<td></td>
			<td>{{vars.total.PAYOUTS | number : 2}}</td>
			<td>{{vars.total.DEPOSITS | number : 2}} </td>
			<td></td>
			<td>{{vars.total.CASHEXPECTED | number : 2}}</td>
			<td>{{vars.total.DATASCAPE | number : 2 }}</td>
			<td> </td>
			<td> </td>
			<td>{{vars.total.CASHSALES | number : 2 }}</td>
			<td>{{vars.total.CASHREFUNDS | number : 2}} </td>
			<td>{{vars.total.BILLPAY | number : 2}} </td>
			<td>{{vars.total.BILLPAYCARD | number : 2}} </td>
			<td>{{vars.total.DATASCAPEDIFFERENCE | number : 2}} </td>
			<td>{{vars.total.DATASCAPETOTAL | number : 2}} </td>
			
		
		
		</tr>
		<tr style="height:40px">
			<th ng-if="thisGuy.accesslevel<2">+</th>
			<th ng-if="thisGuy.accesslevel<2">Lock</th>
		<th> Date </th>
		<th> Cash </th>
		<th> DATASCAPE<br/> ACTIVITY</th>
		<th> USER</th>
		<th> Payouts </th>
		<th> Deposited </th>
		
		<th style=" min-width:50px"> </th>
		
		<th ng-if="thisGuy.accesslevel<2"> TOTAL<br> CASH </th>
		<th ng-if="thisGuy.accesslevel<2"> TOTAL<br> DATASCAPE </th>
		<th  style=" min-width:50px"> </th>
		
		<th ng-if="thisGuy.accesslevel<2" > CASHIN </th>
		<th ng-if="thisGuy.accesslevel<2"> CASH<br> SALES</th>
		<th ng-if="thisGuy.accesslevel<2"> REFUND<br>CASH </th>
		
		<th ng-if="thisGuy.accesslevel<2"> BILLPAY </th>
		<th ng-if="thisGuy.accesslevel<2"> BILLPAY<br> CARD  </th>
		<th ng-if="thisGuy.accesslevel<2"> DATASCAPE<br>DIFFERENCE </th>
		<th ng-if="thisGuy.accesslevel<2"> DATASCAPE<br>TOTAL </th>
		<th  style=" min-width:50px"> </th>
		
		
		<th ng-if="thisGuy.accesslevel<2"> CHECK </th>
		<th ng-if="thisGuy.accesslevel<2"> VIRTUALTERM </th>
		<th ng-if="thisGuy.accesslevel<2"> REFUNDCARD </th>
		<th>COMMENTS</th>
		
		<!---
		<th> REFUNDCARD </th>
		<th> REFUNDOTHER </th>
		<th> REBATES </th>
		<th> VIRTUALTERMINAL </th>--->
		
		
		
		</tr>
		
			
			
		
		
		<tr ng-repeat = "rez in result.STORELIST[vars.selectedStore].CONTAINER" ng-if="rez.DATE>=result.FTWOWEEKS &&rez.DATE<= result.TODAY">
			<td ng-if="thisGuy.accesslevel<2"><input type="checkbox" ng-init="rez.checked=false" ng-model="rez.checked" ng-change="setTotals(rez)"> </input> </td>
			<td ng-if="thisGuy.accesslevel<2"><input type="checkbox" ng-model="rez.LOCKED" ng-change="lockDay('LOCKED', rez)"> </input> </td>
			<td>{{rez.DATE }} </td>
			<td><input ng-if="!rez.LOCKED" type="number" style=" max-width:100px" size="6" ng-model="rez.DAILY.Total" ng-change="newUserInput('DAILY', rez)"></input> <span ng-if="rez.LOCKED">{{rez.DAILY.Total}}</span> </td>
			<td><input ng-if="!rez.LOCKED" type="number" style=" max-width:100px" size="6" ng-model="rez.DAILYDATASCAPE.Total" ng-change="newUserInput('DAILYDATASCAPE', rez)"></input> <span ng-if="rez.LOCKED">{{rez.DAILYDATASCAPE.Total}}</span>  </td>
			<td>{{rez.USER.Name}}</td>
			<td  ng-click="runt(rez,'PAYOUTS')">{{rez.PAYOUTS.Total|number:2}} </td>
			<td  ng-click="runt(rez,'DEPOSITS')">{{rez.DEPOSITS.Total|number:2}} </td>
			<td style=" min-width:50px"> </td>
			
			<td ng-if="thisGuy.accesslevel<2">{{rez.BILLPAY.Total+rez.CASH.Total+rez.REFUNDCASH.Total+rez.PAYOUTS.Total|number:2}} </td>
			<td ng-if="thisGuy.accesslevel<2">{{rez.BILLPAY.Total+rez.NONCOMM.Total|number:2}} </td>
			<td style=" min-width:50px"> </td>
			<td ng-if="thisGuy.accesslevel<2" ng-click="runt(rez,'CASHIN')">{{rez.CASHIN.Total|number:2}} </td>
			<td ng-if="thisGuy.accesslevel<2" ng-click="runt(rez,'CASH')">{{rez.CASH.Total|number:2}} </td>
			<td ng-if="thisGuy.accesslevel<2" ng-click="runt(rez,'REFUNDCASH')">{{rez.REFUNDCASH.Total|number:2}} </td>
		
			<td ng-if="thisGuy.accesslevel<2" ng-click="runt(rez,'BILLPAY')">{{rez.BILLPAY.Total|number:2}} </td>
			<td ng-if="thisGuy.accesslevel<2" ng-click="runt(rez,'NONCOMM')">{{rez.NONCOMM.Total|number:2}} </td>
			
			<td ng-if="thisGuy.accesslevel<2" ng-click="runt(rez,'DATASCAPE')">{{rez.DATASCAPE.Total - (rez.BILLPAY.Total+rez.NONCOMM.Total) |number:2}} </td>
			<td ng-if="thisGuy.accesslevel<2" ng-click="runt(rez,'DATASCAPE')">{{rez.DATASCAPE.Total |number:2}} </td>
			<td style=" min-width:50px"> </td>
			<td ng-if="thisGuy.accesslevel<2" ng-click="runt(rez,'CHECK')">{{rez.CHECK.Total }} </td>
			<td ng-if="thisGuy.accesslevel<2" ng-click="runt(rez,'VIRTUALTERMINAL')">{{rez.VIRTUALTERMINAL.Total|number:2}} </td>
			<td ng-if="thisGuy.accesslevel<2" ng-click="runt(rez,'REFUNDCARD')">{{rez.REFUNDCARD.Total|number:2}} </td>
			<td><input type=" text" size="40" ng-model="rez.COMMENTS" ng-blur=" newUserInput('COMMENTS', rez)"></input> </td>
			<!---
			<td>{{rez.REFUNDCARD.Total|number:2}} </td>
			<td>{{rez.REFUNDOTHER.Total|number:2}} </td>
			<td>{{rez.REBATES.Total|number:2}} </td>
			<td>{{rez.VIRTUALTERMINAL.Total|number:2}} </td>
			<td>{{rez.NONCOMM.Total|number:2}} </td>
			<td>{{rez.NONCOMM.Total + rez.BILLPAY.Total |number:2}} </td>
			--->
		</tr>
	</table>
	<div style=" font-size:25;">
	{{vars.selectedColumn}}
	{{vars.selectedRow.DATE}}
	</div>
	<div  style=" min-height:800px; border: solid">
	<div style="display: inline-block; float: left;" >
	<table >
		<tr>
			<th>
			TITLE
			</th>
			<th>
			DATE
			</th>
			<th>
			RELATED
			</th>
			<th>
			USER
			</th>
			<th>
			COMMENT/OTHER
			</th>
			<th>
			QTY
			</th>
		</tr>
			
			<tr ng-repeat="inv in result.STORELIST[vars.selectedStore].CONTAINER[vars.selectedRow.DATE][vars.selectedColumn]['invoices']" ng-click="setInvoice(inv.TITLE)">
				<td>{{inv.TITLE}}</td>
				<td>{{inv.DATE}}</td>
				<td>{{inv.RELATED}}</td>
				<td>{{inv.USER}}</td>
				<td>{{inv.OTHERUSER}}</td>
				<td>{{inv.QTY}}</td>
				
			</tr>
			
			<tr ng-if="vars.selectedColumn == 'PAYOUTS' ">
				<td></td>
			<td >{{vars.selectedRow.DATE}}</td>
			<td></td>
			<td >{{thisGuy.username}}</td>
			<td ><input ng-model="vars.commentToAdd"></td>
			<td ><input type="number" ng-model="vars.dollarInput" ></td>
			<td> <button ng-click="addPayout('PAYOUTS')">
				+
			</button></td>
			</tr>
			<tr ng-if="vars.selectedColumn == 'DEPOSITS' ">
			<td></td>
			<td >{{vars.selectedRow.DATE}}</td>
			<td></td>
			<td >{{thisGuy.userid}}</td>
			<td ><input ng-model="vars.commentToAdd"></td>
			<td ><input type="number" ng-model="vars.dollarInput" ></td>
			<td> <button ng-click="addPayout('DEPOSITS')">
				+
			</button></td>
			</tr>
		
	</table>
	</div>
	<div ng-if="thisGuy.accesslevel<2" style="display: inline-block">
	<table>
		<tr>
			<th>{{vars.selectedInvoice[0].invoicenumber}}</th>
			<th>GP</th>
			
		</tr>
		<tr ng-repeat="item in vars.selectedInvoice">
			<td>{{item.PRODUCTNAME}}</td>
			<td>{{item.GROSSPROFIT}}</td>
			
		</tr>
	</table>
	
	</div>
	</div>
	
</html>