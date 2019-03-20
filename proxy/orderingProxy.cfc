<cfcomponent>
<cfscript>

			remote any function newPhoneCat(phonecatobj){
				
				var newCat = entityNew('phonecats');
				entitySave(newCat);
				newCat.settitle(phonecatobj.title);
				newCat.settier(phonecatobj.tier);
				var newParent = phonecatobj.parent&","&newCat.getid();
				newCat.setparent(newParent);
				newCat.setfinaltier(phonecatobj.finaltier);
				newCat.setcategory(phonecatobj.category);
				entitySave(newCat);
				
			}
			remote any function newOrder(orderobj){
				var newCat = entityNew('ordercount');
				newCat.setordertitle(orderobj.ordertitle);
				newCat.setproduct(orderobj.product);
				newCat.setstore(orderobj.store);
				newCat.settypeoforder(orderobj.settypeoforder);
				newCat.setdesiredcount(orderobj.desiredcount);
				newCat.setdesiredcount(orderobj.incart);
				entitySave(newCat);
				
			
			}
			remote any function editOrder(orderobj){
				
				var loadOrderlist = ORMExecuteQuery("from ordercount where ordertitle like '" & orderobj.ordertitle & "'   and store like '" & orderobj.store & "' and product like '" & orderobj.product & "' " );
				
				if(!ArrayLen(loadOrderlist)){
					
					var newCat = entityNew('ordercount');
					newCat.setordertitle(orderobj.ordertitle);
					
					newCat.setproduct(orderobj.product);
					newCat.setstore(orderobj.store);
					newCat.setdesiredcount(orderobj.desiredcount);
					newCat.setincart(orderobj.incart);
					entitySave(newCat);
					
				}
				else{
					var newCat = loadOrderlist[1];
					newCat.setordertitle(orderobj.ordertitle);
					
					newCat.setproduct(orderobj.product);
					newCat.setstore(orderobj.store);
					
					newCat.setdesiredcount(orderobj.desiredcount);
					newCat.setincart(orderobj.incart);
					entitySave(newCat);
				}
				
			
				
			}
			remote any function loadOrder(){
				/*var loadOrderlist = ORMExecuteQuery("from ordercount where 
				ordertitle like '" & item.ordertitle & "' 
				and typeoforder like '" & item.typeoforder & "' " );*/
				
				var loadOrderlist = entityLoad('ordercount');
				return loadOrderlist;
			}
			remote any function loadPhoneCats(){
				var loadCatlist = entityLoad('phonecats');
				return loadCatlist;
			}
			remote any function deleteCats(phonecatobj){
				var loadCatlist = entityLoad('phonecats',phonecatobj,true);
				entityDelete( loadCatlist );
				
			}
			remote any function setCats(phonecatobj,thisproduct, accessorytype){
				
				var product = entityLoad('productcatalog',thisproduct,true);
				if(accessorytype!=0){
					product.setaccessorybelongstodevice('true');
					product.setaccessorytype(accessorytype);
				}
				
				product.setparentid(phonecatobj);
				entitySave(product);
				
			}
			remote any function setCatParentZero(thisproduct){
				
				var product = entityLoad('productcatalog',thisproduct,true);
				product.setparentid(0);
				entitySave(product);
				
			}
			remote any function loadProductCatalog(){
				
				var arra = ORMExecuteQuery("from productcatalog where category like " & "'Phone'");
				return arra;
				
				
			}remote any function loadAccessoryProductCatalog(){
				
				var arra = ORMExecuteQuery("from productcatalog where category like " & "'Accessory'");
				return arra;
				
				
			}
			remote any function loadInventory(){
				var arra = ORMExecuteQuery("from inventory where category like " & "'Phone'");
				return arra;
				
			}
			remote any function loadAccessoryInventory(){
				
				var arra = ORMExecuteQuery("from inventory where category like " & "'Accessory'");
				return arra;
				
			}
			
</cfscript>
</cfcomponent>