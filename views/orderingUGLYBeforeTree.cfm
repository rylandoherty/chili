<html>
	<script type="text/javascript" src="stylesheet/HTML.JS" >
	</script>
	<link rel="stylesheet" type="text/css" href="stylesheet/orderstyle.txt">
	</link>
<style>    
    		
  .selectedStoreColumn{
  	background-color: #ffa;
  }  		
    		
    		html {
    height: 100%;
}

   .entirecontainer {
   	
   } 		
    		
   div.box {
 border:solid;
  height: inherit;
  width: 90vw;
}

div.div1 {
 
  float: left;
  height: auto ;
  width: auto;
}

div.div2 {
	float:left
  border:solid;
  height: auto;
}

div.clear {
  clear: both;
  height: 1px;
  overflow: hidden;
  font-size: 0pt;
  margin-top: -1px;
}
.orderreport {
  
  border-style: solid;
  border-width: 1px;
  /*border-radius: 8px;*/
  background-color: rgba(255,255,255,.60);
  border-color: #aaa;  
}
.orderreport .tooltiptext {
    visibility: hidden;
    width: 20%;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: fixed;
    top:36%;
    left:2%;
   
}

.orderreport:hover .tooltiptext {
    visibility: visible;
}

	table {
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid black;
}


    	</style>

<div class="TotalBox" >
	
<div class="LeftRegion"> 
		
		<div class = "MainOption" >
			<div ng-if="thisGuy.userid=='admin'">
    		<input type="checkbox"  ng-model="vars.isAdmin" ng-checked='vars.isAdmin'> IsAdmin
    		</div>
    		
			<select ng-model="selectedStore" style="position: absolute;left:20%; top:2%;" ng-change="changeStores()" >
			<option ng-repeat = "store in stores" ng-value="store.storeid" >{{store.storeid}} </option>
			
			</select>
			<div style="position: absolute;left:45%; top:2%; font-size:24;"> {{selectedStore}}</div>
			<button style="position: absolute;left:7%; bottom:15%;" ng-click="spring(0)">Clear</button>
			<button
	    	 	ng-repeat = "cats in result=(phonecatlist|filter: {'tier': (selectedCat.tier-1),'id':selectedCat.parent}:true)"
	    		 style = " width :  25% ; height=100px;"  ng-if="selectedCat.tier>0" ng-click = "spring(cats)" >Back to {{cats.title}} </button>
			<div style=" position: absolute;  min-width:2.5vw ; min-height:4vh; left:35%; bottom:15%;">
				
		
			<button style=" position: inline;  min-width:2.5vw ; min-height:4vh; left:40%; top:15%;" ng-click="vars.currentInventory='Accessory'; vars.currentAccessoryView='Other';spring(0);"> Accessories</button>
			<button style=" position: inline;  min-width:2.5vw ; min-height:4vh; left:40%; top:15%;" ng-click="vars.currentInventory='Phone'; vars.currentAccessoryView='Phone';spring(0); " > Phones </button>
			</div>
			<div style="position: absolute;left:80%; bottom:50%; font-size:10;"> </div>
			<div style="position: absolute;left:80%; top:8%; font-size:10;"> {{uploadFilename}}</div>
			<div style="position: absolute;left:80%; bottom:20%; font-size:10;">{{selectedCat.title}}</div>
		</div>
		
		
		
		
		
<div class = "Categories" style="overflow-y:scroll;" >
			
			
			

