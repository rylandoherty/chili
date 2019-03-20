<html>
	<style >
		#full_width_div {
    background-color:#5B8587;
    width:100%;
	}
	
	</style>

	<span >
	<ul>
	<li>
	<button ng-click="createGroup(addName,catType)">
		Add
	</button>
			<input name="addName" ng-model="addName"> </input>
	
	
	<form action="">
  <input type="radio" ng-model ="catType" value="SkuList"> SkuList<br>
  <input type="radio" ng-model="catType" value="CategoryList"> CategoryList<br>
  </form>
  <li class="right_part" style="list-style-type: circle" ng-repeat="groups in categories">
		{{groups.productgroupid}}
		<div>{{groups.type}}</div>
		<button ng-click="deleteGroup(groups.productgroupid)"> delete </button>
		
		<input type = "checkbox" ng-init="" ng-model="groups.groupIsSelected"  ng-change="setActiveGroup(groups)">Selected</input>
		
		
			<span ng-if="activeGroup.productgroupid == groups.productgroupid">
				<table style="width:45%">
					<tr>
						<th style="width:20%">
							Sku Name
						</th>
						<th style="width:20%">
							Product Sku
						</th>
						<th style="width:5%">
							Delete
						</th>
						
					</tr>
					<tr ng-repeat="skus in groups.items">
						<td>
							
							{{skus.name}}
							
						</td>
						<td>
							{{skus.productSKU}}
							
						</td>
						<td>
						<button ng-click="removeItem(skus.id)">
						X
						</button>
						</td>
						
					</tr>
					<tr>
						<td><input name="addproductname" ng-model="addproductname"> </input>
						</td>
						<td><input name="addproductsku" ng-model="addproductsku"> </input>
						</td>
						<td>
						
							<button ng-click="addSkuToGroup(addproductsku,addproductname)">
		Add sku
	</button>
			
						
						
						</td>
					</tr>
				</table>
						
				<!---<li ng-repeat="skus in groups.items">
					{{skus}}
					<button ng-click="removeItem(skus.id)">
						Remove
					</button>
					{{skus.name}}</br>{{skus.productSKU}}</br>
					{{skus.grossProfit}}</br>{{skus.cost}}</br>
				</li>--->
			</span>
	</li>
	<!---
	</li>
	<li  style="list-style-type: circle" ng-repeat="groups in categories">
		{{groups.categoryid}}
		<div>{{groups.type}}</div>
		<button ng-click="deleteGroup(groups.categoryid)"> delete </button>
		
		<input type = "checkbox" ng-init="groups.groupIsSelected=false" ng-model="groups.groupIsSelected"  ng-change="setActiveGroup(groups)">Selected</input>
		
		</li>
	</ul>
	
	
	
			<span class="right_part" >
				<table style="width:45%">
					<tr>
						<th style="width:20%">
							Sku Name
						</th>
						<th style="width:20%">
							Product Sku
						</th>
						<th style="width:5%">
							Delete
						</th>
					</tr>
					<tr ng-repeat="skus in activeGroup.items">
						<td>
							<input >
							{{skus.name}}
							</input>
						</td>
						<td>
							{{skus.productSKU}}
						</td>
						<td>
						<button ng-click="removeItem(skus.id)">
						X
						</button>
						</td>
						
					</tr>
					<tr>
						<td>
						<input >
						Add sku
						</input>>
						<input >
						Add sku
						</input>>
						</td>
					</tr>
				</table>
						</span>
	
		</span>--->
				<!---<li ng-repeat="skus in groups.items">
					{{skus}}
					<button ng-click="removeItem(skus.id)">
						Remove
					</button>
					{{skus.name}}</br>{{skus.productSKU}}</br>
					{{skus.grossProfit}}</br>{{skus.cost}}</br>
				</li>--->
		
	
	
	
		<!---
	<input name="filterCategory" ng-model="filterCategory">Filter Category</input>
	
	<div>{{groupType}}</div>
	<table style="float: right;">
		<tr>
			<td>
			Invoice
			</td>
			
		</tr>
		
		
	
		<tr ng-if="groupType=='CategoryList'" ng-repeat="sales in allSales">
			<td>
				{{sales.salesid}}
			</td>
			<td  ng-repeat="salesdetails in sales.saledetails" ng-init="salesdetails.categoryarray=getCategoryArray(salesdetails.CATEGORY);" ng-if="salesdetails.CATEGORY.includes(filterCategory)&&containsTheItem(salesdetails.CATEGORY)" style = "float:right;width:10%;">
			<div ng-repeat="subcat in salesdetails.categoryarray track by $index" >
			<button  ng-click="addCategoryToGroup(salesdetails,$index)">{{subcat}}</button>	
			</div>
			
			
		
		
			</td>
		
		
		</tr>
		
		
		
		
		
		<tr ng-if="groupType=='SkuList'" ng-repeat="sales in allSales">
			<td>
				{{sales.salesid}}
			</td>
			<td ng-repeat="salesdetails in sales.saledetails" ng-if="salesdetails.CATEGORY.includes(filterCategory)&&containsTheItem(salesdetails.PRODUCTSKU)" style = "float:right;width:10%;">
			{{salesdetails.PRODUCTNAME}}	
			{{salesdetails.PRODUCTSKU}}
			gp:{{salesdetails.GROSSPROFIT}}
			cost:{{salesdetails.TOTALCOST}}<br/>
			<button  ng-click="addSkuToGroup(salesdetails)"   >add this</button>
			
		
		
			</td>
		
		
		</tr>
		</table>--->

</html>