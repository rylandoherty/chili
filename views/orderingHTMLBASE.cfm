  <html>
    	  	<style>    
    		
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
    width: 600px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: fixed;
    top:450px;
    left:5%;
   
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
    	
	<script type="text/javascript" src="stylesheet/HTML.JS" >
	</script>
	<link rel="stylesheet" type="text/css" href="stylesheet/orderstyle.txt">
	</link>


<div class="TotalBox" >
	
<div class="LeftRegion"  > 
			<div class = "MainOption" >
						<div ng-if="thisGuy.userid=='admin'">
				    	<input type="checkbox"  ng-model="vars.isAdmin" ng-checked='vars.isAdmin'> IsAdmin
				    	</div>
				    	<!--- <button ng-if="vars.isAdmin" ng-click= " setCatContainer(); 
				    	setAccCatContainer();
						addInventoryToContainerByStore(); 
						addAccInventoryToContainerByStore(); " > Refresh </button>
				    	Order Undefined Inventory Accessories--->
				    	
				    	
				    	<button
				    	 ng-repeat = "cats in result=(phonecatlist|filter: {'tier': (selectedCat.tier-1),'id':selectedCat.parent}:true)"
				    	   ng-if="selectedCat.tier>0" ng-click = "spring(cats)" >Back to {{cats.title}} </button>
				    	<br>
			<select ng-model="selectedStore" style="position: absolute;left:18%; top:2%;">
			<option ng-repeat = "store in stores" ng-value="store.storeid" > {{store.storeid}} </option>
			
			</select>
			<div style="position: absolute;left:45%; top:2%; font-size:24;"> {{selectedStore}}</div>
			<button style="position: absolute;left:7%; bottom:15%;" ng-if="selectedCat.tier>0" ng-click="spring(0)" >Clear</button>
			<button style="position: absolute;left:20%; bottom:15%;"  ng-repeat = "cats in result=(phonecatlist|filter: {'tier': (selectedCat.tier-1),'id':selectedCat.parent}:true)"
				    	   ng-if="selectedCat.tier>0" ng-click = "spring(cats)">Back</button>
			<div style=" position: absolute;  min-width:4.5vw ; min-height:4vh; left:35%; bottom:15%;">
			<button style=" position: inline;  min-width:4.5vw ; min-height:4vh; left:40%; top:15%;"  ng-click="vars.currentInventory='Accessory'; vars.currentAccessoryView='Other'">Phones</button>
			<button style=" position: inline;  min-width:4.5vw ; min-height:4vh; left:40%; top:15%;"  ng-click="vars.currentInventory='Phone'; vars.currentAccessoryView='Phone'; " >Accessories</button>
			</div>
			<div style="position: absolute;left:80%; bottom:50%; font-size:10;"> Apple</div>
			<div style="position: absolute;left:80%; bottom:35%; font-size:10;"> Iphone</div>
			<div style="position: absolute;left:80%; bottom:20%; font-size:10;"> {{selectedCat.title}}</div>
		</div>
		<div class = "Categories" style="overflow-y:scroll;" >

			
			<button class='orderreport' style=" border: solid; display: inline; float:left; width:80px"  ng-repeat = "cats in result=(phonecatlist|filter: {'tier':(1),'category' : 'Phone'})" ng-click = "spring(cats)" >
	    		
	    		<span class="tooltiptext"  >
				
				
				<div > {{storelist['stores'][selectedStore]['cats'][cats.id]['title']}}:{{storelist['stores'][selectedStore]['cats'][cats.id]['stock']| number:2}}</div> <br>
				
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
	    	</button>
			<!---
				<button class='orderreport' style=" border: solid; display: inline; float:left; width:80px"  ng-repeat = "cats in result=(phonecatlist|filter: {'tier':(1) ,'category' : 'Phone'})" ng-click = "spring(cats)" >
		    		
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
		    	</button>
			
			
			--->
		</div>
		
		
		
		<div class = "Datafeed" >
			Selected / Hoveron Datatable of categories with children's stock total cost accessories(if final&&device)
		</div>
		<div class = "Categories" style="border: none; height:10%" >
		</div>
		<div class = "CartSummary"  >
			Cart Data, Receiving data, Rebate Data 
		</div>


</div>
<div class="SecondRegion">
		<div class = "Options" >
			Options
			Ordering (filter by desired or not), Inventory, ViewOtherProfile not editable((filter by desired,cart,not), include stock,own desired, own cart, editable)
			<!---
			<button id="OptionsOpen" style = "position: absolute;  right:2%; bottom:20px;visibility: hidden;" onclick="OptionsEdit('Open','Options')">+</button>
			<button id="OptionsClose" style = "position: absolute; right:2%; top:10px;" onclick="OptionsEdit('Close','Options')" >-</button>
			 --->
		</div>
		<div class = "MainListing" >
			MainView / Filtered
			<button id="MainOpen" style = "position: absolute; right:2%; bottom:1%; visibility: hidden;" onclick="OptionsEdit('Open','Main')" > +</button>
			<button id="MainFull" style = "position: absolute; right:2%; bottom:1%" onclick="OptionsEdit('FullOpen','Main')" > +</button>
		</div>
		<div class = "CartListing" >
			
			Cart 
			<input type="checkbox"> Filter by category 
			<button id="CartOpen" style = "position: absolute; right:2%; top:20%; visibility: hidden;" onclick= " OptionsEdit('Open','Cart' )" >+</button>
			<button id="CartFull" style = "position: absolute; right:2%; top:3%; " onclick=" OptionsEdit('FullOpen','Cart' )" >+</button>
		</div>
		</div>
		</div>
</html>