<div ng-if = " (vars.currentAccessoryView=='Phone' || vars.currentInventory=='Phone') && selectedCat.tier == 0 " style= " border: solid; display: inline-block; ">
    		
    		
	    	<div  class='orderreport' style=" border: solid; display: inline; float:left; width:80px"  ng-repeat = "cats in result=(phonecatlist|filter: {'tier':(1) ,'category' : 'Phone'})" ng-click = "spring(cats)" >
	    		
	    		<span class="tooltiptext"  >
				
				
				<div> {{storelist['stores'][selectedStore]['cats'][cats.id]['title']}}:{{storelist['stores'][selectedStore]['cats'][cats.id]['stock']| number:2}}</div> <br>
				
				<table style=" color:white">
					<tr>
					<th>Group</th>
					<th>In Stock</th>
					<th>Total Stock</th>
					<th>CostOfStock</th>
					</tr>
					<tr ng-repeat="child in storelist['stores'][selectedStore]['cats'][cats.id]['children']">
						<td>{{storelist['stores'][selectedStore]['cats'][child]['title']}}</td>
						<td>{{storelist['stores'][selectedStore]['cats'][child]['stock']}}</td>
						<td>{{storelist['Total']['cats'][child]['stock']}}</td>
						<td>{{storelist['stores'][selectedStore]['cats'][child]['costofstock']|number:0}}</td>
					</tr>
				
				
					</table>
					
					
			</span>
		    	{{cats.title}}<br>
		    	<div ng-if="vars.isAdmin">Tier {{cats.tier}} </div><br>
		    	<div ng-if="vars.isAdmin">Parentid {{cats.parent}}</div><br>
		    	<div ng-if="vars.isAdmin">isFinal {{cats.finaltier}}</div>
		    	<button ng-if="vars.isAdmin" ng-click="deleteCat(cats)" >Delete</button>
	    	</div>
    	
    	
	    	<span style= 'display: inline; float:left' ng-if="selectedCat.tier == 0" >
	    		Title<input ng-model="catToAdd.title"><br>
	    		Final Tier <input type="checkbox"  ng-model="catToAdd.finaltier" ng-init="catToAdd.finaltier='false'"><br>
	    		<button ng-click="addCat()" >Add</button>
	    		
	    	</span>
	    	
	    	
	    	
	    	
    	
    	
    	
    	
    	
    	
    	
   </div>
			
		<div ng-if="selectedCat.tier>0" style=" border: solid; display: " >
    	
    		<div class='orderreport' style=" border: solid; display: inline; float:left; min-width:20%; min-height:30%"  ng-repeat = "cats in phonecatlist | filter: {'parent':(selectedCat.id)}:true" ng-click = "spring(cats)" >
	    	<span class="tooltiptext">
				
				
				<div > {{storelist['stores'][selectedStore]['cats'][cats.id]['title']}} Stock: {{storelist['stores'][selectedStore]['cats'][cats.id]['stock']|number:0}}</div> <br>
				<div ng-if="storelist['stores'][selectedStore]['cats'][cats.id].finaltier" >Case: {{Accstorelist['stores'][selectedStore]['cats'][cats.id]['stock']['case']}} <br>
						Glass: {{Accstorelist['stores'][selectedStore]['cats'][cats.id]['stock']['screen']}}</div>
				<table ng-if="!storelist['stores'][selectedStore]['cats'][cats.id].finaltier" style=" color:white">
					<tr>
					<th>Group</th>
					<th>In Stock</th>
					<th>Total Stock</th>
					<th>CostOfStock</th>
					</tr>
					<tr  ng-repeat="child in storelist['stores'][selectedStore]['cats'][cats.id]['children']">
						<td>{{storelist['stores'][selectedStore]['cats'][child]['title']}}</td>
						<td>{{storelist['stores'][selectedStore]['cats'][child]['stock']}}</td>
						<td>{{storelist['Total']['cats'][child]['stock']}}</td>
						<td>{{storelist['stores'][selectedStore]['cats'][child]['costofstock']|number:0}}</td>
					</tr>
				
				
					</table>
					<table ng-if="storelist['stores'][selectedStore]['cats'][cats.id].finaltier" style=" color:white">
						
					<tr>
					<th>Group</th>
					<th>In Stock</th>
				
					<th>Total Stock</th>
					<th>CostOfStock</th>
					</tr>
					<tr ng-repeat="product in storelist['stores'][selectedStore]['cats'][cats.id]['skus']">
						<td>{{product['name']}}</td>
						
						<td>{{product['stock']}}</td>
						
						<td>{{storelist['Total']['cats'][cats.id]['skus'][product['rqsku']]['stock']}}</td>
						<td>{{product['costofstock']|number:0}}</td>
					</tr>
				
				
					</table>
			</span>
		    	{{cats.title}}<br>
		    	<div ng-if="vars.isAdmin"> Tier {{cats.tier}} </div><br>
		    	<div ng-if="vars.isAdmin"> Parentid {{cats.parent}}</div><br>
		    	<div ng-if="vars.isAdmin"> isFinal {{cats.finaltier}}</div>
		    	<button ng-if="vars.isAdmin" ng-click="deleteCat(cats)" >Delete</button>
	    	</div>
	    	
	    	
    	<span ng-if="vars.isAdmin&& selectedCat.finaltier==false" style=" border: solid;display: inline-block; ">
    		Title<input ng-model="catToAdd.title"><br>
    		Tier<input ng-model ="catToAdd.tier"  ng-init="catToAdd.tier=selectedCat.tier+1"><br>
    		Parentid<input ng-model ="catToAdd.parent" ng-init="catToAdd.parent=selectedCat.id"><br>
    		
    		Final Tier <input type="checkbox"  ng-model="catToAdd.finaltier" ng-init="catToAdd.finaltier='false'" ng-if="selectedCat.tier> 0"><br>
    		<button ng-click="addCat()" >Add</button>
    		
    	</span>
    	</div>	
    	
    	<div ng-if = " vars.currentAccessoryView=='Other' && vars.currentInventory=='Accessory' && selectedCat.tier == 0" style= " border: solid; display: inline-block; ">
    		
    		
	    	<div class='orderreport' style=" border: solid; display: inline; float:left; width:80px"  ng-repeat = "cats in result=(phonecatlist|filter: {'tier':(1),'category' : 'Other'})" ng-click = "spring(cats)" >
	    		
	    		<span class="tooltiptext"  >
				
				
				<div> {{storelist['stores'][selectedStore]['cats'][cats.id]['title']}}:{{storelist['stores'][selectedStore]['cats'][cats.id]['stock']| number:2}}</div> <br>
				
				<table style=" color:white">
					<tr>
					<th>Group</th>
					<th>In Stock</th>
					<th>Total Stock</th>
					<th>CostOfStock</th>
					</tr>
					<tr ng-repeat="child in storelist['stores'][selectedStore]['cats'][cats.id]['children']">
						<td>{{storelist['stores'][selectedStore]['cats'][child]['title']}}</td>
						<td>{{storelist['stores'][selectedStore]['cats'][child]['stock']}}</td>
						<td>{{storelist['Total']['cats'][child]['stock']}}</td>
						<td>{{storelist['stores'][selectedStore]['cats'][child]['costofstock']|number:0}}</td>
					</tr>
				
				
					</table>
					
					
			</span>
		    	{{cats.title}}<br>
		    	<div ng-if="vars.isAdmin">Tier {{cats.tier}} </div><br>
		    	<div ng-if="vars.isAdmin">Parentid {{cats.parent}}</div><br>
		    	<div ng-if="vars.isAdmin">isFinal {{cats.finaltier}}</div>
		    	<button ng-if="vars.isAdmin" ng-click="deleteCat(cats)" >Delete</button>
	    	</div>
    	
    	
	    	<span style=" display: inline; float:left; " ng-if="selectedCat.tier == 0">
	    		Title<input ng-model="catToAdd.title"><br>
	    		Final Tier <input type="checkbox"  ng-model="catToAdd.finaltier" ng-init="catToAdd.finaltier='false'"><br>
	    		<button ng-click="addCat()" >Add</button>
	    		
	    	</span>
	    	
	    	
	    	
	    	
    	
    	
    	
    	
    	
    	
    	
    	</div>
    	
    	
    	
		</div>
		
		
		<div class = "Datafeed" >
		</div>
		<div class = "Categories" style="border: none ;height:10%" >
		</div>
		<div class = "CartSummary"  >
			Cost of Phones :  {{storelist['stores'][selectedStore].total.costofstock | number:2}}<br>
			Cost of Accessories :  {{Accstorelist['stores'][selectedStore].total.costofstock | number:2}}<br>
			Cart Cost : {{cartCostTotal}}
			
		</div>
