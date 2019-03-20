

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('OrderingCtrl', OrderingCtrl);

// Inject my dependencies
OrderingCtrl.$inject = ['$routeParams','$scope','$window'];

// Now create our controller function with all necessary logic

function OrderingCtrl($routeParams, $scope, $window) {
	//Html scope variables
	$scope.thisGuy = $window.user;
	console.log($scope.thisGuy);
	$scope.setting = "ordering";
	$window.district = "District Sanat";
	$scope.isAdmin = 0;
	$scope.catToAdd = {};
	$scope.yourCart = {};
	$scope.yourCart = {};
	$scope.selectedCart= {};
	$scope.selectedCat={};
	
	$scope.accessoryFilter = {};
	$scope.accessoryFilter.name = '';
	 $scope.addOrRemoveCats ={};
	 $scope.addOrRemoveCats.value = false;
	$scope.selectedCat.tier= 0;
	$scope.vars= {};
	$scope.vars.orderType = 'Personal';
	$scope.vars.orderTitle = $scope.thisGuy.userid;
	$scope.vars.isAdmin=0;
	$scope.vars.desiredonly = false;
	$scope.productListObj = {};
	$scope.AccessoryproductListObj = {};
	$scope.stores = loadProxy.loadDistrict($window.district); 
	$scope.selectedStore = $scope.stores[0].storeid;
	//$scope.thisGuy = {};
	//$scope.thisGuy.username = "admin";
	//$scope.thisGuy.accesslevel = 1;
	$scope.cartCostTotal ;
	$scope.storelist = {};
	$scope.Accstorelist = {};
	$scope.Accstorelist['stores'] = {}; 
	$scope.storelist['stores'] = {};
	
	$scope.tierCatList = {};
	$scope.tierCatList['Total'] = {};
	
	$scope.inventory = orderProxy.loadInventory();
	$scope.vars.currentInventory = "Phone";
	$scope.vars.currentAccessoryView = "Other";
	$scope.accessoryinventory = orderProxy.loadAccessoryInventory();
	
	
	$scope.productList = orderProxy.loadProductCatalog();
	$scope.accessoryproductList = orderProxy.loadAccessoryProductCatalog();
	if($scope.thisGuy.accesslevel == 0){
		$scope.vars.isAdmin = 1;
	}
		$scope.uploadRecord = loadProxy.getuploadrecord();
		$scope.uploadTime = new Date (1955,01,01,01,01);
		$scope.uploadFilename = "";
	for(var uploads in $scope.uploadRecord){
		
		if($scope.uploadRecord[uploads].type == 'inventory'){
			$scope.getDateFromSql($scope.uploadRecord[uploads].time);
			if($scope.uploadTime < $scope.getDateFromSql($scope.uploadRecord[uploads].time)){
				$scope.uploadTime = $scope.getDateFromSql($scope.uploadRecord[uploads].time); 
				//console.log($scope.uploadTime);
				//console.log("YES");
				$scope.uploadFilename = $scope.uploadRecord[uploads].filename;
			}
			
		}
	}
	//Load stuff settings;
	//Load real Stuff;
	var district = "District Sanat";
	$scope.phonecatlist = {};
	$scope.phonecatlist = orderProxy.loadPhoneCats();
	
	$scope.cartexists = function(product){
		if(product.mycart>0){
			product.checkboxqcart = true;
		}
	}
	
	$scope.spring = function (that){
		if(that==0){
			$scope.selectedCat ={};
			$scope.selectedCat.tier =0;
		}
		else{
		$scope.selectedCat = that;
		$scope.catToAdd.title = "";
		$scope.catToAdd.tier = that.tier+1;
		$scope.catToAdd.parent = that.id;
		$scope.catToAdd.finaltier = "false";
		}
	}
	$scope.selectStore = function (storeid){
		$scope.selectedStore = storeid;
		$scope.loadOrdersPlatform(); 
		$scope.loadOrder($scope.thisGuy.userid, 1);
	}
	
	$scope.addCat = function (){
		
		if($scope.selectedCat.tier==0){
			
			$scope.catToAdd.parent = 0;
			$scope.catToAdd.tier = 1;
			$scope.catToAdd.category = $scope.vars.currentAccessoryView;
			
		orderProxy.newPhoneCat($scope.catToAdd);	
		
		}
		else{
			
			$scope.catToAdd.category = $scope.vars.currentAccessoryView;
			orderProxy.newPhoneCat($scope.catToAdd);	
		
		}
		$scope.phonecatlist = orderProxy.loadPhoneCats();
		
	}
	
	
	$scope.deleteCat = function (that){
		//console.log(that);
		
			orderProxy.deleteCats(that.id);	
		
			$scope.phonecatlist = orderProxy.loadPhoneCats();
		$scope.setCatContainer();
		
		$scope.setAccCatContainer();
		
		}
		$scope.setSetting = function (set){
			$scope.setting = set;
		}
		
	$scope.setCat = function (product,catid,acctype){
		orderProxy.setCats(catid , product,acctype);	
		$scope.phonecatlist = orderProxy.loadPhoneCats();
		$scope.productList = orderProxy.loadProductCatalog();
		$scope.accessoryproductList = orderProxy.loadAccessoryProductCatalog();
		
		}
		$scope.changeStores = function (){
			$scope.loadOrdersPlatform();
			$scope.loadOrder($scope.thisGuy.userid, 1);
		}
		
		$scope.cartTotal = function(qty,cost){
			$scope.cartCostTotal = $scope.cartCostTotal + (qty * cost);  
		}
		$scope.loadOrdersPlatform = function(){
			
			
			$scope.productListObj={};
			for(var those in $scope.productList){
				var thisproduct = $scope.productList[those];
				$scope.productListObj[thisproduct.rqsku] = {};
				$scope.productListObj[thisproduct.rqsku] = thisproduct;
				$scope.productListObj[thisproduct.rqsku]['mydesired'] =0;
				$scope.productListObj[thisproduct.rqsku]['theirdesired'] =0;
				$scope.productListObj[thisproduct.rqsku]['mycart'] =0;
				$scope.productListObj[thisproduct.rqsku]['theircart'] =0;
				
				
			}
			$scope.AccessoryproductListObj ={};
			for(var those in $scope.accessoryproductList){
				var thisproduct = $scope.accessoryproductList[those];
				$scope.AccessoryproductListObj[thisproduct.rqsku] = {};
				$scope.AccessoryproductListObj[thisproduct.rqsku] = thisproduct;
				$scope.AccessoryproductListObj[thisproduct.rqsku]['mydesired'] =0;
				$scope.AccessoryproductListObj[thisproduct.rqsku]['theirdesired'] =0;
				$scope.AccessoryproductListObj[thisproduct.rqsku]['mycart'] =0;
				$scope.AccessoryproductListObj[thisproduct.rqsku]['theircart'] =0;
				
			}
			//console.log($scope.productListObj);
			//console.log($scope.AccessoryproductListObj);
			}
			$scope.loadOrdersPlatform(); 
			
			
			$scope.loadOrder = function(title,selfornot){
				var thing = {};
				thing.store = $scope.selectedStore; 
				thing.typeoforder = $scope.vars.orderType;
				thing.ordertitle = title;
				$scope.orderLoad = orderProxy.loadOrder(thing);	
		
		//console.log($scope.orderLoad);
				if ( selfornot ) {	
					for (var orders in $scope.orderLoad){
						//console.log($scope.orderLoad[orders]);
						var thisOrder = $scope.orderLoad[orders];
						
						if(typeof $scope.AccessoryproductListObj[thisOrder.product] !== 'undefined'){
							if(thisOrder.incart>0){
								$scope.AccessoryproductListObj[thisOrder.product].addtocart = true;
							}
							$scope.AccessoryproductListObj[thisOrder.product].mydesired = thisOrder.desiredcount;
							$scope.AccessoryproductListObj[thisOrder.product].mycart = thisOrder.incart;
						}
						if(typeof $scope.productListObj[thisOrder.product] !== 'undefined'){
							
							if(thisOrder.incart>0){
								$scope.productListObj[thisOrder.product].addtocart = true;
							}
							$scope.productListObj[thisOrder.product].mydesired = thisOrder.desiredcount;
							$scope.productListObj[thisOrder.product].mycart = thisOrder.incart;
						}
					}
				}
				if ( !selfornot ) {	
					for (var orders in $scope.orderLoad){
						
						var thisOrder = $scope.orderLoad.orders;
						
						if(typeof $scope.AccessoryproductListObj[thisOrder.product] !== 'undefined'){
							$scope.AccessoryproductListObj[thisOrder.product].theirdesired = thisOrder.desiredcount;
							$scope.AccessoryproductListObj[thisOrder.product].theircart = thisOrder.incart;
						}
						if(typeof $scope.productListObj[thisOrder.product] !== 'undefined'){
							$scope.productListObj[thisOrder.product].theirdesired = thisOrder.desiredcount;
							$scope.productListObj[thisOrder.product].theircart = thisOrder.incart;
						}
					}
				}
		}
		$scope.loadOrder($scope.thisGuy.userid, 1);
		
		$scope.setDesired = function(those){
			//console.log(those);
			var thing = {};
				thing.store = $scope.selectedStore; 
				thing.typeoforder = $scope.vars.orderType;
				thing.ordertitle = $scope.thisGuy.userid;
				thing.product = those.rqsku;
				if($scope.vars.currentInventory == "Phone"){
					thing.desiredcount = $scope.productListObj[thing.product].mydesired;
					thing.incart = $scope.productListObj[thing.product].mycart;
					if(thing.incart>0){
								$scope.productListObj[thing.product].addtocart = true;
							}
				}
				if($scope.vars.currentInventory == "Accessory"){
					thing.desiredcount = $scope.AccessoryproductListObj[thing.product].mydesired;
					thing.incart = $scope.AccessoryproductListObj[thing.product].mycart;
					if(thing.incart>0){
								$scope.AccessoryproductListObj[thing.product].addtocart = true;
							}
				}
				//console.log(thing);
				$scope.orderLoad = orderProxy.editOrder(thing);	
				//console.log($scope.orderLoad);
		}
		$scope.setQuickCart = function(thisthing){
			
			
			var thisStock = $scope.storelist['stores'][$scope.selectedStore]['cats'][thisthing.parentid]['skus'][thisthing.rqsku].stock;
			var thisDesired = thisthing.mydesired;
			var thismycart = thisthing.mycart;
			
			
			
			if(thisthing.addtocart){
				if(thismycart == 0 && thisDesired > thisStock){
					thisthing.mycart = thisDesired - thisStock; 
				}
				else if(1){
					
				}
			}
			
			
			else{
				if(thismycart>0){
					thisthing.mycart = 0; 
				}
			}
		}
		$scope.clickToCart = function(){
			
			
		}
		
		var addtoparents = function(storename, productcat,cost){
			//categories
			
			var catdad = $scope.storelist['stores'][storename]['cats'][productcat].parent;
			do{
				
			$scope.storelist['stores'][storename]['cats'][catdad]['stock'] = $scope.storelist['stores'][storename]['cats'][catdad]['stock'] +1;
			$scope.storelist['Total']['cats'][catdad]['stock'] = $scope.storelist['Total']['cats'][catdad]['stock'] +1;
			
			
			$scope.storelist['stores'][storename]['cats'][catdad]['costofstock'] = $scope.storelist['stores'][storename]['cats'][catdad]['costofstock'] +cost;
			$scope.storelist['Total']['cats'][catdad]['costofstock'] = $scope.storelist['Total']['cats'][catdad]['costofstock'] + cost;
			catdad = $scope.storelist['stores'][storename]['cats'][catdad].parent;
			}
			while(catdad>0);
			
		}
		var addtoaccparents = function(storename, productcat,cost){
			//categories
			
			var catdad = $scope.Accstorelist['stores'][storename]['cats'][productcat].parent;
			do{
				
			$scope.Accstorelist['stores'][storename]['cats'][catdad]['stock'] = $scope.Accstorelist['stores'][storename]['cats'][catdad]['stock'] +1;
			$scope.Accstorelist['Total']['cats'][catdad]['stock'] = $scope.Accstorelist['Total']['cats'][catdad]['stock'] +1;
			
			
			$scope.Accstorelist['stores'][storename]['cats'][catdad]['costofstock'] = $scope.Accstorelist['stores'][storename]['cats'][catdad]['costofstock'] +cost;
			$scope.Accstorelist['Total']['cats'][catdad]['costofstock'] = $scope.Accstorelist['Total']['cats'][catdad]['costofstock'] + cost;
			catdad = $scope.Accstorelist['stores'][storename]['cats'][catdad].parent;
			}
			while(catdad>0);
			
		}
		$scope.addInventoryToContainerByStore = function(){
			//load inventory by district thru proxy
			
			 
			
			
			
			
			for(var those in $scope.inventory){
				var thisitem = $scope.inventory[those];
				var parentid = $scope.productListObj[thisitem.productsku].parentid ;
				var costofdevice = thisitem.cost;
				//console.log(thisitem);
				if($scope.productListObj[thisitem.productsku].parentid > 0 && thisitem.category == "Phone" ){
					
					$scope.storelist['stores'][thisitem.storename]['total']['costofstock'] =
					$scope.storelist['stores'][thisitem.storename]['total']['costofstock'] + costofdevice;
					
					
				//console.log($scope.storelist['stores'][thisitem.storename]['cats'][$scope.productListObj[thisitem.productsku].parentid]);
				$scope.storelist['stores'][thisitem.storename]['cats'][parentid]['skus'][thisitem.productsku]['stock'] = 
				$scope.storelist['stores'][thisitem.storename]['cats'][parentid]['skus'][thisitem.productsku]['stock']+1;
				$scope.storelist['stores'][thisitem.storename]['cats'][parentid]['skus'][thisitem.productsku]['costofstock'] = 
				$scope.storelist['stores'][thisitem.storename]['cats'][parentid]['skus'][thisitem.productsku]['costofstock']+costofdevice;
				$scope.storelist['Total']['cats'][parentid]['skus'][thisitem.productsku]['stock'] = 
				$scope.storelist['Total']['cats'][parentid]['skus'][thisitem.productsku]['stock']+1;
				$scope.storelist['Total']['cats'][parentid]['skus'][thisitem.productsku]['costofstock'] = 
				$scope.storelist['Total']['cats'][parentid]['skus'][thisitem.productsku]['costofstock'] + costofdevice;
				$scope.storelist['stores'][thisitem.storename]['cats'][parentid]['stock'] = 
				$scope.storelist['stores'][thisitem.storename]['cats'][parentid]['stock']+ 1;
				$scope.storelist['Total']['cats'][parentid]['stock'] = 
				$scope.storelist['Total']['cats'][parentid]['stock']+ 1;
				$scope.storelist['stores'][thisitem.storename]['cats'][parentid]['costofstock'] = 
				$scope.storelist['stores'][thisitem.storename]['cats'][parentid]['costofstock']+ costofdevice;
				$scope.storelist['Total']['cats'][parentid]['costofstock'] = 
				$scope.storelist['Total']['cats'][parentid]['costofstock']+ costofdevice;
				//console.log($scope.storelist['stores'][thisitem.storename]['cats'][parentid]['stock']);
				//console.log($scope.storelist['stores'][thisitem.storename]['cats'][parentid]);
				//console.log(thisitem.storename);
				addtoparents(thisitem.storename,parentid,costofdevice);
				
				}
				
			}
			//console.log($scope.storelist['stores']);
			//console.log($scope.storelist['stores']);
		}
		
		$scope.setCatContainer = function(){
			
				
			var storelistserver = $scope.stores;
			 $scope.storelist['Total'] = {};
			 
			for(var stores in storelistserver){
				$scope.storelist['stores'][storelistserver[stores].storeid]={};
				$scope.storelist['stores'][storelistserver[stores].storeid]['total'] = {};
				$scope.storelist['stores'][storelistserver[stores].storeid]['total']['costofstock'] = 0;
				$scope.storelist['stores'][storelistserver[stores].storeid]['total']['costofcart'] = 0;
				$scope.storelist['stores'][storelistserver[stores].storeid]['total']['costofcartB'] = 0;
				$scope.storelist['stores'][storelistserver[stores].storeid]['total']['costofreceived'] = 0;
				$scope.storelist['stores'][storelistserver[stores].storeid]['total']['vendorrebate'] = 0;
				$scope.storelist['stores'][storelistserver[stores].storeid]['cats'] ={} ;
			
			//add productlist to phonecatlist object
			
			
			
			var thiscat = 0;
			for(var those in $scope.phonecatlist){
				thiscat = $scope.phonecatlist[those];
				
				$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thiscat.id] = {} ;
				$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thiscat.id]['id'] = thiscat.id;
				$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thiscat.id]['title'] = thiscat.title;
				$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thiscat.id]['parent'] = thiscat.parent;
				$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thiscat.id]['finaltier'] = thiscat.finaltier;
				$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thiscat.id]['costofstock']=0;
				$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thiscat.id]['stock']=0;
				if (thiscat.finaltier==true){
				$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thiscat.id]['skus'] = {};
				}else if(thiscat.finaltier==false) {
				$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thiscat.id]['children'] = [];
				}
				
			}
			for(var those in $scope.productList){
				var thisproduct = $scope.productList[those];
				
				//console.log(thisproduct);
				if(thisproduct.parentid > 0){
					//console.log($scope.storelist['stores'][storelistserver[stores].storeid]['cats']);
					if(typeof $scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thisproduct.parentid] == 'undefined'){
						orderProxy.setCatParentZero(thisproduct.rqsku);
					}
					else{
					$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]= {};
					$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['name']= thisproduct.name;
					$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['parent']= thisproduct.parentid;
					$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['rqsku']= thisproduct.rqsku;
					$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['highcost']= thisproduct.highcost;
					$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['stock']=0;
					$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['sold']=0;
					$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['cart']=0;
					$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['costofstock']=0;
					}
					
				}
				
			}
			for(var those in $scope.storelist['stores'][storelistserver[stores].storeid]['cats']){
				var thisproduct = $scope.storelist['stores'][storelistserver[stores].storeid]['cats'][those];
				//console.log(thisproduct);
				if(thisproduct.parent > 0){
					
					$scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thisproduct.parent]['children'].push(thisproduct.id);
					//console.log($scope.storelist['stores'][storelistserver[stores].storeid]['cats'][thisproduct.parent]['children']);
				}
				
				}
				
				
			}
			
			
			$scope.storelist['Total']={};
				$scope.storelist['Total']['cats'] ={} ;
			
			//add productlist to phonecatlist object
			
				
			
			
			var thiscat = 0;
			for(var those in $scope.phonecatlist){
				thiscat = $scope.phonecatlist[those];
				
				$scope.storelist['Total']['cats'][thiscat.id] = {} ;
				$scope.storelist['Total']['cats'][thiscat.id]['id'] = thiscat.id;
				$scope.storelist['Total']['cats'][thiscat.id]['title'] = thiscat.title;
				$scope.storelist['Total']['cats'][thiscat.id]['parent'] = thiscat.parent;
				$scope.storelist['Total']['cats'][thiscat.id]['finaltier'] = thiscat.finaltier;
				$scope.storelist['Total']['cats'][thiscat.id]['costofstock']=0;
			
				$scope.storelist['Total']['cats'][thiscat.id]['stock']=0;
				if (thiscat.finaltier==true){
				$scope.storelist['Total']['cats'][thiscat.id]['skus'] = {};
				}else if(thiscat.finaltier==false) {
				$scope.storelist['Total']['cats'][thiscat.id]['children'] = [];
				}
				
			}
			for(var those in $scope.productList){
				var thisproduct = $scope.productList[those];
				
				//console.log(thisproduct);
				if(thisproduct.parentid > 0){
					$scope.storelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]= {};
					$scope.storelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['name']= thisproduct.name;
					$scope.storelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['parent']= thisproduct.parentid;
					$scope.storelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['rqsku']= thisproduct.rqsku;
					$scope.storelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['highcost']= thisproduct.highcost;
					$scope.storelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['stock']=0;
					$scope.storelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['sold']=0;
					$scope.storelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['cart']=0;
					$scope.storelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['costofstock']=0;
					
					//catList['cats'][thiscat.id]['cost']=0;
					//catList['cats'][thiscat.id]['stock']=0;
				}
				
			}
			for(var those in $scope.storelist['Total']['cats']){
				var thisproduct = $scope.storelist['Total']['cats'][those];
				//console.log(thisproduct);
				if(thisproduct.parent > 0){
					
					$scope.storelist['Total']['cats'][thisproduct.parent]['children'].push(thisproduct.id);
					//console.log($scope.storelist['Total']['cats'][thisproduct.parent]['children']);
				}
				
				}
				
				
			//console.log($scope.storelist['stores']);
			}
			
			
			$scope.setAccCatContainer = function(){
			
				
			var accstorelistserver = $scope.stores;
			 $scope.Accstorelist['Total'] = {};
			 
			for(var stores in accstorelistserver){
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]={};
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['total'] = {};
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['total']['costofstock'] = 0;
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['total']['costofcart'] = 0;
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['total']['costofcartB'] = 0;
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['total']['costofreceived'] = 0;
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['total']['costofsold'] = 0;
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['total']['gpfromacc'] = 0;
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'] ={} ;
			
			//add productlist to phonecatlist object
			
			
			
			var thiscat = 0;
			for(var those in $scope.phonecatlist){
				thiscat = $scope.phonecatlist[those];
				
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thiscat.id] = {} ;
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thiscat.id]['id'] = thiscat.id;
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thiscat.id]['title'] = thiscat.title;
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thiscat.id]['parent'] = thiscat.parent;
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thiscat.id]['finaltier'] = thiscat.finaltier;
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thiscat.id]['costofstock']=0;
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thiscat.id]['stock']={}
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thiscat.id]['stock']['case']=0;
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thiscat.id]['stock']['screen']=0;
				if (thiscat.finaltier==true){
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thiscat.id]['skus'] = {};
				}else if(thiscat.finaltier==false) {
				$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thiscat.id]['children'] = [];
				}
				
			}
			for(var those in $scope.accessoryproductList){
				var thisproduct = $scope.accessoryproductList[those];
				
				//console.log(thisproduct);
				if(thisproduct.parentid > 0){
					//console.log($scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats']);
					if(typeof $scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thisproduct.parentid] == 'undefined'){
						orderProxy.setCatParentZero(thisproduct.rqsku);
					}
					else{
					$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]= {};
					$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['name']= thisproduct.name;
					$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['parent']= thisproduct.parentid;
					$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['rqsku']= thisproduct.rqsku;
					$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['highcost']= thisproduct.highcost;
					$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['stock']=0;
					$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['sold']=0;
					$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['cart']=0;
					$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['costofstock']=0;
					}
					
				}
				
			}
			for(var those in $scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats']){
				var thisproduct = $scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][those];
				//console.log(thisproduct);
				if(thisproduct.parent > 0){
					
					$scope.Accstorelist['stores'][accstorelistserver[stores].storeid]['cats'][thisproduct.parent]['children'].push(thisproduct.id);
					//console.log($scope.storelist['stores'][accstorelistserver[stores].storeid]['cats'][thisproduct.parent]['children']);
				}
				
				}
				
				
			}
			
			
			$scope.Accstorelist['Total']={};
				$scope.Accstorelist['Total']['cats'] ={} ;
			
			//add productlist to phonecatlist object
			$scope.AccessoryproductListObj ={};
			for(var those in $scope.accessoryproductList){
				var thisproduct = $scope.accessoryproductList[those];
				$scope.AccessoryproductListObj[thisproduct.rqsku] = {};
				$scope.AccessoryproductListObj[thisproduct.rqsku] = thisproduct;
			}
				
			
			
			var thiscat = 0;
			for(var those in $scope.phonecatlist){
				thiscat = $scope.phonecatlist[those];
				
				$scope.Accstorelist['Total']['cats'][thiscat.id] = {} ;
				$scope.Accstorelist['Total']['cats'][thiscat.id]['id'] = thiscat.id;
				$scope.Accstorelist['Total']['cats'][thiscat.id]['title'] = thiscat.title;
				$scope.Accstorelist['Total']['cats'][thiscat.id]['parent'] = thiscat.parent;
				$scope.Accstorelist['Total']['cats'][thiscat.id]['finaltier'] = thiscat.finaltier;
				$scope.Accstorelist['Total']['cats'][thiscat.id]['costofstock']=0;
			
				$scope.Accstorelist['Total']['cats'][thiscat.id]['stock']=0;
				if (thiscat.finaltier==true){
				$scope.Accstorelist['Total']['cats'][thiscat.id]['skus'] = {};
				}else if(thiscat.finaltier==false) {
				$scope.Accstorelist['Total']['cats'][thiscat.id]['children'] = [];
				}
				
			}
			for(var those in $scope.accessoryproductList){
				var thisproduct = $scope.accessoryproductList[those];
				
				//console.log(thisproduct);
				if(thisproduct.parentid > 0){
					$scope.Accstorelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]= {};
					$scope.Accstorelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['name']= thisproduct.name;
					$scope.Accstorelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['parent']= thisproduct.parentid;
					$scope.Accstorelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['rqsku']= thisproduct.rqsku;
					$scope.Accstorelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['highcost']= thisproduct.highcost;
					$scope.Accstorelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['stock']=0;
					$scope.Accstorelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['sold']=0;
					$scope.Accstorelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['cart']=0;
					$scope.Accstorelist['Total']['cats'][thisproduct.parentid]['skus'][thisproduct.rqsku]['costofstock']=0;
					
					//catList['cats'][thiscat.id]['cost']=0;
					//catList['cats'][thiscat.id]['stock']=0;
				}
				
			}
			for(var those in $scope.Accstorelist['Total']['cats']){
				var thisproduct = $scope.Accstorelist['Total']['cats'][those];
				//console.log(thisproduct);
				if(thisproduct.parent > 0){
					
					$scope.Accstorelist['Total']['cats'][thisproduct.parent]['children'].push(thisproduct.id);
					//console.log($scope.Accstorelist['Total']['cats'][thisproduct.parent]['children']);
				}
				
				}
				
				
			//console.log($scope.Accstorelist['stores']);
			}
			
			
			
			/*
			var foundone = false;
			$scope.tierCatList['1'];
			for(var i = 1; i<10;i++){
				
				for(cats in $scope.phonecatlist){
					var thiscat = $scope.phonecatlist[cats];
					if(thiscat.tier == i){
						if(typeof $scope.tierCatList[thiscat.id] == 'undefined'){
							$scope.tierCatList[i][thiscat.id] = thiscat;
							
							
						}
						
					}
				}
			}
			
			
			for(items in $scope.inventory){
				var thisItem = $scope.inventory[items];
				if(typeof $scope.storelist['stores'][thisItem.storename] == 'undefined'){
					$scope.storelist['stores'][thisItem.storename] = {};
					
				}
				
			}
			$scope.storelist['stores']['Total'] = {};
			
			*/
		$scope.addAccInventoryToContainerByStore = function(){
			//load inventory by district thru proxy
			
			console.log($scope.AccessoryproductListObj);
			console.log($scope.accessoryinventory);
			
			
			for(var those in $scope.accessoryinventory){
				var thisitem = $scope.accessoryinventory[those];
				//console.log($scope.AccessoryproductListObj);
				//console.log(thisitem.productsku);
				//console.log($scope.AccessoryproductListObj[thisitem.productsku]);
				var parentid = $scope.AccessoryproductListObj[thisitem.productsku].parentid ;
				var costofdevice = thisitem.cost;
				
				$scope.Accstorelist['stores'][thisitem.storename]['total']['costofstock'] = 
				$scope.Accstorelist['stores'][thisitem.storename]['total']['costofstock'] + (costofdevice);
				if($scope.AccessoryproductListObj[thisitem.productsku].parentid > 0){
					//console.log($scope.storelist['stores']);
				//console.log($scope.storelist['stores'][thisitem.storename]['cats'][$scope.productListObj[thisitem.productsku].parentid]);
				
				$scope.Accstorelist['stores'][thisitem.storename]['cats'][parentid]['skus'][thisitem.productsku]['stock'] = 
				$scope.Accstorelist['stores'][thisitem.storename]['cats'][parentid]['skus'][thisitem.productsku]['stock']+ thisitem.quantity;
				$scope.Accstorelist['stores'][thisitem.storename]['cats'][parentid]['skus'][thisitem.productsku]['costofstock'] = 
				$scope.Accstorelist['stores'][thisitem.storename]['cats'][parentid]['skus'][thisitem.productsku]['costofstock']+costofdevice;
				$scope.Accstorelist['Total']['cats'][parentid]['skus'][thisitem.productsku]['stock'] = 
				$scope.Accstorelist['Total']['cats'][parentid]['skus'][thisitem.productsku]['stock']+thisitem.quantity;
				$scope.Accstorelist['Total']['cats'][parentid]['skus'][thisitem.productsku]['costofstock'] = 
				$scope.Accstorelist['Total']['cats'][parentid]['skus'][thisitem.productsku]['costofstock'] + costofdevice;
				//console.log($scope.AccessoryproductListObj[thisitem.productsku]);
				if($scope.AccessoryproductListObj[thisitem.productsku].accessorytype == 'case'){
					$scope.Accstorelist['stores'][thisitem.storename]['cats'][parentid]['stock']['case'] =  
				$scope.Accstorelist['stores'][thisitem.storename]['cats'][parentid]['stock']['case']+ thisitem.quantity;
				}
				if($scope.AccessoryproductListObj[thisitem.productsku].accessorytype == 'screen'){
					$scope.Accstorelist['stores'][thisitem.storename]['cats'][parentid]['stock']['screen'] = 
				$scope.Accstorelist['stores'][thisitem.storename]['cats'][parentid]['stock']['screen']+ thisitem.quantity;
				}
				
				$scope.Accstorelist['Total']['cats'][parentid]['stock'] = 
				$scope.Accstorelist['Total']['cats'][parentid]['stock']+ thisitem.quantity;
				$scope.Accstorelist['stores'][thisitem.storename]['cats'][parentid]['costofstock'] = 
				$scope.Accstorelist['stores'][thisitem.storename]['cats'][parentid]['costofstock']+ costofdevice;
				$scope.Accstorelist['Total']['cats'][parentid]['costofstock'] = 
				$scope.Accstorelist['Total']['cats'][parentid]['costofstock']+ costofdevice;
				//console.log($scope.storelist['stores'][thisitem.storename]['cats'][parentid]['stock']);
				//console.log($scope.storelist['stores'][thisitem.storename]['cats'][parentid]);
				//console.log(thisitem.storename);
				addtoaccparents(thisitem.storename,parentid,costofdevice);
				
				}
				
			}
			//console.log($scope.Accstorelist['stores']);
			//console.log($scope.storelist['stores']);
		}
		
		$scope.setCatContainer();
		$scope.setAccCatContainer();
		$scope.addInventoryToContainerByStore();
		$scope.addAccInventoryToContainerByStore();
		console.log($scope.storelist);
	}
	
	//console.log(f.getclockinclockout("20171001","20171130","District Sanat"));
	//load all the goals and all the users hours
	
	
	//console.log($scope.drawlist);
	
	
	
	
	
	
	
	
	

   
    	
	
