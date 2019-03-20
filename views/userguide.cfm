
<html>



<style>

.whole{
display: block;
min-width: 1280px;
border-style: solid;
}

.leftTree {
float: left;
min-width : 300px;
border-style: solid;

}

.rightView{
	
position:relative;
float: left;
width: 1000px;

}


</style>




<body class="whole">
	<div class="leftTree">


<ul>
	
	<li>
	Fraud
	<ul>
		<li ng-click=" selected = 'Fraud' ">Pictures </li>
	</ul>	
		
	</li>
</ul>

<ul>
<li> Everything
			<ul>
			<li>RQ
				<ul>
				<li>Inventory
					<ul>
						<li ng-click="selected = 'Counts'">Counts</li>
						<ul> <li ng-click="selected = 'DeviceInventoryCount'">Device Count </li>  
							<li ng-if="thisGuy.accesslevel<3" ng-click="selected = 'AccessoryInventoryCount'">Accessory Count </li>  
							<li ng-click="selected = 'ConsignmentCount'">Consignment Demos Count </li>
							<li ng-click="selected = 'AddConsignment'">Add Consignment Demos</li>  
							
						</ul>
						
						
						
						
						<li ng-click="selected = 'Reports'">Reports</li>
						<li ng-click="selected = 'Transfers'">Transfers</li>
						<li ng-click="selected = 'Stuff'">Stuff</li>
					</ul>
				</li>
				
				<li>Home Screen<ul></ul></li>
				
				<li>Sales<ul></ul></li>
				<li>Procedure<ul></ul></li>
				<li>Bill Pays<ul></ul></li>
				<li></li>
				</ul>
			</li>
			</ul>
	
	
			<ul>
			<li>Eroes
				<ul>
				<li>a
					<ul>
					<li>A</li>
					<li>B</li>
					<li>C</li>
					</ul>
				</li>
				
				<li>b</li>
				<li>c</li>
				</ul>
			</li>
			</ul>
	
	
	
			<ul>
			<li>Greenchili
				<ul>
				<li>a
					<ul>
					<li>A</li>
					<li>B</li>
					<li>C</li>
					</ul>
				</li>
				<li>b</li>
				<li>c</li>
				</ul>
			</li>
			
			</ul>
	
	</li>
	</ul>
	</div>
	{{selected}}
	<div class="rightView" ng-include="'helptree/'+selected+'.htm'">
	
	
	<!---
	<div ng-if="selected== 'Reports'">
	<video style="float:left" width="100%" height="540" controls>
	    <source src="/helpcontent/peach.mp4" type="video/mp4">
	    	Your browser does not support the video tag.
	</video>
	</div>
	
	
	
	<div ng-if="selected== 'Transfers'">
	<image width="100%" height="540" controls
	     src="/helpcontent/largemolecule.jpeg" >
	    	
	</image>
	</div>
	
	
	<div style="position:relative;" ng-if="selected== 'Stuff'">
	<image width="700" height="540" controls
	     src="/helpcontent/birddogem.png" >
	    	
	</image>
	<br/>
		<image width="700" height="540" controls
	     src="/helpcontent/dog.jpg" >
	    	
	</image>
	</div>
	--->
	</div>


</body>

</html>



