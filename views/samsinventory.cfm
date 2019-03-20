<html>
<style >
	
	table {
 
		  border: 1px solid #000;
		}

th, td {
 
  text-align: left; 
  vertical-align: top; 
  border: 1px solid #000;
}
</style>

		<script type="text/javascript">

	$( function() {
    $( ".date-picki" ).datepicker({
    	dateFormat: 'yymmdd'
    });
  } );
        	$( function() {
    $( ".date-pickir" ).datepicker({
    	dateFormat: 'yymmdd'
    });
  } );
       

</script>

<body>	
	<div style="display: inline-block; border-style: solid">
	Add <input type="radio" name="pageSelect" ng-model="stuff.pageSelect" value="Add">
	PhobioAdd <input type="radio" name="pageSelect" ng-model="stuff.pageSelect" value="PhobioAdd">
	<br/>
	<!---List <input type="radio" name="pageSelect" ng-model="stuff.pageSelect" value="List">--->
	Sell <input type="radio" name="pageSelect" ng-model="stuff.pageSelect" value="Sell">
	Invoices <input type="radio" name="pageSelect" ng-model="stuff.pageSelect" value="Invoices">
	<br/>
	Refund <input type="radio" name="pageSelect" ng-model="stuff.pageSelect" value="Refund">
	</div>
	<div style="display: inline-block; padding-left: 100px; border-style: solid">
	Phobio Discrep <input type="radio" name="pageSelect" ng-model="stuff.pageSelect" value="PhobioDiscrep">
	<br/>
	ItemHistory <input type="radio" name="pageSelect" ng-model="stuff.pageSelect" value="PDR">
	<br/>
	Phobio Lookup <input type="radio" name="pageSelect" ng-model="stuff.pageSelect" value="PhobioLookup">
	</div>
	<div style="display: inline-block; padding-left:100px; border-style: solid">
	Customer <input type="radio" name="pageSelect" ng-model="stuff.pageSelect" value="Customer">
	<br/>
	ControlSku <input type="radio" name="pageSelect" ng-model="stuff.pageSelect" value="ControlSku">
	<br/>
	PhobioSellPrice <input type="radio" name="pageSelect" ng-model="stuff.pageSelect" value="PhobioSellPrice">
	</div>
	<div style="display: inline-block; padding-left:100px; border-style: solid">
	Phobio Reconcile <input type="radio" name="pageSelect" ng-model="stuff.pageSelect" value="Reconcile">
	<br/>
	<button ng-click="reload()">reload all</button>
	</div>
	<br/>
	{{stuff.pageSelect}}
	
	
	<label ng-hide="stuff.pageSelect != 'Reconcile'" for="to">From</label><input type="text" id="date-picki" name="date-picki" class="date-picki" ng-hide="stuff.pageSelect != 'Reconcile'">
	<label ng-hide="stuff.pageSelect != 'Reconcile'" for="to">to</label><input type="text" id="date-pickir" name="date-pickir" class="date-pickir" ng-hide="stuff.pageSelect != 'Reconcile'">
	
<!---	Model : <input ng-model="stuff.inputFilter">
	<select ng-model="stuff.selectedPhone" >
		<option ng-repeat="phone in phoneList | filter: {name : stuff.inputFilter, hidefromsam : !true}" value="phone.productcatalogid" >{{phone.name}}</option>
	</select>--->
	<span id="myform" ng-if="stuff.pageSelect == 'Reconcile'">
		
	
		{{stuff.selectedDayRecon}} Date Range 
		<div>
			
	
<!---<label for="to">to</label>
<input type="text" id="to" name="to" class="date-pick">---> 
	
