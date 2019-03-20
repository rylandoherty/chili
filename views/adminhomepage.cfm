<html >
	<style>
		.myColor {
  			background-color : #ccc;  
		}
		tr.spaceUnder>td {
 		 padding-bottom: .1em;
		}
		td {
			border: solid
		}
	</style>
	
	
		<div style="float:left">

			<cfoutput>
				
				
				<div ng-if="thisGuy.accesslevel<=1"> Version: {{'#Session.version#'}} </div>
  	</cfoutput>
  	
  	<div >
  		<input type="checkbox" ng-model="vars.litemode">Light<br>
  			<button ng-click="vars.selectedUser='';vars.selectedStore='';vars.selectedStat='';">Clear Filters</button><br/>
  			<div>User : {{vars.selectedUser}}</div>
  			<div>Store : {{vars.selectedStore}}</div>
  			<div>Stat : {{vars.selectedStat}}</div>
  		<div style="min-width:25vw; max-width:25vw; min-height: 50vh; max-height: 50vh; overflow-y: scroll;">
  		<div ng-repeat="invoices in DDD | orderBy: '-DATE' | filter: {SOLDBY: vars.selectedUser, SOLDAT:vars.selectedStore}" ng-if="invoices['STATS'][vars.selectedStat].COUNT!=0||invoices['STATS'][vars.selectedStat]==''" style="  border: solid;  background-color:{{invoices.COLOR}} " ng-click="selectInvoice(invoices); admin.colorful = $index;" ng-class="{myColor: admin.colorful ==  $index}" >
  		
  		{{invoices.INVOICENUMBER}}  --- Sold On {{invoices.DATE.toString().substring(4,8)}} @ {{invoices.DATE.toString().substring(8,12)}} <br>
  		For {{invoices.GP | number:0}} GP<br>
  		<span style=" border: dashed" ng-click="vars.selectedUser = invoices.SOLDBY">Sold By {{invoices.SOLDBY}}</span><br/>
  		<span style=" border: dashed" ng-click="vars.selectedStore = invoices.SOLDAT">Sold At {{invoices.SOLDAT}}</span><br/>
  		 <span ng-repeat="stat in invoices.STATS" ng-if="stat.COUNT!=0" ng-click="vars.selectedStat = stat.NAME"><br/> {{stat.NAME}} {{stat.COUNT}}</span>
  		<ul ng-show="invoices.SHOW">
  			<li ng-repeat="prod in invoices.PRODUCTS"> {{prod.PRODUCTNAME}}</li>
  		</ul>
  		</div>
  		</div>
  		</div>
  		
  	</div>
  	<div style=" border: groove; position:fixed; left:25vw; min-width:70vw; max-width:70vw; min-height: 70vh; max-height: 70vh; overflow-y: scroll; background-color: #84c1c1 ">
  		<span>INVOICE ##:{{vars.selectedInvoice.INVOICENUMBER}}</span><br/>
  		<span>SOLD BY {{vars.selectedInvoice.SOLDBY}}</span><br/>
  		<span>SOLD TO {{vars.selectedInvoice.SOLDTO}}</span><br/>
  		
  		
  		<span ng-if="vars.selectedInvoice.PTAR[0].CASH!='0'"> CASH {{vars.selectedInvoice.PTAR[0].CASH}} </span>
  		<span ng-if="vars.selectedInvoice.PTAR[0].CARDS!='0'"> CARDS {{vars.selectedInvoice.PTAR[0].CARDS}} </span>
  		<span ng-if="vars.selectedInvoice.PTAR[0].VIRTUALTERMINAL!='0'"> VIRTUALTERMINAL {{vars.selectedInvoice.PTAR[0].VIRTUALTERMINAL}} </span>
  		
  		
  	
  	<table >
  		<tr>
  		<th >Name</th>
  		<th>GP</th>
  		<th>Cost</th>
  		<th>Soldfor</th>
  		<th>Refund</th>
  		<th>QTY</th>
  		</tr>
  		<tr  class="spaceUnder" ng-repeat = "prod in vars.selectedInvoice.PRODUCTS | orderBy: '-GROSSPROFIT' " ng-if=" (vars.litemode && (prod.TOTALCOST != 0 || prod.SOLDFOR != 0)) || (!vars.litemode) " >
  			
  			<td style="min-width:400px; max-width:400px; overflow: hidden;  ">{{prod.PRODUCTNAME}}</td>
  			<td style="min-width:100px; max-width:100px;">{{prod.GROSSPROFIT}}</td>
  			<td style="min-width:100px; max-width:100px;">{{prod.TOTALCOST}}</td>
  			<td style="min-width:100px; max-width:100px;">{{prod.SOLDFOR}}</td>
  			<td>{{prod.REFUND}}</td>
  			<td>{{prod.QTY}}</td>
  		</tr>
  	</table>
  	</div>

  </div>


	
</html>