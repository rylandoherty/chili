<html>
	<script type="text/javascript" src="stylesheet/HTML.JS" >
	</script>
	
<style>    
    		
    		
			.menubutton {
				 width:100px;
				 height:100px;
				  text-align: center;
			}
			.smmenubutton {
				 width:60px;
				 height:60px;
				  text-align: center;
			}
			
			
			
    		
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
td.productLine {
	 max-width: 300; 
   overflow: hidden; 
   white-space: nowrap; 
   text-overflow: clip;
	
}

td.productLine .tooltiptext  {
    visibility: hidden;
    width: 400px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
	overflow: inline;
	white-space: normal;
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 10%;
    left: 50;
    margin-left: -60px;
}


td.productLine:hover .tooltiptext{
   visibility: visible;
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

ul {
  list-style-type: none;
  padding-left:20px;
    }
  li:before {
     content: "-";
     display: inline-block;
     width: 10px;
    
}
.collapsed ul {
  display: none;
}
li.collapsed:before {
  content: '+';
  display: inline-block;
  width: 10px;
}  
li a:hover {
  cursor: pointer;
}




    	</style>

<div class="TotalBox" >
	
<div class="LeftRegion" > 
		
		<div class = "MainOption" >
			
			<div  ng-if="!phonecatlistbyid[selectedz].finaltier && setting=='edit'">
			
			<input ng-model="vars.newCat.Title" > <input type="checkbox" ng-model="vars.newCat.finaltier" > Final? <button ng-click="addPhoneCat()">Add</button>
			<br/>
			</div>
			<div style=" font-size:30px; text-height: font-size"><select style=" height:90px" ng-model="vars.selectedStore" ng-options="store.storeid for store in stores"> </select> --  {{setting}}</div>
			<!---<button class="menubutton"  ng-click="vars.currentInventory='Other'; vars.currentAccessoryView='other';">Accessories</button>
    	 <button class="menubutton" ng-click="vars.currentInventory='Phone'; vars.currentAccessoryView='device';">Devices</button>--->
	</div >
		
		
<div class = "Categories" style="overflow-y:scroll;" >
	<button ng-click="selectedz.id = null">Clear</button>
			{{vars.currentInventory}}
			
			<li>
				<div style="display: inline-block;float: right;   width: 3vw; text-align: center;" > Cart </div>
				<div style="display: inline-block;float: right;   width: 3vw; text-align: center;" > Desire </div>
				<div style="display: inline-block;float: right;   width: 3vw; text-align: center;" > Stock </div>
				
			 </li>
			<tree src="orderTree[vars.currentInventory]" fun="captureSelect" store="{{vars.selectedStore.storeid}}" fillList="returnSDC"></tree>
</div>
		
		
</div>


<div class="SecondRegion">
	
		<div class = "Options" >
			
			<button class="menubutton" ng-if="thisGuy.accesslevel<='-1'" ng-click="setSetting('ordering')">Ordering</button>
    	 	<button class="menubutton" ng-click="setSetting('inventory');">Inventory</button>
    	 	<button class="menubutton" ng-if="thisGuy.accesslevel<='1'" ng-click="setSetting('edit');">Edit</button>
    	 	<button class="menubutton" ng-if="thisGuy.accesslevel<='-1'" ng-click="setSetting('desired');">Your Desired</button>
    	 	<button class="menubutton" ng-if="thisGuy.accesslevel<='-1'" ng-click="setSetting('cart');">Your Cart</button>
    	 	<!---<button class="menubutton" ng-if="thisGuy.accesslevel<='2'" ng-click="setSetting('theircart'); loadCartForOther();">Their Cart</button>--->
    	 	Other Cart
    	 	<select ng-if="thisGuy.accesslevel<='2'" ng-change=" setSetting('theircart');  loadCartForOther()" ng-model="vars.selectedOrder" ng-options="user.name for user in ListOfOrdersByName" > </select>
    	 	Load Sales as Cart by Days
    	 	<input> </input>
    	 	
     <button ng-if="setting=='edit'" ng-click="addOrRemoveCats.value=(!addOrRemoveCats.value)">Adding: {{addOrRemoveCats.value}} </button>
    	 	
    	 	<br/>
    	 	<div style=" font-size:20px;" ng-if="setting=='ordering' || setting =='inventory' || setting == 'edit'">
    	 <button class="smmenubutton" ng-if="vars.currentInventory=='Phone'" ng-click=" vars.currentAccessoryView='device';">Device</button>
    	 <button class="smmenubutton" ng-if="vars.currentInventory=='Phone'" ng-click=" vars.currentAccessoryView='case';">Case</button>
    	 <button class="smmenubutton" ng-if="vars.currentInventory=='Phone'" ng-click=" vars.currentAccessoryView='screen';">Glass</button>
    	  {{phonecatlistbyid[selectedz.id].title}} --- {{vars.currentAccessoryView}} 
	
    	 </div>
    	
    	<div >
    		
     {{selectedz.id}}
     <br>
    	 </div><!---
			<button id="OptionsOpen" style = "position: absolute;  right:2%; bottom:20px;visibility: hidden;" onclick="OptionsEdit('Open','Options')">+</button>
			<button id="OptionsClose" style = "position: absolute; right:2%; top:10px;" onclick="OptionsEdit('Close','Options')" >-</button>
			 --->
			
	<br/>
	
		</div>
		
		
		
		
		
		
		
		
		
		<div class = "MainListing" style="overflow-y:scroll;" >
			
			<div ng-if="vars.currentInventory=='Phone'"></div>
			<div ng-if="vars.currentInventory=='Accessory'"></div>
			
			
				<div ng-if="setting=='ordering' || setting =='inventory' ">Devices: {{countStuff(phonecatlistbyid[selectedz.id]['products']['device'], vars.selectedStore.storeid)}}  -
    	  Cases: {{countStuff(phonecatlistbyid[selectedz.id]['products']['case'],vars.selectedStore.storeid)}}  -
    	  Glass: {{countStuff(phonecatlistbyid[selectedz.id]['products']['screen'],vars.selectedStore.storeid)}}
    	  </div>
    	  
    	  
    	  
    	 	<div ng-if="setting=='edit'">
    	 		
    	 		<input  ng-model="vars.accessoryFilter"></input>
    	 		<div ng-if="vars.currentInventory=='Phone'">
    		 <table ng-if="addOrRemoveCats.value && phonecatlistbyid[selectedz.id].finaltier==true" >
    	 	<tr><th>Name</th></tr>
    	 	<tr ng-if="vars.currentAccessoryView=='device'" ng-repeat = "those in productList | filter:{parentid: 0}:true | filter:{name: vars.accessoryFilter } " >
    	 	<td>{{those.name}} </td>
    	 		<td><button ng-click="setCat(those.rqsku, selectedz.id ,0)">SetCat</button></td>
    	 		 
    	 	</tr>
    	 	<tr  ng-if="vars.currentAccessoryView=='case' || vars.currentAccessoryView=='screen' " ng-repeat = "those in accessoryproductList | filter:{'parentid':(0)}:true | filter:{name: (vars.accessoryFilter)}" > 
    	 		<td>{{those.name}} </td>
    	 		<td><button ng-click="setCat(those.rqsku, selectedz.id , vars.currentAccessoryView )">SetCat</button></td>
    	 		 
    	 		</tr>
    	 		
    	 </table>
    	 
    	 	
    	 <table ng-if="!addOrRemoveCats.value">
    	 	<tr><th>Name</th></tr>
    	 	<tr ng-if="vars.currentAccessoryView=='device'  " ng-repeat = "those in productList | filter:{ 'parentid': (selectedz.id)}:true" > 
    	 		<td>{{those.name}} </td>
    	 		<td ><button ng-click="setCat(those.rqsku,0,0)">DeleteCat</button></td>
    	 		 
    	 		</tr>
    	 		
    	 		<tr ng-if="(vars.currentAccessoryView=='case' || vars.currentAccessoryView=='screen') " ng-repeat = "those in accessoryproductList | filter:{ 'parentid': (selectedz.id),  'accessorytype': vars.currentAccessoryView, 'name':accessoryFilter.name }:true" > 
    	 		<td>{{those.name}} </td>
    	 		<td ><button ng-click="setCat(those.rqsku,0,0)">DeleteCat</button></td>
    	 		 
    	 		</tr>
    	 </table>
    	 </div>
    	 <div ng-if="vars.currentInventory=='Other'">
    	 	
    	 	 <table ng-if="addOrRemoveCats.value" >
    	 	<tr><th>Name</th></tr>
    	 	<tr  ng-repeat = "those in accessoryproductList | filter:{'parentid':(0) }:true | filter:{ 'name': (vars.accessoryFilter)}" > 
    	 		<td>{{those.name}} </td>
    	 		<td><button ng-click="setCat(those.rqsku, selectedz.id , vars.currentAccessoryView )">SetCat</button></td>
    	 		 
    	 		</tr>
    	 	
    	 	</table>
    	 	
    	 	
    	 	
    	 	<table ng-if="!addOrRemoveCats.value">
    	 		<tr><th>Name</th></tr>
    	 		 
    	 		 <tr ng-repeat = "those in accessoryproductList | filter:{ 'parentid': (selectedz.id),  'accessorytype': vars.currentAccessoryView }:true" > 
    	 		<td>{{those.name}} </td>
    	 		<td ><button ng-click="setCat(those.rqsku,0,0)">DeleteCat</button></td>
    	 		 
    	 		</tr>
    	 	</table>
    	 </div>
    	 
    	 
    	  </div>
    	
    	 	
    	 		
    	
    	 <table  ng-if="setting=='inventory'">
    	 	<tr   > 
    	 		<td></td>
    	 		<td>Total </td>
    	 		<td style=" alignment-baseline : middle" ng-repeat="store in stores" ng-class="{selectedStoreColumn: (vars.selectedStore.storeid==store.storeid)} " > {{countStuff(phonecatlistbyid[selectedz.id]['products'][vars.currentAccessoryView] ,store.storeid)}} </td>
    	 		 
    	 		</tr>
    	 		
    	 	
    	 	<tr>
    	 		<td>Sku</td>
    	 		<th>Product</th>
    	 		
    	 		<th ng-repeat="store in stores" ng-class="{selectedStoreColumn: (vars.selectedStore.storeid==store.storeid)}">{{store.storeid}} </th>
    	 		
    	 		</tr>
    	 		
    	 	<tr ng-if="vars.currentAccessoryView=='device'" ng-repeat = "those in productList | filter:{ 'parentid': (selectedz.id) }:true" > 
    	 		<td>{{those.rqsku}}</td>
    	 		<td> {{those.name}} </td>
    	 		<td style=" alignment-baseline : middle" ng-repeat="store in stores" ng-class="{selectedStoreColumn: (vars.selectedStore.storeid==store.storeid)} " > {{masterSkuList['stores'][store.storeid]['skulist'][those.rqsku].stock}} </td>
    	 		</tr>
    	 		
    	 	<tr  ng-if="vars.currentAccessoryView=='case' || vars.currentAccessoryView=='screen' "  ng-repeat = "those in accessoryproductList |  filter:{ 'parentid': (selectedz.id), 'accessorytype': vars.currentAccessoryView }:true" > 
    	 		<td>{{those.name}} </td>
    	 		<td style=" alignment-baseline : middle" ng-repeat="store in stores" ng-class="{selectedStoreColumn: (vars.selectedStore.storeid==store.storeid)} " > {{masterSkuList['stores'][store.storeid]['skulist'][those.rqsku].stock}} </td>
    	 		 
    	 		</tr>
    	 </table>
    	<div ng-if=" setting=='theircart' ">
    		 
    		
    		<button ng-click="setAllTheirCart()" > Overwrite Own Cart </button>
    		
    	  <table >
    		<col width ="300">
    		<col width ="75">
    		<col width ="75">
    		<col width ="75">
    		<col width ="75">
    		<col width ="75">
    	 	<tr>
    	 		<th>SKU</th>
    	 		<th>Product</th>
    	 		<th>In Stock</th>
    	 		<th>Total Stock</th>
    	 		<th>Cost</th>
    	 		<th>Desired</th>
    	 		<th>Cart</th>
    	 		<th>Their Order</th>
    	 	
    	 	</tr>
    	 	
    	 	<tbody ng-if="vars.currentInventory=='Phone'">
    	 	<tr ng-repeat = "those in productList " ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].theircart>0"  > 
    	 		<td > {{those.rqsku}}</td>
    	 		<td class="productLine" > {{those.name}} <span class="tooltiptext">{{those.name}}</span> </td>
    	 		<td style=" text-align: center" >{{masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].stock}}</td>
    	 		<td style=" text-align: center" >{{masterSkuList['district']['skulist'][those.rqsku].stock }}</td>
    	 		<td style=" text-align: center" >{{those.lowcost }}</td>
    	 		<td ><input size="4" ng-change=" setDesired(those)" ng-model="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mydesired"> </td>
    	 		<td ><input size="4" ng-change="setDesired(those)" ng-model="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart"> </td>
    	 		<td >{{masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].theircart}} </td>
    	 		<td >
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart>0" style=" background-color: green" ng-click=" settheirQuickCart(those);"  > + </button>
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart<= 0" style="background-color: grey "  ng-click=" settheirQuickCart(those);" > +  </button>	
    	 		</td>
    	 		 
    	 		</tr>
    	 		</tbody>
    	 		</table>
    	 		</div>
    	<div ng-if="setting=='cart'|| setting=='desired'">
    		<button class="btn" ng-click="copyStuff()"   >
		   CopyThing
			</button>
  		<table id="gotobedontime" style="display:none"  >
			<thead>
  				
  			</thead>
  			
  			<tbody ng-if="vars.currentInventory=='Phone' && setting=='cart'">
    	 	<tr ng-repeat = "those in productList " ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart>0"  >
  					<td class="productLine" > {{those.rqsku}} <span class="tooltiptext">{{those.rqsku}}</span> </td>
  					<td >{{masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart }} </td>
  					<td style=" text-align: center" >{{vars.selectedStore.storeid}}</td>
  				</tr>
  			</tbody>
  		</table>
  		
  		
    		Cart : {{countStuffMoney(productList, vars.selectedStore.storeid)}}
    		<button ng-click="emptyCart()"> Clear Cart </button>
    		<button ng-click="setAllDesired()"> AutoFill </button>
    	  <table id="foo" >
    		<col width ="300">
    		<col width ="75">
    		<col width ="75">
    		<col width ="75">
    		<col width ="75">
    		<col width ="75">
    	 	<tr>
    	 		<th>SKU</th>
    	 		<th>Product</th>
    	 		<th>In Stock</th>
    	 		<th>Total Stock</th>
    	 		<th>Cost</th>
    	 		<th>Desired</th>
    	 		<th>Cart</th>
    	 	</tr>
    	 	
    	 	<tbody ng-if="vars.currentInventory=='Phone' && setting=='desired'">
    	 	<tr ng-repeat = "those in productList " ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mydesired-masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].stock>0"  > 
    	 		<td > {{those.rqsku}}</td>
    	 		<td class="productLine" > {{those.name}} <span class="tooltiptext">{{those.name}}</span> </td>
    	 		<td style=" text-align: center" >{{masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].stock}}</td>
    	 		<td style=" text-align: center" >{{masterSkuList['district']['skulist'][those.rqsku].stock }}</td>
    	 		<td style=" text-align: center" >{{those.lowcost }}</td>
    	 		<td ><input size="4" ng-change=" setDesired(those)" ng-model="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mydesired"> </td>
    	 		<td ><input size="4" ng-change="setDesired(those)" ng-model="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart"> </td>
    	 		<td >
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart>0" style=" background-color: green" ng-click=" setQuickCart(those);"  > + </button>
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart<= 0" style="background-color: grey "  ng-click=" setQuickCart(those);" > +  </button>	
    	 		</td>
    	 		 
    	 		</tr>
    	 	
    	 	
    	 	<tbody ng-if="vars.currentInventory=='Other' && setting=='desired'">
    	 	<tr ng-repeat = "those in accessoryproductList " ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mydesired-masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].stock>0"  > 
    	 		<td class="productLine" > {{those.name}} <span class="tooltiptext">{{those.name}}</span> </td>
    	 		<td style=" text-align: center" >{{masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].stock}}</td>
    	 		<td style=" text-align: center" >{{masterSkuList['district']['skulist'][those.rqsku].stock }}</td>
    	 		<td style=" text-align: center" >{{those.lowcost }}</td>
    	 		<td ><input size="4" ng-change="setDesired(those)" ng-model="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mydesired"> </td>
    	 		<td ><input size="4" ng-change="setDesired(those)" ng-model="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart"> </td>
    	 		<td >
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart>0" style=" background-color: green" ng-click=" setQuickCart(those);"  > + </button>
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart<= 0" style="background-color: grey "  ng-click=" setQuickCart(those);" > +  </button>	
    	 		</td>
    	 		 
    	 		</tr>
    	 	
    	 		<tbody ng-if="vars.currentInventory=='Phone' && setting=='cart'">
    	 		<tr ng-repeat = "those in productList " ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart>0"  > 
    	 		<td > {{those.rqsku}}</td>
    	 		<td class="productLine" > {{those.name}} <span class="tooltiptext">{{those.name}}</span> </td>
    	 		<td style=" text-align: center" >{{masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].stock}}</td>
    	 		<td style=" text-align: center" >{{masterSkuList['district']['skulist'][those.rqsku].stock }}</td>
    	 		<td style=" text-align: center" >{{those.lowcost }}</td>
    	 		<td ><input size="4" ng-change=" setDesired(those)" ng-model="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mydesired"> </td>
    	 		<td ><input size="4" ng-change="setDesired(those)" ng-model="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart"> </td>
    	 		<td >
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart>0" style=" background-color: green" ng-click=" setQuickCart(those);"  > + </button>
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart<= 0" style="background-color: grey "  ng-click=" setQuickCart(those);" > +  </button>	
    	 		</td>
    	 		 
    	 		</tr>
    	 		</tbody>
    	 		
    	 		<tbody ng-if="vars.currentInventory=='Other' && setting=='cart'">
    	 		<tr ng-repeat = "those in accessoryproductList " ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart>0"  > 
    	 		<td class="productLine" > {{those.name}} <span class="tooltiptext">{{those.name}}</span> </td>
    	 		<td style=" text-align: center" >{{masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].stock}}</td>
    	 		<td style=" text-align: center" >{{masterSkuList['district']['skulist'][those.rqsku].stock }}</td>
    	 		<td style=" text-align: center" >{{those.lowcost }}</td>
    	 		<td ><input size="4" ng-change=" setDesired(those)" ng-model="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mydesired"> </td>
    	 		<td ><input size="4" ng-change="setDesired(those)" ng-model="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart"> </td>
    	 		<td >
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart>0" style=" background-color: green" ng-click=" setQuickCart(those);"  > + </button>
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart<= 0" style="background-color: grey "  ng-click=" setQuickCart(those);" > +  </button>	
    	 		</td>
    	 		 
    	 		</tr>
    	 		</tbody>
    	 	</table>
    	</div>
    	<table  ng-if="setting=='ordering' && vars.currentInventory=='Phone'">
    		<col width ="300">
    		<col width ="75">
    		<col width ="75">
    		<col width ="75">
    		<col width ="75">
    		<col width ="75">
    	 	<tr>
    	 		
    	 		<th>Product</th>
    	 		<th>In Stock</th>
    	 		<th>Total Stock</th>
    	 		<th>Cost</th>
    	 		<th>Desired</th>
    	 		<th>Cart</th>
    	 	</tr>
    	 		
    	 		<tr ng-repeat = "those in phonecatlistbyid[selectedz.id]['products'][vars.currentAccessoryView] "  > 
    	 		<td class="productLine" > {{those.name}} <span class="tooltiptext">{{those.name}}</span> </td>
    	 		<td style=" text-align: center" >{{masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].stock}}</td>
    	 		<td style=" text-align: center" >{{masterSkuList['district']['skulist'][those.rqsku].stock }}</td>
    	 		<td style=" text-align: center" >{{those.highcost }}</td>
    	 		<td ><input size="4" ng-change=" setDesired(those)" ng-model="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mydesired"> </td>
    	 		<td ><input size="4" ng-change="setDesired(those)" ng-model="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart"> </td>
    	 		<td >
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart>0" style=" background-color: green" ng-click=" setQuickCart(those);"  > + </button>
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart<= 0" style="background-color: grey "  ng-click=" setQuickCart(those);" > +  </button>	
    	 		</td>
    	 		 
    	 		</tr>
    	 	</table>
    	 	<table  ng-if="setting=='ordering' && vars.currentInventory=='Accessory'  ">
    	 	<tr><th>Product</th>
    	 		<th >In Stock </th>
    	 		<th >Total </th>
    	 		<th >Cost </th>
    	 		<th >Desired </th>
    	 		<th >Cart </th></tr>
    	 	<tr ng-repeat = "those in accessoryproductList | filter:{ 'parentid': (selectedCat.id),'accessorytype' : 'screen' }:true" > 
    	 		<td> {{those.name}} </td>
    	 		<td >{{Accstorelist['stores'][selectedStore]['cats'][those.parentid]['skus'][those.rqsku].stock}}</td>
    	 		<td >{{Accstorelist['Total']['cats'][those.parentid]['skus'][those.rqsku].stock }}</td>
    	 		<td >{{Accstorelist['Total']['cats'][those.parentid]['skus'][those.rqsku].highcost }}</td>
    	 		<td ><input ng-blur=" setDesired(those)" ng-model="those.mydesired"> </td>
    	 		<td ><input  ng-blur="setDesired(those)" ng-model="those.mycart"> </td>
    	 		<td >
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart>0" style=" background-color: green" ng-click=" setQuickCart(those);"  > + </button>
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart<= 0" style="background-color: grey "  ng-click=" setQuickCart(those);" > +  </button>	
    	 		</td>
    	 		
    	 		 
    	 		</tr>
    	 </table>
    	  <table  ng-if="setting=='ordering' && vars.currentInventory=='Accessory'  ">
    	 	<tr><th>Product</th>
    	 		<th >In Stock </th>
    	 		<th >Total </th>
    	 		<th >Cost </th>
    	 		<th >Desired </th>
    	 	<tr ng-repeat = "those in accessoryproductList | filter:{ 'parentid': (selectedCat.id), 'accessorytype' : 'case' }:true" > 
    	 		<td> {{those.name}} </td>
    	 		<td >{{Accstorelist['stores'][selectedStore]['cats'][those.parentid]['skus'][those.rqsku].stock}}</td>
    	 		<td >{{Accstorelist['Total']['cats'][those.parentid]['skus'][those.rqsku].stock }}</td>
    	 		<td >{{Accstorelist['Total']['cats'][those.parentid]['skus'][those.rqsku].highcost }}</td>
    	 		<td ><input ng-blur=" setDesired(those)" ng-model="those.mydesired"> </td>
    	 		<td ><input  ng-blur="setDesired(those)" ng-model="those.mycart"> </td>
    	 		<td >
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart>0" style=" background-color: green" ng-click=" setQuickCart(those);"  > + </button>
    	 			<button ng-if="masterSkuList['stores'][vars.selectedStore.storeid]['skulist'][those.rqsku].mycart<= 0" style="background-color: grey "  ng-click=" setQuickCart(those);" > +  </button>	
    	 		</td>
    	 		
    	 		 
    	 		</tr>
    	 </table>
    	 	<!--- <tr ng-repeat = "those in productList | filter:{ 'parentid': (selectedCat.id) }:true" ng-if="vars.desiredonly && those.mydesired > storelist['stores'][selectedStore]['cats'][those.parentid]['skus'][those.rqsku].stock  " > 
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
    	 		<tr ng-repeat = "those in productList | filter:{ 'parentid': (selectedz) }:true" ng-if="!vars.desiredonly " > 
    	 		<td> {{those.name}} </td>
    	 		<td >{{storelist['stores'][selectedStore]['cats'][those.parentid]['skus'][those.rqsku].stock}}</td>
    	 		<td >{{storelist['Total']['cats'][those.parentid]['skus'][those.rqsku].stock }}</td>
    	 		<td >{{storelist['Total']['cats'][those.parentid]['skus'][those.rqsku].highcost }}</td>
    	 		<td ><input ng-blur=" setDesired(those)" ng-model="those.mydesired"> </td>
    	 		<td ><input  ng-blur="setDesired(those)" ng-model="those.mycart"> </td>
    	 		<td ><input type="checkbox" ng-model="those.addtocart" ng-change="setQuickCart(those)" > </td>
    	 		 
    	 		</tr>--->
    	 
    	
    	  <div class="clear">
    	  	</div>
    	</div>
    	
    	
    	<div ng-if="vars.currentInventory=='Accessory'">
    	 	<div ng-if="setting=='edit'">
    	 		<input  ng-model="accessoryFilter.name">
    	 <table ng-if="!addOrRemoveCats.value && phonecatlistbyid[selectedz.id].finaltier ==true" >
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
    	 	<tr ng-repeat = "those in accessoryproductList | filter:{ 'parentid': (selectedz.id) }:true" > 
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
    	 	<tr ng-repeat = "those in accessoryproductList | filter:{ 'parentid': (selectedz.id), 'accessorytype' : 'screen' }:true" > 
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
    	 	<tr>
    	 		<th>Product</th>
    	 		
    	 		<th ng-repeat="store in stores">{{store.storeid}} </th></tr>
    	 	<tr ng-repeat = "those in accessoryproductList | filter:{ 'parentid': (selectedCat.id), 'accessorytype' : 'other' }:true" > 
    	 		
    	 		<td> {{those.name}} </td>
    	 		<td style=" alignment-baseline : middle" ng-repeat="store in stores">{{Accstorelist['stores'][store.storeid]['cats'][those.parentid]['skus'][those.rqsku].stock}} </td>
    	 		
    	 		 
    	 		</tr>
    	 </table>
    	 
    
    	  <div class="clear">
    	  	</div>
    	</div>
			
		</div>
		<!---<div class = "CartListing" style="overflow-y:scroll;" >
			
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
		</div>--->
		</div>
		</div>
</html>