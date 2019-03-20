

// Now create our controller function with all necessary logic

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('OrderingCtrl', OrderingCtrl);
// Inject my dependencies
OrderingCtrl.$inject = ['$routeParams','$scope','$window'];

function OrderingCtrl($routeParams, $scope, $window) {
	//Html scope variables
	$scope.stores = loadProxy.loadDistrict($window.district); 
	$scope.vars= {};
	$scope.vars.selectedStore = $scope.stores[0];
	$scope.thisGuy = $window.user;
	$scope.selectedz = "";
	// Proxy Load stuff
	$scope.productList = orderProxy.loadProductCatalog();
	$scope.accessoryproductList = orderProxy.loadAccessoryProductCatalog();
	$scope.inventory = orderProxy.loadInventory();
	$scope.accessoryinventory = orderProxy.loadAccessoryInventory();
	$scope.phonecatlist = orderProxy.loadPhoneCats();
	$scope.phonecatlistbyid = {};
	$scope.masterSkuList = {};
	$scope.orderTree = {};
	 $scope.addOrRemoveCats ={};
	 $scope.addOrRemoveCats.value = false;
	 $scope.accessoryFilter = {};
	$scope.vars.accessoryFilter = "";
	 $scope.ListOfOrdersByName = {};
	// Function passed inside of Tree to get Product
	
	function selectElementContents(el) {
        var body = document.body, range, sel;
        if (document.createRange && window.getSelection) {
            range = document.createRange();
            sel = window.getSelection();
            sel.removeAllRanges();
            try {
                range.selectNodeContents(el);
                sel.addRange(range);
            } catch (e) {
                range.selectNode(el);
                sel.addRange(range);
            }
            document.execCommand("copy");

        } else if (body.createTextRange) {
            range = body.createTextRange();
            range.moveToElementText(el);
            range.select();
            range.execCommand("Copy");
        }
    }
    
	$scope.copyStuff = function(){
		
		//$window.clipboardData.setData ("Text", "DogTown");
		var stuffThing = document.getElementById("gotobedontime");
		stuffThing.style.display = "inline-block";
		selectElementContents(document.getElementById("gotobedontime"));
		stuffThing.style.display = "none";
		//console.log(stuffThing);
		//stuffThing[0].select(); 
		//document.execCommand("Copy");
	}
	
	
	$scope.captureSelect = function(x){
		$scope.selectedz = x;
	}
	$scope.orderLoad = orderProxy.loadOrder();	
				
				
				
				for(var thix in $scope.orderLoad){
					var thisOrder = $scope.orderLoad[thix];
					if(typeof $scope.ListOfOrdersByName[thisOrder.ordertitle]== 'undefined'){
						$scope.ListOfOrdersByName[thisOrder.ordertitle] = {};
						$scope.ListOfOrdersByName[thisOrder.ordertitle].name = thisOrder.ordertitle;
					}
					
				}
	
	// New Category Stuff
	$scope.vars.newCat = {};
	$scope.vars.newCat.tier = {};
	$scope.vars.newCat.parent = {};
	$scope.vars.newCat.category = {};
	$scope.vars.newCat.title = {};
	$scope.vars.newCat.finaltier = {};
	
	$scope.addPhoneCat = function (){
		
				var thisCat = $scope.phonecatlistbyid[$scope.selectedz];
				
				var parentString = thisCat['parent'].toString();
				var thisParentPath = parentString.split(",");
				$scope.vars.newCat.tier = thisParentPath.length + 1;
				$scope.vars.newCat.parent = parentString;
				$scope.vars.newCat.category = $scope.vars.currentInventory;
				orderProxy.newPhoneCat($scope.vars.newCat);
				$scope.generateDataForTrees();
				
		
	}


	
	$scope.setting = "inventory";
	$window.district = "District Sanat";
	$scope.vars.orderType = 'Personal';
	$scope.vars.orderTitle = $scope.thisGuy.userid;
	$scope.vars.desiredonly = false;
	
	$scope.vars.selectedOrder = "";
	if($scope.ListOfOrdersByName[$scope.thisGuy.userid] == 'defined'){
	$scope.vars.selectedOrder = $scope.ListOfOrdersByName[$scope.thisGuy.userid];
	}
	$scope.vars.currentInventory = "Phone";
	$scope.vars.currentAccessoryView='device';
	$scope.vars.isAdmin=0;
	var district = "District Sanat";
	
	var productArray = ['case','screen','device','other'];
	
	$scope.createStoreProductList = function (){
		$scope.masterSkuList['stores'] = {};
		for(var store in $scope.stores){
			$scope.masterSkuList['stores'][$scope.stores[store].storeid] = {};	
			$scope.masterSkuList['stores'][$scope.stores[store].storeid]['skulist'] = {};
			}
			$scope.masterSkuList['district']= {};		
			$scope.masterSkuList['district']['skulist']= {};
		for(var products in $scope.productList){
			
			for(var store in $scope.stores){
				
			$scope.masterSkuList['stores'][$scope.stores[store].storeid]['skulist'][$scope.productList[products].rqsku] = {};
			
			$scope.masterSkuList['stores'][$scope.stores[store].storeid]['skulist'][$scope.productList[products].rqsku]['stock'] = 0;
			$scope.masterSkuList['stores'][$scope.stores[store].storeid]['skulist'][$scope.productList[products].rqsku]['mydesired'] = 0;
			$scope.masterSkuList['stores'][$scope.stores[store].storeid]['skulist'][$scope.productList[products].rqsku]['mycart'] = 0;
			$scope.masterSkuList['stores'][$scope.stores[store].storeid]['skulist'][$scope.productList[products].rqsku]['theircart'] = 0;
			$scope.masterSkuList['stores'][$scope.stores[store].storeid]['skulist'][$scope.productList[products].rqsku]['theirdesired'] = 0; 
			}
			
			
			$scope.masterSkuList['district']['skulist'][$scope.productList[products].rqsku] = {};
		
			$scope.masterSkuList['district']['skulist'][$scope.productList[products].rqsku]['stock'] = 0;
			$scope.masterSkuList['district']['skulist'][$scope.productList[products].rqsku]['mydesired'] = 0;
			$scope.masterSkuList['district']['skulist'][$scope.productList[products].rqsku]['mycart'] = 0;
			$scope.masterSkuList['district']['skulist'][$scope.productList[products].rqsku]['theircart'] = 0;
			$scope.masterSkuList['district']['skulist'][$scope.productList[products].rqsku]['theirdesired'] = 0;
			
		}
		for(var products in $scope.accessoryproductList){
			
			for(var store in $scope.stores){
			
			$scope.masterSkuList['stores'][$scope.stores[store].storeid]['skulist'][$scope.accessoryproductList[products].rqsku] = {};
			
			$scope.masterSkuList['stores'][$scope.stores[store].storeid]['skulist'][$scope.accessoryproductList[products].rqsku]['stock'] = 0;
			$scope.masterSkuList['stores'][$scope.stores[store].storeid]['skulist'][$scope.accessoryproductList[products].rqsku]['mydesired'] = 0;
			$scope.masterSkuList['stores'][$scope.stores[store].storeid]['skulist'][$scope.accessoryproductList[products].rqsku]['mycart'] = 0;
			$scope.masterSkuList['stores'][$scope.stores[store].storeid]['skulist'][$scope.accessoryproductList[products].rqsku]['theircart'] = 0;
			$scope.masterSkuList['stores'][$scope.stores[store].storeid]['skulist'][$scope.accessoryproductList[products].rqsku]['theirdesired'] = 0; 
			} 
			
			
			$scope.masterSkuList['district']['skulist'][$scope.accessoryproductList[products].rqsku] = {};
			
			$scope.masterSkuList['district']['skulist'][$scope.accessoryproductList[products].rqsku]['stock'] = 0;
			$scope.masterSkuList['district']['skulist'][$scope.accessoryproductList[products].rqsku]['mydesired'] = 0;
			$scope.masterSkuList['district']['skulist'][$scope.accessoryproductList[products].rqsku]['mycart'] = 0;
			$scope.masterSkuList['district']['skulist'][$scope.accessoryproductList[products].rqsku]['theircart'] = 0;
			$scope.masterSkuList['district']['skulist'][$scope.accessoryproductList[products].rqsku]['theirdesired'] = 0;
		}
		
		
		

	}
	
	
	
	$scope.loadInventoryToSkuList = function(){
		
		$scope.inventory = orderProxy.loadInventory();
		$scope.accessoryinventory = orderProxy.loadAccessoryInventory();
		
		for(var items in $scope.inventory){
			var thisItem = $scope.inventory[items];
			
			$scope.masterSkuList['stores'][thisItem.storename]['skulist'][thisItem.productsku]['stock'] =
			$scope.masterSkuList['stores'][thisItem.storename]['skulist'][thisItem.productsku]['stock'] + thisItem.quantity;
			
			$scope.masterSkuList['district']['skulist'][thisItem.productsku]['stock'] = 
			$scope.masterSkuList['district']['skulist'][thisItem.productsku]['stock'] + thisItem.quantity;
		}
		for(var items in $scope.accessoryinventory){
			var thisItem = $scope.accessoryinventory[items];
			$scope.masterSkuList['stores'][thisItem.storename]['skulist'][thisItem.productsku]['stock'] =
			$scope.masterSkuList['stores'][thisItem.storename]['skulist'][thisItem.productsku]['stock'] + thisItem.quantity;
			
			$scope.masterSkuList['district']['skulist'][thisItem.productsku]['stock'] =
			$scope.masterSkuList['district']['skulist'][thisItem.productsku]['stock'] + thisItem.quantity;
		}
		
	}
	

	
	
	
	
	
	
	
	$scope.initCategoryListByID = function (){
		
		var settingArray = ['mydesired', 'theirdesired', 'mycart', 'theircart', 'stock' ];
		
		
		for(var dem in $scope.phonecatlist){
			$scope.phonecatlistbyid[$scope.phonecatlist[dem].id]=$scope.phonecatlist[dem];
			$scope.phonecatlistbyid[$scope.phonecatlist[dem].id]['products'] = {};
			for(var dat in productArray){
				$scope.phonecatlistbyid[$scope.phonecatlist[dem].id]['products'][productArray[dat]] = {};
				
			}
			$scope.phonecatlistbyid[$scope.phonecatlist[dem].id]['stores'] = {};
			for(var storez in $scope.stores){
			var thisStore = $scope.stores[storez];
			$scope.phonecatlistbyid[$scope.phonecatlist[dem].id]['stores'][thisStore.storeid]= {};
			
			$scope.phonecatlistbyid[$scope.phonecatlist[dem].id]['stores'][thisStore.storeid]['totals'] = {};
			for(var dat in productArray){
				
				$scope.phonecatlistbyid[$scope.phonecatlist[dem].id]['stores'][thisStore.storeid]['totals'][productArray[dat]]= {};
				for(var diz in settingArray){
					$scope.phonecatlistbyid[$scope.phonecatlist[dem].id]['stores'][thisStore.storeid]['totals'][productArray[dat]][settingArray[diz]]=0;	
				}
				
			}
			
			
			
			
		}
		
	}
	}
	
	
	
	
	
	

	
	
	$scope.generateDataForTrees = function(){
			
	
	
	$scope.orderTree['Phone'] = {};
	$scope.orderTree['Phone']['children'] = [];
	$scope.orderTree['Other'] = {};
	$scope.orderTree['Other']['children'] = [];
	$scope.orderTree['byRQSku'] = {};
	var tierCount = 0;
	var tierNotFound = 1;
	
	while(tierNotFound){
		tierCount = tierCount + 1;
		tierNotFound = 0;
		for(var phonecat in $scope.phonecatlist){
				var thisphonecat = $scope.phonecatlist[phonecat];
				var parentString = thisphonecat.parent.toString();
				var thisParentPath = parentString.split(",");
				var phonecatObj = {};
				if(thisphonecat.tier == tierCount){
					
					if(thisphonecat.finaltier == false){
						thisphonecat['children']=[];
					}
					thisphonecat.selected = false;
					tierNotFound = 1;
					
					var stringThingMain = "$scope.orderTree[thisphonecat.category].children";
					var equate = " = {}";
					
					var stringThing = stringThingMain;
					var tempArrayObj = [];
					var currentLook;
					for(var i = 1; i < tierCount; i++){
						
						tempArrayObj = eval(stringThing);
						for(var those in tempArrayObj ){
							if(tempArrayObj[those].id == thisParentPath[i-1]){
								
								stringThing = stringThing + "["+ (those) +"].children";
							}
						}
						
							
						
						
					}
					
					stringThing = stringThing + ".push(thisphonecat)";
					//console.log(thisphonecat);
					eval(stringThing);
					
					
				}
				
		}
		
	}
	
	}
	
	$scope.generateDataForTrees();
	//console.log($scope.orderTree);
	
	
	
	
	$scope.fillCatByIDList = function (){
	
	
	for(var demz in $scope.productList){
			var thisProduct = $scope.productList[demz];
			var thisCat = $scope.phonecatlistbyid[thisProduct.parentid];
			if(thisProduct.parentid!=0){
				var parentString = thisCat['parent'].toString();
				var thisParentPath = parentString.split(",");
				for (var parents in thisParentPath){
					$scope.phonecatlistbyid[thisParentPath[parents]]['products']['device'][thisProduct.rqsku]={};
						$scope.phonecatlistbyid[thisParentPath[parents]]['products']['device'][thisProduct.rqsku] = thisProduct;
						}
					}
	}
	for(var demz in $scope.accessoryproductList){
			var thisProduct = $scope.accessoryproductList[demz];
			var thisCat = $scope.phonecatlistbyid[thisProduct.parentid];
			if(thisProduct.parentid!=0){
				var parentString = thisCat['parent'].toString();
				var thisParentPath = parentString.split(",");
				for(var parents in thisParentPath){
						if(thisProduct.accessorybelongstodevice){
							$scope.phonecatlistbyid[thisParentPath[parents]]['products'][thisProduct.accessorytype][thisProduct.rqsku] = thisProduct;
						}
						else if(!thisProduct.accessorybelongstodevice){	
							$scope.phonecatlistbyid[thisParentPath[parents]]['products']['other'][thisProduct.rqsku] = thisProduct;
						}
					}
			}
	}
	
	}
	$scope.addNumbersToCatList = function (){
		for(var phoneCat in $scope.phonecatlistbyid){
			var thisPhoneCat = $scope.phonecatlistbyid[phoneCat];
			$scope.returnSDC(thisPhoneCat);
			console.log($scope.phonecatlistbyid[phoneCat]);
		}
		
		
		
	}
	
	
	
		$scope.returnSDC = function (skulist){
		var sum = 0;
		
		
		for( var store in skulist['stores'] ){
			skulist['stores'][store]['totals']['device']['stock'] = 0;
			skulist['stores'][store]['totals']['device']['mydesired'] = 0;
			 skulist['stores'][store]['totals']['device']['mycart'] = 0;
		
		for(var diz in skulist.products.device){
			
			var thisSku = skulist.products['device'][diz];
			
			
			skulist['stores'][store]['totals']['device']['stock'] =
			 skulist['stores'][store]['totals']['device']['stock'] + 
			 $scope.masterSkuList['stores'][store]['skulist'][thisSku.rqsku].stock;
			
			
			skulist['stores'][store]['totals']['device']['mydesired'] =
			 skulist['stores'][store]['totals']['device']['mydesired'] + 
			 $scope.masterSkuList['stores'][store]['skulist'][thisSku.rqsku].mydesired;
			 
			 skulist['stores'][store]['totals']['device']['mycart'] =
			 skulist['stores'][store]['totals']['device']['mycart'] + 
			 $scope.masterSkuList['stores'][store]['skulist'][thisSku.rqsku].mycart;
		}
		
		
		}
		
		return skulist;
	}
	
	
	
	
	$scope.loadOrdersPlatform = function(){
			
			
			$scope.productListObj={};
			for(var those in $scope.productList){
				var thisproduct = $scope.productList[those];
				$scope.productListObj[thisproduct.rqsku] = {};
				
				$scope.productListObj[thisproduct.rqsku] = thisproduct;
				$scope.productListObj[thisproduct.rqsku]['stores'] = {};
				for(var store in $scope.stores){
					var thisStore = $scope.stores[store];
					
					$scope.productListObj[thisproduct.rqsku]['stores'][thisStore.storeid] = {};
					$scope.productListObj[thisproduct.rqsku]['stores'][thisStore.storeid]['mydesired'] =0;
					$scope.productListObj[thisproduct.rqsku]['stores'][thisStore.storeid]['theirdesired'] =0;
					$scope.productListObj[thisproduct.rqsku]['stores'][thisStore.storeid]['mycart'] =0;
					$scope.productListObj[thisproduct.rqsku]['stores'][thisStore.storeid]['theircart'] =0;
					$scope.productListObj[thisproduct.rqsku]['stores'][thisStore.storeid]['stock'] =0;
					
				}
				
				
				
			}
			$scope.AccessoryproductListObj ={};
			for(var those in $scope.accessoryproductList){
				var thisproduct = $scope.accessoryproductList[those];
				$scope.AccessoryproductListObj[thisproduct.rqsku] = {};
				$scope.AccessoryproductListObj[thisproduct.rqsku] = thisproduct;
				$scope.AccessoryproductListObj[thisproduct.rqsku]['stores'] = {};
				for(var store in $scope.stores){
					var thisStore = $scope.stores[store];
					$scope.AccessoryproductListObj[thisproduct.rqsku]['stores'][thisStore.storeid] = {};
					$scope.AccessoryproductListObj[thisproduct.rqsku]['stores'][thisStore.storeid]['mydesired'] =0;
					$scope.AccessoryproductListObj[thisproduct.rqsku]['stores'][thisStore.storeid]['theirdesired'] =0;
					$scope.AccessoryproductListObj[thisproduct.rqsku]['stores'][thisStore.storeid]['mycart'] =0;
					$scope.AccessoryproductListObj[thisproduct.rqsku]['stores'][thisStore.storeid]['theircart'] =0;
					$scope.AccessoryproductListObj[thisproduct.rqsku]['stores'][thisStore.storeid]['stock'] =0;
					
				
				}
				
			}
			//console.log($scope.productListObj);
			//console.log($scope.AccessoryproductListObj);
			}
			
			
			//$scope.loadOrdersPlatform(); 
	
	
	

	
	
	//$scope.loadInventoryToSkuList();
	


	
	

	//$scope.orderTree.sortedbyidlist = $scope.phonecatlistbyid;
	//$scope.orderTree['byRQSku'].productListObj = $scope.productListObj;
	//$scope.orderTree['byRQSku'].AccessoryproductListObj = $scope.AccessoryproductListObj;
	
	//console.log($scope.orderTree);
	
	$scope.setSetting = function (set){
			$scope.setting = set;
		}
		
	$scope.setCat = function (product,catid,acctype){
		orderProxy.setCats(catid , product,acctype);	
		$scope.phonecatlist = orderProxy.loadPhoneCats();
		$scope.productList = orderProxy.loadProductCatalog();
		$scope.accessoryproductList = orderProxy.loadAccessoryProductCatalog();
		
		}
	

	
	$scope.loadOrder = function(title){
				
				var SelfOrder = 0;
				if($scope.thisGuy.userid == title){
					SelfOrder = 1;
				}
				$scope.ListOfOrdersByName;
				
				for(var items in $scope.orderLoad){
					
					var thisObj = $scope.orderLoad[items];
					if($scope.thisGuy.userid == thisObj.ordertitle && SelfOrder){
						$scope.masterSkuList['stores'][thisObj.store]['skulist'][thisObj.product].mydesired = thisObj.desiredcount;
						$scope.masterSkuList['stores'][thisObj.store]['skulist'][thisObj.product].mycart = thisObj.incart;
					}	
				}
				}
				
	$scope.loadCartForOther = function(){
				
				for(var items in $scope.orderLoad){
					
					var thisObj = $scope.orderLoad[items];
				$scope.masterSkuList['stores'][thisObj.store]['skulist'][thisObj.product].theirdesired = 0;
					$scope.masterSkuList['stores'][thisObj.store]['skulist'][thisObj.product].theircart = 0;
					}
				
				
				for(var items in $scope.orderLoad){
					
					var thisObj = $scope.orderLoad[items];
					
					if($scope.vars.selectedOrder.name == thisObj.ordertitle){
						$scope.masterSkuList['stores'][thisObj.store]['skulist'][thisObj.product].theirdesired = thisObj.desiredcount;
						$scope.masterSkuList['stores'][thisObj.store]['skulist'][thisObj.product].theircart = thisObj.incart;
					}	
			}
				
				
				}
				
				
				
				
				
				
	$scope.setDesired = function(those){
			//console.log(those);
			var thing = {};
				thing.store = $scope.vars.selectedStore.storeid;
				
				thing.ordertitle = $scope.thisGuy.userid;
				thing.product = those.rqsku;
				if($scope.vars.currentInventory == "Phone"){
					thing.desiredcount = $scope.masterSkuList['stores'][thing.store]['skulist'][thing.product].mydesired;
					thing.incart = $scope.masterSkuList['stores'][thing.store]['skulist'][thing.product].mycart;
					
				}
				
				
				/*if($scope.vars.currentInventory == "Accessory"){
					thing.desiredcount = $scope.AccessoryproductListObj[thing.product].mydesired;
					thing.incart = $scope.AccessoryproductListObj[thing.product].mycart;
					if(thing.incart>0){
								$scope.AccessoryproductListObj[thing.product].addtocart = true;
							}
				}*/
				//console.log(thing);
				 orderProxy.editOrder(thing);	
				 
				$scope.loadPage();
				//console.log($scope.orderLoad);
		}
		
		
		$scope.emptyCart = function(){
			for(var thisOne in $scope.productList){
				var thisthing = $scope.productList[thisOne];
				if($scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mycart!=0){
				$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mycart = 0;
				var thing = {};
				thing.store = $scope.vars.selectedStore.storeid;
				
				thing.ordertitle = $scope.thisGuy.userid;
				thing.product = thisthing.rqsku;
				
					thing.desiredcount =$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mydesired;
					thing.incart =0;
					
				
				
				
				//console.log(thing);
				 orderProxy.editOrder(thing);	
				 }
			}
			$scope.loadPage();
		}
		$scope.setAllDesired = function(){
			
			
			for(var thisOne in $scope.productList){
				var thisthing = $scope.productList[thisOne];
				var thisstock =$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].stock;
				var thismycart =$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mycart;
				var thisDesired =$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mydesired;
				var wantsToBeOrdered = thisDesired - thisstock;
				if(wantsToBeOrdered > 0){
				
				$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mycart = wantsToBeOrdered;
				var thing = {};
				thing.store = $scope.vars.selectedStore.storeid;
				
				thing.ordertitle = $scope.thisGuy.userid;
				thing.product = thisthing.rqsku;
				
					thing.desiredcount =thisDesired;
					thing.incart =wantsToBeOrdered;
					
				
				
				
				//console.log(thing);
				 orderProxy.editOrder(thing);	
				 }
			}
			$scope.loadPage();
		}
		$scope.setAllTheirCart = function(){
			
			
			for(var thisOne in $scope.productList){
				var thisthing = $scope.productList[thisOne];
				
				var theirCart =$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].theircart;
				var thisstock =$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].stock;
				var thismycart =$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mycart;
				var thisDesired =$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mydesired;
				if(theirCart > 0){
				
				
				
				
				
				$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mycart = theirCart;
				var thing = {};
				thing.store = $scope.vars.selectedStore.storeid;
				
				thing.ordertitle = $scope.thisGuy.userid;
				thing.product = thisthing.rqsku;
				
					thing.desiredcount = thisDesired;
					thing.incart = theirCart;
					
				
				
				
				//console.log(thing);
				 orderProxy.editOrder(thing);	
				 }
			}
			$scope.loadPage();
		}
		$scope.setQuickCart = function(thisthing){
			
			var thisstock =$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].stock;
			var thismycart =$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mycart;
			var thisDesired =$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mydesired;
			
			if(thisDesired == 0 && thismycart == 0){
				
			}
			else if(thisDesired == 0 && thismycart != 0){
				$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mycart = 0;
			}
			else if(thismycart==0){
				$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mycart = thisDesired - thisstock;
			}
			else if(thismycart==(thisDesired-thisstock)){
				$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mycart = 0;
			}
			else{
				$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mycart = thisDesired - thisstock;
			}
			
			thismycart= $scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mycart;
			
			
			var thing = {};
				thing.store = $scope.vars.selectedStore.storeid;
				
				thing.ordertitle = $scope.thisGuy.userid;
				thing.product = thisthing.rqsku;
				
					thing.desiredcount =thisDesired;
					thing.incart =thismycart;
					
				
				
				
				//console.log(thing);
				 orderProxy.editOrder(thing);	
				 
				$scope.loadPage();
		}
			$scope.settheirQuickCart = function(thisthing){
			
			var theircart =$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].theircart;
			var thisDesired =$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mydesired;
			
			$scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mycart = theircart;
			var thismycart = $scope.masterSkuList['stores'][$scope.vars.selectedStore.storeid]['skulist'][thisthing.rqsku].mycart;
			
			
			
			
			var thing = {};
				thing.store = $scope.vars.selectedStore.storeid;
				
				thing.ordertitle = $scope.thisGuy.userid;
				thing.product = thisthing.rqsku;
				
					thing.desiredcount =thisDesired;
					thing.incart =thismycart;
					
				
				
				
				//console.log(thing);
				 orderProxy.editOrder(thing);	
				 
				$scope.loadPage();
		}
		
		
		
		
			$scope.countStuff = function(theResult,store){
		var sums = 0;
		//console.log(theResult);
		for(theItems in theResult){
			sums= parseInt($scope.masterSkuList['stores'][store]['skulist'][theResult[theItems].rqsku].stock) + sums;
		}
		return sums;
	}
	$scope.countStuffMoney = function(theResult,store){
		var sums = 0;
		
		for(theItems in theResult){
			if(parseInt($scope.masterSkuList['stores'][store]['skulist'][theResult[theItems].rqsku].mycart )>0){
			sums= (parseInt($scope.masterSkuList['stores'][store]['skulist'][theResult[theItems].rqsku].mycart )* theResult[theItems].lowcost ) + sums;
			}
			
		}
		return sums;
	}
			
				
				/*
				if ( $scope.this ) {	
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
				}*/
				$scope.loadPage = function (){
					$scope.orderLoad = orderProxy.loadOrder();	
					$scope.createStoreProductList();
					$scope.loadInventoryToSkuList();
					$scope.initCategoryListByID();
					$scope.fillCatByIDList();
					$scope.loadOrder($scope.thisGuy.userid);
					$scope.addNumbersToCatList();
					$scope.loadCartForOther();
				}
				
		$scope.loadPage();
	//console.log(	$scope.masterSkuList);
	
	 /*
	}
	
	$scope.generateOrderingTrees();
	console.log($scope.orderTree);
	$scope.isAdmin = 0;
	$scope.catToAdd = {};
	$scope.yourCart = {};
	$scope.yourCart = {};
	$scope.selectedCart= {};
	$scope.selectedCat={};
	
	$scope.accessoryFilter = {};
	$scope.accessoryFilter.name = '';
	
	$scope.selectedCat.tier= 0;
	
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
			
			
			/*
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
		
		*/
	}
	
	//console.log(f.getclockinclockout("20171001","20171130","District Sanat"));
	//load all the goals and all the users hours
	
	
	//console.log($scope.drawlist);
	
	
	
	
	
	
	
	
	

   
    	
	