</div>








<div class="SecondRegion">
		<div class = "Options" >
			
			<button ng-click="setSetting('ordering')">Ordering</button>
    	 	<button ng-click="setSetting('inventory');">Inventory</button>
    	 	
    	 <div ng-if="selectedCat.finaltier">{{selectedCat.title}}</div>
    	 <input type="checkbox" ng-model="vars.desiredonly"> Desired</input>
    	 
    	 <div  ng-if="vars.currentInventory=='Accessory'"> 
    	 	<button ng-if="vars.currentAccessoryView=='Phone'" ng-click="vars.currentAccessoryView='Other';">Devices</button>
    	 <button ng-if="vars.currentAccessoryView=='Other'" ng-click="vars.currentAccessoryView='Phone';">Other</button>
    	 	
    	 	</div>
    	 	
    	 	
    	 	<div  ng-if="vars.isAdmin">
    
    	 <button ng-click="setSetting('edit');">Edit</button>
    	 <button ng-if="setting=='edit'" ng-click="addOrRemoveCats.value=(!addOrRemoveCats.value)">{{addOrRemoveCats.value}}</button><br>
    	
    	
    	 
    	 </div><!---
			<button id="OptionsOpen" style = "position: absolute;  right:2%; bottom:20px;visibility: hidden;" onclick="OptionsEdit('Open','Options')">+</button>
			<button id="OptionsClose" style = "position: absolute; right:2%; top:10px;" onclick="OptionsEdit('Close','Options')" >-</button>
			 --->
		</div>
		<div class = "MainListing" style="overflow-y:scroll;" >
			<div ng-if="vars.currentInventory=='Phone'">
    	 	<div ng-if="setting=='edit'">
    	 <table ng-if="!addOrRemoveCats.value && selectedCat.finaltier==true" >
    	 	<tr><th>Name</th></tr>
    	 	<tr ng-repeat = "those in productList | filter:{'parentid':(0)}:true" > 
    	 		<td>{{those.name}} </td>
    	 		<td><button ng-click="setCat(those.rqsku, selectedCat.id,0)">SetCat</button></td>
    	 		 
    	 		</tr>
    	 </table>
    	 <table  ng-if="addOrRemoveCats.value">
    	 	<tr><th>Name</th></tr>
    	 	<tr ng-repeat = "those in productList | filter:{ 'parentid': (selectedCat.id) }:true" > 
    	 		<td>{{those.name}} </td>
    	 		<td ><button ng-click="setCat(those.rqsku,0,0)">DeleteCat</button></td>
    	 		 
    	 		</tr>
    	 </table>
    	 </div>
    	 <table  ng-if="setting=='inventory'">
    	 	<tr><th>Product</th>
    	 		<th ng-repeat="store in stores" ng-class="{selectedStoreColumn: (selectedStore==store.storeid)}">{{store.storeid}} </th>
    	 		
    	 		</tr>
    	 	<tr ng-repeat = "those in productList | filter:{ 'parentid': (selectedCat.id) }:true" > 
    	 		<td> {{those.name}} </td>
    	 		<td style=" alignment-baseline : middle" ng-repeat="store in stores" ng-class="{selectedStoreColumn: (selectedStore==store.storeid)} " >{{storelist['stores'][store.storeid]['cats'][those.parentid]['skus'][those.rqsku].stock}} </td>
    	 		
    	 		 
    	 		</tr>
    	 </table>
    	<table  ng-if="setting=='ordering' && vars.currentInventory=='Phone'">
    	 	<tr><th>Product</th>
    	 		<th >In Stock </th>
    	 		<th >Total </th>
    	 		<th >Cost </th>
    	 		<th >Desired</th>
    	 		<th >Quick Order </th></tr>
    	 	<tr ng-repeat = "those in productList | filter:{ 'parentid': (selectedCat.id) }:true" ng-if="vars.desiredonly && those.mydesired > storelist['stores'][selectedStore]['cats'][those.parentid]['skus'][those.rqsku].stock  " > 
    	 		<td> {{those.name}} </td>
    	 		<td >{{storelist['stores'][selectedStore]['cats'][those.parentid]['skus'][those.rqsku].stock}}</td>
    	 		<td >{{storelist['Total']['cats'][those.parentid]['skus'][those.rqsku].stock }}</td>
    	 		<td >{{storelist['Total']['cats'][those.parentid]['skus'][those.rqsku].highcost }}</td>
    	 		<td ><input ng-blur=" setDesired(those)" ng-model="those.mydesired"> </td>
    	 		<td ><input  ng-blur="setDesired(those)" ng-model="those.mycart"> </td>
    	 		<td ><input type="checkbox" ng-model="those.addtocart" ng-checked="those.checkboxqcart" ng-change=" setQuickCart(those)" ng-if="cartexists(those )"> </td>
    	 		 
    	 		</tr>
    	 		<tr ng-repeat = "those in productList | filter:{ 'parentid': (selectedCat.id) }:true" ng-if="those.mydesired && 0" > 
    	 		<td> {{those.name}} </td>
    	 		<td >{{storelist['stores'][selectedStore]['cats'][those.parentid]['skus'][those.rqsku].stock}}</td>
    	 		<td >{{storelist['Total']['cats'][those.parentid]['skus'][those.rqsku].stock }}</td>
    	 		<td >{{storelist['Total']['cats'][those.parentid]['skus'][those.rqsku].highcost }}</td>
    	 		<td ><input ng-blur=" setDesired(those)" ng-model="those.mydesired"> </td>
    	 		<td ><input  ng-blur="setDesired(those)" ng-model="those.mycart"> </td>
    	 		<td ><input type="checkbox" ng-model="those.addtocart" ng-change=" setQuickCart(those)" > </td>
    	 		 
    	 		</tr>
    	 		<tr ng-repeat = "those in productList | filter:{ 'parentid': (selectedCat.id) }:true" ng-if="!vars.desiredonly " > 
    	 		<td> {{those.name}} </td>
    	 		<td >{{storelist['stores'][selectedStore]['cats'][those.parentid]['skus'][those.rqsku].stock}}</td>
    	 		<td >{{storelist['Total']['cats'][those.parentid]['skus'][those.rqsku].stock }}</td>
    	 		<td >{{storelist['Total']['cats'][those.parentid]['skus'][those.rqsku].highcost }}</td>
    	 		<td ><input ng-blur=" setDesired(those)" ng-model="those.mydesired"> </td>
    	 		<td ><input  ng-blur="setDesired(those)" ng-model="those.mycart"> </td>
    	 		<td ><input type="checkbox" ng-model="those.addtocart" ng-change="setQuickCart(those)" > </td>
    	 		 
    	 		</tr>
    	 </table>
    	 
    	  <div class="clear">
    	  	</div>
    	</div>
    	
    	
    	<div ng-if="vars.currentInventory=='Accessory'">
    	 	<div ng-if="setting=='edit'">
    	 		<input  ng-model="accessoryFilter.name">
    	 <table ng-if="!addOrRemoveCats.value && selectedCat.finaltier==true" >
    	 	<tr><th>Name</th></tr>
    	 	<tr ng-repeat = "those in accessoryproductList | filter:{parentid:0, name:accessoryFilter.name} " > 
    	 		<td>{{those.name}} </td>
    	 		<td ng-if="vars.currentAccessoryView=='Other'"><button ng-click="setCat(those.rqsku, selectedCat.id, 'other' )">Add</button></td>
    	 		<td ng-if="vars.currentAccessoryView=='Phone'"><button ng-click="setCat(those.rqsku, selectedCat.id, 'case')">Case</button></td>
    	 		<td ng-if="vars.currentAccessoryView=='Phone'"><button ng-click="setCat(those.rqsku, selectedCat.id, 'screen')">Screen</button></td>
    	 		 
    	 		</tr>
    	 </table>
    	 <table  ng-if="addOrRemoveCats.value">
    	 	<tr><th>Name</th></tr>
    	 	<tr ng-repeat = "those in accessoryproductList | filter:{ 'parentid': (selectedCat.id) }:true" > 
    	 		<td>{{those.name}} </td>
    	 		<td ><button ng-click="setCat(those.rqsku,0,0)">DeleteCat</button></td>
    	 		 
    	 		</tr>
    	 </table>
    	 </div>
    	 <table  ng-if="setting=='inventory' && vars.currentAccessoryView=='Phone'">
    	 	<tr>
    	 		<th>Glass</th>
    	 		<th ng-repeat="store in stores">{{store.storeid}}  </th>
    	 	</tr>
    	 	<tr ng-repeat = "those in accessoryproductList | filter:{ 'parentid': (selectedCat.id), 'accessorytype' : 'screen' }:true" > 
    	 		<td> {{those.name}} </td>
    	 		<td style=" alignment-baseline : middle" ng-repeat="store in stores">{{Accstorelist['stores'][store.storeid]['cats'][those.parentid]['skus'][those.rqsku].stock}} </td>
    	 		
    	 		 
    	 		</tr>
    	 </table>
    	 <table  ng-if="setting=='inventory' && vars.currentAccessoryView=='Phone'">
    	 	<tr><th>Cases</th>
    	 		<th ng-repeat="store in stores">{{store.storeid}} </th></tr>
    	 	<tr ng-repeat = "those in accessoryproductList | filter:{ 'parentid': (selectedCat.id), 'accessorytype' : 'case' }:true" > 
    	 		<td> {{those.name}} </td>
    	 		<td style=" alignment-baseline : middle" ng-repeat="store in stores">{{Accstorelist['stores'][store.storeid]['cats'][those.parentid]['skus'][those.rqsku].stock}} </td>
    	 		
    	 		 
    	 		</tr>
    	 </table>
    	 <table  ng-if="setting=='inventory' && vars.currentAccessoryView=='Other'">
    	 	<tr><th>Product</th>
    	 		<th ng-repeat="store in stores">{{store.storeid}} </th></tr>
    	 	<tr ng-repeat = "those in accessoryproductList | filter:{ 'parentid': (selectedCat.id), 'accessorytype' : 'other' }:true" > 
    	 		<td> {{those.name}} </td>
    	 		<td style=" alignment-baseline : middle" ng-repeat="store in stores">{{Accstorelist['stores'][store.storeid]['cats'][those.parentid]['skus'][those.rqsku].stock}} </td>
    	 		
    	 		 
    	 		</tr>
    	 </table>
    	 
    	 <table  ng-if="setting=='ordering' && vars.currentInventory=='Accessory'  ">
    	 	<tr><th>Product</th>
    	 		<th >In Stock </th>
    	 		<th >Total </th>
    	 		<th >Cost </th>
    	 		<th >Desired </th>
    	 		<th >Quick Order </th></tr>
    	 	<tr ng-repeat = "those in accessoryproductList | filter:{ 'parentid': (selectedCat.id),'accessorytype' : 'screen' }:true" > 
    	 		<td> {{those.name}} </td>
    	 		<td >{{Accstorelist['stores'][selectedStore]['cats'][those.parentid]['skus'][those.rqsku].stock}}</td>
    	 		<td >{{Accstorelist['Total']['cats'][those.parentid]['skus'][those.rqsku].stock }}</td>
    	 		<td >{{Accstorelist['Total']['cats'][those.parentid]['skus'][those.rqsku].highcost }}</td>
    	 		<td ><input ng-blur=" setDesired(those)" ng-model="those.mydesired"> </td>
    	 		<td ><input  ng-blur="setDesired(those)" ng-model="those.mycart"> </td>
    	 		<td ><input type="checkbox" ng-model="those.addtocart" ng-change=" setQuickCart()"> </td>
    	 		
    	 		 
    	 		</tr>
    	 </table>
    	  <table  ng-if="setting=='ordering' && vars.currentInventory=='Accessory'  ">
    	 	<tr><th>Product</th>
    	 		<th >In Stock </th>
    	 		<th >Total </th>
    	 		<th >Cost </th>
    	 		<th >Desired </th>
    	 		<th >Quick Order </th></tr>
    	 	<tr ng-repeat = "those in accessoryproductList | filter:{ 'parentid': (selectedCat.id), 'accessorytype' : 'case' }:true" > 
    	 		<td> {{those.name}} </td>
    	 		<td >{{Accstorelist['stores'][selectedStore]['cats'][those.parentid]['skus'][those.rqsku].stock}}</td>
    	 		<td >{{Accstorelist['Total']['cats'][those.parentid]['skus'][those.rqsku].stock }}</td>
    	 		<td >{{Accstorelist['Total']['cats'][those.parentid]['skus'][those.rqsku].highcost }}</td>
    	 		<td ><input ng-blur=" setDesired(those)" ng-model="those.mydesired"> </td>
    	 		<td ><input  ng-blur="setDesired(those)" ng-model="those.mycart"> </td>
    	 		<td ><input type="checkbox" ng-model="those.addtocart" ng-change=" setQuickCart()"> </td>
    	 		
    	 		 
    	 		</tr>
    	 </table>
    	  <div class="clear">
    	  	</div>
    	</div>
			<button id="MainOpen" style = "position: absolute; right:2%; bottom:1%; visibility: hidden;" onclick="OptionsEdit('Open','Main')" > +</button>
			<button id="MainFull" style = "position: absolute; right:2%; bottom:1%" onclick="OptionsEdit('FullOpen','Main')" > +</button>
		</div>
		<div class = "CartListing" style="overflow-y:scroll;" >
			
			<div style=" bottom:20px">
    		
    		<table  ng-if=" vars.currentInventory=='Phone' ">
    	 	<tr><th>Product</th>
    	 		<th >In Stock </th>
    	 		<th >Total </th>
    	 		<th >Cost </th>
    	 		<th >Desired </th>
    	 		<th >Quick Order </th></tr>
    	 	<tr ng-repeat = "those in productList " ng-if="those.mycart>0" ng-init="cartTotal(storelist['stores'][selectedStore]['cats'][those.parentid]['skus'][those.rqsku].stock , storelist['Total']['cats'][those.parentid]['skus'][those.rqsku].highcost )" > 
    	 		
    	 		<td> {{those.name}} </td>
    	 		<td >{{storelist['stores'][selectedStore]['cats'][those.parentid]['skus'][those.rqsku].stock}}</td>
    	 		<td >{{storelist['Total']['cats'][those.parentid]['skus'][those.rqsku].stock }}</td>
    	 		<td >{{storelist['Total']['cats'][those.parentid]['skus'][those.rqsku].highcost }}</td>
    	 		<td ><input ng-blur=" setDesired(those)" ng-model="those.mydesired"> </td>
    	 		<td ><input  ng-blur="setDesired(those)" ng-model="those.mycart"> </td>
    	 		<td ><input type="checkbox" ng-model="those.addtocart" ng-change=" setQuickCart(those)"> </td>
    	 		 
    	 		</tr>
    	 </table>
    		
    	</div>
			
			<button id="CartOpen" style = "position: absolute; right:2%; top:20%; visibility: hidden;" onclick= " OptionsEdit('Open','Cart' )" >+</button>
			<button id="CartFull" style = "position: absolute; right:2%; top:3%; " onclick=" OptionsEdit('FullOpen','Cart' )" >+</button>
		</div>
		</div>
		</div>
</html>