</div>
	<button ng-click="recont()">Apply</button>  Show balanced <input type="checkbox" ng-model="stuff.showBalanced" >
		<div>
			<div style=" display: inline-block">
		<table>
			<tr>
				<th>Day</th>
				<th style=" padding-left:20px">Phob</th>
				<th style=" padding-left:20px">RQ</th>
			</tr>
			<tr ng-repeat="dem in tradeincredit" ng-click="stuff.selectedDayRecon = dem.date" ng-hide="((!stuff.showBalanced)&&(dem.totalphobio-dem.totalptar == 0))">
				<td>{{dem.date}}</td>
				<td>{{dem.totalphobio | number:2}}</td>
				<td>{{dem.totalptar | number : 2}}</td>
			</tr>
		</table>
			</div>
			
			<div style=" display: inline-block; vertical-align: top">
				{{stuff.selectedEmpRecon}}
				<table>
			<tr>
				<th>Emplo</th>
				<th style=" padding-left:20px">Phob</th>
				<th style=" padding-left:20px">RQ</th>
			</tr>
			<tr ng-repeat="dem in tradeincredit[stuff.selectedDayRecon]['emp']" ng-click="stuff.selectedEmpRecon = dem.name" ng-hide="((!stuff.showBalanced)&&(dem.totalphobio-dem.totalptar == 0))">
				<td>{{dem.name}}</td>
				<td>{{dem.totalphobio | number:2}}</td>
				<td>{{dem.totalptar | number : 2}}</td>
			</tr>
		</table>
		
			</div>
			
			
			<div style=" display: inline-block; vertical-align: top">
				Phobio
				<table>
			<tr>
				<th>TradeNum</th>
				<th style=" padding-left:20px">$$</th>
				
			</tr>
			<tr ng-repeat="dem in tradeincredit[stuff.selectedDayRecon]['emp'][stuff.selectedEmpRecon]['phobio']" >
				<td>{{dem.tradenum}}</td>
				<td>{{dem.quotedcustomeramountcents | number:2}}</td>
				
			</tr>
		</table>
		
			</div>
			
			<div style=" display: inline-block; vertical-align: top">
				RQ
				<table>
			<tr>
				<th>Invoice</th>
				<th style=" padding-left:20px">$$</th>
				
			</tr>
			<tr ng-repeat="dem in tradeincredit[stuff.selectedDayRecon]['emp'][stuff.selectedEmpRecon]['ptar']" >
				<td>{{dem.INVOICE}}</td>
				<td>{{dem.TRADEIN | number:2}}</td>
				
			</tr>
		</table>
		
			</div>
			</div>
	</span>
	
	<div ng-if="stuff.pageSelect == 'PhobioDiscrep'">
		<div>
			<table>
				<tr>
					<th>Created</th>
					<th>trade#</th>
					<th>Reported Condition</th>
					<th>Quoted Value</th>
					<th>Emp Name</th>
					<th>Actual Condition</th>
					<th>Original Value</th>
					<th>Adjusted Value</th>
					<th>Difference</th>
				</tr>
				<tr ng-repeat="phobs in phobioDiscrep">
					<td>{{phobs.created}}</td>
					<td>{{phobs.tradenum}}</td>
					<td>{{phobs.reportedcondition}}</td>
					<td>{{phobs.quotedamountcents}}</td>
					<td>{{phobs.firstname}} {{phobs.lastname}}</td>
					<td>{{phobs.samcondition}}</td>
					<td>{{phobs.inspectedamountcents}}</td>
					<td>{{phobs.samvalue}}</td>
					<td>{{phobs.quotedcustomeramountcents - (phobs.samvalue)}}</td>
					<td>{{phobs.samcomment}}</td>
					
					
				</tr>
			</table>
		</div>
	</div>
	<div ng-if="stuff.pageSelect == 'PhobioLookup'">
		<div>
			<div>
			<table>
				<tr>
					<th>Created</th>
					<th>trade#</th>
					<th>IMEI</th>
					<th>Status</th>
					<th>companylocation</th>
					<th>Model</th>
					<th>Cost</th>
					<th>reportedcondition</th>
					<th>Active?</th>
				</tr>
				<tr>
					<td><input ng-model="stuff.phobio.createdfilter"></td>
					<td><input ng-model="stuff.phobio.tradenumfilter"></td>
					<td><input ng-model="stuff.phobio.imeifilter"></td>
					<td><input ng-model="stuff.phobio.statusfilter"></td>
					<td><input ng-model="stuff.phobio.storefilter"></td>
					<td><input ng-model="stuff.phobio.modelfilter"></td>
					<td><input ng-model="stuff.phobio.costfilter"></td>
					<td><input ng-model="stuff.phobio.conditionfilter"></td>
					<td><input ng-model="stuff.phobio.activefilter"></td>
				</tr>
				<tr ng-repeat="phob in phobioList
					| filter: {created : stuff.phobio.createdfilter}  
					| filter: {tradenum : stuff.phobio.tradenumfilter} 
					| filter: {imei: stuff.phobio.imeifilter} 
					| filter: {status: stuff.phobio.statusfilter}
					| filter: {companylocation: stuff.phobio.storefilter}
					| filter: {model: stuff.phobio.modelfilter}
					| filter: {quotedamountcents: stuff.phobio.costfilter}
					| filter: {reportedcondition: stuff.phobio.conditionfilter}
					| filter: {isactive: stuff.phobio.activefilter}
					">
					<td>{{phob.created}}</td>
					<td>{{phob.tradenum}}</td>
					<td>{{phob.imei}}</td>
					<td>{{phob.status}}</td>
					<td>{{phob.companylocation}}</td>
					<td>{{phob.model}}</td>
					<td>{{phob.quotedcustomeramountcents}}</td>
					<td>{{phob.reportedcondition}}</td>
					<td>{{phob.isactive}}</td>
				</tr>
			</table>
			</div>
		</div>
		
	</div>
	
	
	<div ng-if="stuff.pageSelect == 'PDR'">
		<div>
			<div>
			<table>
				<tr>
					<th>TRXID</th>
					<th>IMEI</th>
					<th>Customer</th>
					<th>Sold For</th>
					<th>PhobioModel</th>
					<th>Model</th>
					<th>Type</th>
					<th>Date</th>
					<th>Invoice</th>
				</tr>
				<tr>
					<td><input ng-model="stuff.lookup.idfilter"></td>
					<td><input ng-model="stuff.lookup.imeifilter"></td>
					<td><input ng-model="stuff.lookup.custfilter"></td>
					<td><input ng-model="stuff.lookup.soldforfilter"></td>
					<td><input ng-model="stuff.lookup.phobiomodelfilter"></td>
					<td><input ng-model="stuff.lookup.modelfilter"></td>
					<td><input ng-model="stuff.lookup.typefilter"></td>
					<td><input ng-model="stuff.lookup.datefilter"></td>
					<td><input ng-model="stuff.lookup.invoicenumberfilter"></td>
				</tr>
				<tr ng-repeat="trx in trxList
					| filter: {id : stuff.lookup.idfilter} 
					| filter: {imei: stuff.lookup.imeifilter} 
					| filter: {cust: stuff.lookup.custfilter}
					| filter: {soldfor: stuff.lookup.soldforfilter}
					| filter: {phobiomodel: stuff.lookup.phobiomodelfilter}
					| filter: {model: stuff.lookup.modelfilter}
					| filter: {type: stuff.lookup.typefilter}
					| filter: {date: stuff.lookup.datefilter}
					| filter: {invoicenumber: stuff.lookup.invoicenumberfilter}">
					<td>{{trx.id}}</td>
					<td>{{trx.imei}}</td>
					<td>{{trx.cust}}</td>
					<td>{{trx.soldfor}}</td>
					<td>{{trx.phobiomodel}}</td>
					<td>{{trx.model}}</td>
					<td>{{trx.type}}</td>
					<td>{{trx.date}}</td>
					<td>{{trx.invoicenumber}}</td>
				</tr>
			</table>
			</div>
		</div>
	</div>
	
	<div ng-if="stuff.pageSelect == 'Refund'">Inv #<input ng-model="stuff.invoiceLookup" ng-change="currentRefund = [];" ></div>
	<div ng-if="stuff.pageSelect == 'Refund'">
		
		<div ng-repeat="inv in invoiceList" ng-hide="inv.id != stuff.invoiceLookup">
			<div style="display: inline-block; border-style: dotted; ">
				<table >
					<tr>
						<th>Model</th>
						<th>SoldFor</th>
						<th>IMEI</th>
						<th></th>
					</tr>
					<tr ng-repeat="trx in inv.TRX">
						<td>{{trx.MODEL}}{{trx.PHOBIOMODEL}}</td>
						<td>{{trx.soldfor}}</td>
						<td>{{trx.IMEI}}</td>
						<td><button ng-if="trx.refunded != 1" ng-click="addToRefund(trx)" >Refund</button></td>
					</tr>
				</table>
			</div>
			<div style="display: inline-block; border-style: dotted; ">
				<table>
				<tr>
					<th>model</th>
					<th>cost</th>
					<th>Sold For</th>
				</tr>
				<tr ng-repeat = "items in currentRefund">
						<td>{{items.MODEL}}{{items.PHOBIOMODEL}}</td>
						<td align="center">{{items.soldfor}}</td>
						<td>{{items.IMEI}}</td>
						<td><button ng-click="removeFromRefund(items)">Remove</button></td>
					
				</tr>
			</table>
			</div>
			<div>finalize<input ng-model="stuff.finalizeInvoice"><button ng-hide="stuff.finalizeInvoice!='finalize' || inv.type == 'Refund' " ng-click="finalizeRefund()">Tinder</button></div>
		</div>
	</div>
	<div ng-if="stuff.pageSelect == 'Invoices'">
		
		<div>
			<div style="display: inline-block; border-style: dotted; float: left">
				<table>
					<tr>
						<th>Inv##</th>
						<th>Customer</th>
						<th>Date</th>
						<th>Sales</th>
						<th>Cost</th>
						<th>GP</th>
						<th>Type</th>
					</tr>	
					
					
					<tr>
						
						<td><input size="4" ng-model="stuff.lookup.invoicefilter"></td>
						<td><input size="8" ng-model="stuff.lookup.customerfilter"></td>
						<td><input size="8" ng-model="stuff.lookup.datefilter"></td>
						<td></td>
						<td></td>
						<td><input size="4" ng-model="stuff.lookup.typefilter"></td>
					</tr>
					<tr ng-repeat="inv in invoiceList | filter: {id : stuff.lookup.invoicefilter} 
					| filter: {CUST: stuff.lookup.customerfilter} 
					| filter: {date: stuff.lookup.datefilter}
					| filter: {type: stuff.lookup.typefilter}" 
						ng-click="stuff.selectedInvoice = inv">
						<td>{{inv.id}}</td>
						<td>{{inv.CUST}}</td>
						<td>{{inv.date}}</td>
						<td>{{getInvoiceTotal(inv.TRX) | number : 2}}</td>
						<td><span ng-if="inv.type=='Refund'">{{getInvoiceTotalCost(inv.TRX)*-1 | number: 2}}</span> <span ng-if="inv.type!='Refund'">{{getInvoiceTotalCost(inv.TRX) | number: 2}}</span></td>
						<td><span ng-if="inv.type=='Refund'">{{getInvoiceTotal(inv.TRX)-(getInvoiceTotalCost(inv.TRX)*-1) | number : 2}}</span> <span ng-if="inv.type!='Refund'">{{getInvoiceTotal(inv.TRX)-(getInvoiceTotalCost(inv.TRX)) | number : 2}}</span></td>
						
						<td>{{inv.type}}</td>
					</tr>
				</table>
			</div>
			<div style="display: inline-block; border-style: dotted; ">
				<table>
					<tr>
						<th>Model</th>
						<th>SoldFor</th>
						<th>Cost</th>
						<th>GP</th>
						<th>IMEI</th>
						<th>R</th>
					</tr>
					<tr ng-repeat="trx in stuff.selectedInvoice.TRX">
						<td>{{trx.MODEL}}{{trx.PHOBIOMODEL}}</td>
						<td>{{trx.soldfor | number : 2}}</td>
						<td>{{trx.COST | number : 2}}</td>
						<td>{{(trx.soldfor - trx.COST ) | number : 2}}</td>
						<td>{{trx.IMEI}}</td>
						<td>{{trx.refunded}}</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
	
	<div ng-if="stuff.pageSelect == 'Sell' " >
	<div style=" float:left; display: inline-block; border-style: dotted">
	<table >
		
			<tr>
				<th> Model </th>
				<th> Cost </th>
				<th> Price </th>
				<th> Default </th>
				<th> IMEI </th>
				<th></th>
				
			</tr>
			<tr>
				<td><input ng-model="stuff.phobio.modelfilter"></td>
				<td></td>
				<td></td>
				<td></td>
				<td><input ng-model="stuff.phobio.imeifilter"></td>
				<td></td>
			</tr>
			<tr ng-repeat="items in sellInventoryList 
			| filter: {phobiomodel: stuff.phobio.modelfilter} 
			| filter: {imei: stuff.phobio.imeifilter}
			">
				<td>{{items.model}}{{items.phobiomodel}}</td>
				<td align="center">{{items.cost}}</td>
				<td align="center">{{items.sellprice}}</td>
				<td align="center">{{items.suggested}}</td>
				<td>{{items.imei}}</td>
				<td><button ng-click="addToInvoice(items)">Sell</button></td>
			</tr>
		
	</table>
	</div>
	<div style=" padding-left:40px;  display: inline-block; border-style: dotted">
	
		<div style="display: inline-block;">
			
		<select ng-model="stuff.sellToCustomer" >
			<option ng-repeat="people in customerList" value="{{people.name}}" >
				{{people.name}}
			</option>
		</select>
		<div style="display: inline-block;"></div>
		</div>
	<table>
		<tr>
			<th></th>
			<th></th>
			<th>{{getTotalCost(currentInvoice)}}</th>
			<th></th>
			<th></th>
			<th>{{getTotalGP(currentInvoice)}}</th>
		</tr>
		<tr>
			<th>model</th>
			<th>cost</th>
			<th>sellfor</th>
			<th>suggested</th>
			<th>imei</th>
			<th>gp</th>
		</tr>
		<tr ng-repeat = "items in currentInvoice">
			<td>{{items.model}}{{items.phobiomodel}}</td>
				<td align="center">{{items.cost}}</td>
				<td align="center"><input type="number"  min="0" max="10000" ng-model="items.sellprice"></td>
				<td align="center">{{items.suggested}}</td>
				<td>{{items.imei}}</td>
				<td align="center">{{items.sellprice - items.cost | number : 2}}</td>
				<td><button ng-click="removeFromInvoice(items)">Remove</button></td>
			
		</tr>
	</table>
	<div>finalize<input ng-model="stuff.finalizeInvoice"><button ng-hide="stuff.finalizeInvoice!='finalize'" ng-click="finalizeInvoice()">Tinder</button></div>
	</div>
	</div>
	
	
	
	<br/>
	<div ng-if="stuff.pageSelect == 'PhobioAdd' ">
		<input type="checkbox" ng-model="stuff.phobio.hideFromAdd" ng-init="stuff.phobio.hideFromAdd = 'false'">
			{{stuff.phobio.hideFromAdd}}
		<table>
			<tr>
				<th>Date Added</th>
				<th>Invoice#</th>
				<th>Model</th>
				<th>Imei</th>
				<th>Condition</th>
				<th>Hide</th>
				<th>Inspected</th>
				<th>NewValue</th>
				<th>DmgValueDate</th>
				<th>Store</th>
				<th>Name</th>
				<th>Add</th>
				<th>Comment</th>
				
			</tr>
			<tr>
				<td><input ng-model="stuff.phobio.createdfilter"></td>
				<td><input ng-model="stuff.phobio.invnumfilter"></td>
				<td><input ng-model="stuff.phobio.modelfilter"></td>
				<td><input ng-model="stuff.phobio.imeifilter"></td>
				<td><input ng-model="stuff.phobio.reportedconditionfilter"></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td><input ng-model="stuff.phobio.storefilter"></td>
				<td><input ng-model="stuff.phobio.namefilter"></td>
				<td></td>
				<td></td>
				
			</tr>
			<tr ng-repeat="phobs in limitedPhobioList 
			| filter: {created : stuff.phobio.createdfilter}
			| filter: {invoicenum : stuff.phobio.invnumfilter}  
			| filter: {model: stuff.phobio.modelfilter} 
			| filter: {hidden: stuff.phobio.hideFromAdd}
			| filter: {imei: stuff.phobio.imeifilter}
			| filter: {reportedcondition : stuff.phobio.reportedconditionfilter}
			| filter: {companylocation: stuff.phobio.storefilter}
			| filter: {firstname: stuff.phobio.namefilter}
			">
				<td>{{phobs.created}}</td>
				<td>{{phobs.invoicenum}}</td>
				<td>{{phobs.model}}</td>
				<td>{{phobs.imei}}</td>
				<td>{{phobs.reportedcondition}}</td>
				<td><input type="checkbox" ng-model="phobs.hidden" ng-change="setHidden(phobs)"></td>
				<td><select ng-model="phobs.samcondition" ng-init="phobs.samcondition = phobs.reportedcondition" ng-change="phobs.samvalue = phobs.PHOBSKU.costdmg" >
					<option value="working">working</option>
					<option value="damaged">damaged</option>
					</select>
				</td>
				<td><input ng-model="phobs.samvalue" type="number" min="0" max="1000" ng-init="phobs.samvalue = phobs.quotedcustomeramountcents "></td>
				<td>{{phobs.PHOBSKU.costdmgdate | limitTo: 4: -4}}</td>
				<td>{{phobs.companylocation}}</td>
				<td>{{phobs.firstname}}{{phobs.lastname}}</td>
				<td><button ng-click="addPhobioPhone(phobs)">+</button></td>
				<td ><input ng-blur="addPhobioComment(phobs)" ng-model="phobs.samcomment"</td>
			</tr>
		</table>
		<table>
			
		</table>
	</div>
	
	<div ng-if="stuff.pageSelect == 'Add'">
		Filter Model : <input ng-model="stuff.inputFilter">
		<select ng-model="stuff.selectedPhone" >
		<option ng-repeat="phone in phoneList | filter: {name : stuff.inputFilter, hidefromsam : !true}" ng-value="phone.productcatalogid" >{{phone.name}}</option>
		</select><br/>
		Cost <input type="number" ng-model="stuff.phoneaddcost"  ><br/>
		Source <input type="text" ng-model="stuff.phoneaddsource" ><br/>
		IMEI <input type=" number" ng-model="stuff.phoneaddimei"  ><br/>  
		<button ng-click = "addPhone()">AddPhone</button>
		{{stuff.serverResponse}}
		<table>
			<tr>
				<th> Model </th>
				<th> Cost </th>
				<th> SellPrice </th>
				<th> IMEI </th>
				<th> Source </th>
				<th> TypeDelete </th>
				
			</tr>
			<tr ng-repeat="items in inventoryList">
				<td>{{items.model}}{{items.phobiomodel}}</td>
				<td>{{items.cost}}</td>
				<td><input ng-model="items.sellprice" ng-blur="updateSamInventorySellPrice(items.imei,items.sellprice)"></td>
				<td>{{items.imei}}</td>
				<td>{{items.source}}</td>
				<td > <input ng-model="items.deletetext"><button ng-hide="items.deletetext!='Delete'" ng-click="deleteInventoryPhone(items.imei)">Boom</button> </td>
			</tr>
		</table>
	</div>
	
	<div ng-if="stuff.pageSelect == 'Customer'">
		Name <input type="text" ng-model="stuff.addCustomerName" ><br/>
		<button ng-click="addCustomer(stuff.addCustomerName)">Add</button>
		
		<table>
			<tr><th>Name</th>
			
			<tr ng-repeat="customer in customerList"><td>{{customer.name}}</td>
			
			</tr>
		</table>  
	</div>
	
	
	<div ng-if="stuff.pageSelect == 'PhobioSellPrice'">
		
		<table>
			<tr>
				<th>Model</th>
				<th>Sell Price</th>
				<th>Damaged</th>
				<th>Cost</th>
				<th>Cost Dmg</th>
				<th>Profit</th>
				<th>Profit Dmg</th>
			</tr>
			<tr>
				<td><input ng-model="stuff.phobio.modelfilter"></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr ng-repeat="sku in phobioSkuList | orderBy : 'model' | filter: {model: stuff.phobio.modelfilter}">
				<td>{{sku.model}}</td>
				<td><input ng-model="sku.sellprice" ng-blur="updatePhobioSkuSellPrice(sku.model, sku.sellprice)"> </td>
				<td><input ng-model="sku.sellpricedmg" ng-blur="updatePhobioSkuSellPriceDmg(sku.model, sku.sellpricedmg)"> </td>
				<td><input ng-model="sku.cost" ng-blur="updatePhobioSkuCost(sku.model, sku.cost)" size="7"> {{sku.costdate | limitTo : 4 : -4}} </td>
				<td><input ng-model="sku.costdmg" ng-blur="updatePhobioSkuCostDmg(sku.model, sku.costdmg)" size="7"> {{sku.costdmgdate | limitTo : 4 : -4}} </td>
				<td>{{sku.sellprice - sku.cost | number : 2}} </td>
				<td>{{sku.sellpricedmg - sku.costdmg | number : 2}} </td>
			</tr>
			
			
		</table>
		
	</div>
	<div ng-if="stuff.pageSelect == 'ControlSku'">
		
		Regular <input type="radio" name="hidefromsam" ng-model="stuff.hidefromsam" ng-click="stuff.hidefromsam == 'null'">
		Hidden <input type="radio" name="hidefromsam" ng-model="stuff.hidefromsam" value="true">
		Shown <input type="radio" name="hidefromsam" ng-model="stuff.hidefromsam" value="false">
		<br/>
		Filter : <input ng-model="stuff.inputFilter">
		<table>
			<tr>
				<th>Name</th>
				<th>Hide</th>
				<th>debug</th>
			</tr>
			<tr ng-repeat="phone in phoneList | filter:{hidefromsam : stuff.hidefromsam, name : stuff.inputFilter}">
				<td> {{phone.name}}</td>
				<td> <input type="checkbox" ng-model="phone.hidefromsam" ng-change="hidefromsam(phone, phone.hidefromsam)"></td>
				<td> {{phone.hidefromsam}}</td>
			</tr>
		</table>
	</div>
	
		
	</body>
</html>
