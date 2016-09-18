
<cfcomponent>
	<cfscript>
	
		remote any function testGet(){
			var orderSetting = entityLoad("ordersettings");
			for(var settings in orderSetting){
			writedump(settings.getproductlist().getRQSKU());
		
			}
			writedump(orderSetting[1].getstore().getstoreid());
	    					
	    					
		}
		private any function moneyReplace(number){
			 							return Replace(Replace(Replace(Replace(number,"$",""), "(" , "-" ),")","" ),",","");
			    				}
		
		public any function organizeSales(PDRData,PaymentData,PDRfile,Paymentfile){
			
			  var uploadStuff = EntityNew('uploadrecord');
			  
				  uploadStuff.settype('sales');
				  
				  uploadStuff.settime(Now());
				  
				  uploadStuff.setfilename(PDRfile);
				  entitySave(uploadStuff);
			  for(var sales in PaymentData){
	    		if(sales['Invoice ##']!='Invoice ##'&&len(sales['Invoice ##'])){
	    			
		    			try { 
		    				var theInvoice = entityLoad( "sales", sales['Invoice ##'] , true );
		    				var storeQuery = entityLoad( "store", sales['location'] , true );
		    				var employeeQuery = entityLoad( "user", sales['Primary Username'] , true );
	    					if(!isDefined("storeQuery")){
	    						var store = EntityNew('store');
	    						store.setstoreid(sales['location']);
	    						store.setregion(sales['Region']);
	    						store.setdistrict(sales['District']);
	    						EntitySave(store);
	    						ormflush();
	    						storeQuery = entityLoad( "store", sales['location'] , true );
	    						}
	    					if(!isDefined("employeeQuery")){
	    						var user = EntityNew('user');
	    						user.setuserid(sales['Primary Username']);
	    						user.setpassword("Verizon1234");
	    						user.setlevel(3);
	    						
	    						EntitySave(user);
	    						ormflush();
	    						storeQuery.adduser(user);
	    						EntitySave(storeQuery);
	    						employeeQuery = entityLoad( "user", sales['Primary Username'] , true );
	    						}
		    				if(!isDefined("theInvoice")){
			    				
			    				
			    				newSale = EntityNew('sales');
			    				
			    				newSale.setsalesid(sales['Invoice ##']);
							    newSale.setEMPLOYEE(sales['Primary Username']);
							    newSale.setTYPE(sales['Type']); 
							   
							    newSale.setDATE(fixtime(sales['Created On'])); 
							    newSale.setCOMM(moneyReplace(sales['Ven Reb Act']));
							    newSale.setFINANCED(moneyReplace(sales['VZW DEVICE PAYMENT AMT.'])); 
							    newSale.setCASH(moneyReplace(sales['Cash'])); 
			    				newSale.setDATASCAPE(moneyReplace(sales['Datascape Cash only']));
			    					
								newSale.setCARDS(
									moneyReplace(sales['MasterCard-Integrated'])+
									moneyReplace(sales['Discover-Integrated'])+
									moneyReplace(sales['AMEX-Integrated'])+
									moneyReplace(sales['Visa-Integrated'])
								);
								//newSale.setTRADEIN(moneyReplace(sales['Phone Trade In Store']));
								EntitySave(newSale);
								ormflush();
								thisSale = EntityLoad('sales',sales['Invoice ##'],true);
									for(var items in PDRData){
										if(items['Invoice ##']!='Invoice ##'&&len(items['Invoice ##'])&&items['Invoice ##']==sales['Invoice ##']){
											newProductSold = EntityNew('saledetails');
											
												thisSale.setCOMMENTS(items['Invoice Comments']);
											
											
												thisSale.setCUSTOMER(items['Customer']);
											
											
											newProductSold.setPRODUCTSKU(items['Product SKU']);
											newProductSold.setCATEGORY(items['Category']);
											newProductSold.setTRACKINGNUMBER(items['Tracking ##']);
											newProductSold.setCONTRACTNUMBER(items['Contract ##']);
											newProductSold.setPRODUCTNAME(items['Product Name']);
											newProductSold.setREFUND(items['Refund']);
											newProductSold.setQUANTITY(items['Qty']);
											newProductSold.setTOTALCOST(moneyReplace(items['Total Cost']));
											newProductSold.setSOLDFOR(moneyReplace(items['Sold For']));
											newProductSold.setGROSSPROFIT(moneyReplace(items['Sold For'])-moneyReplace(items['Total Cost']));
											EntitySave(newProductSold);
											ormflush();
											thisSale.addsaledetails(newProductSold);
											entitySave(thisSale);
											ormflush();
											
											}
	   								}
	   								thisSale = EntityLoad('sales',sales['Invoice ##'],true);
	   								storeQuery.addsales(thisSale);
		    						employeeQuery.addsales(thisSale);
		    						entitySave(storeQuery);
		    						entitySave(employeeQuery);
		    						ormflush();
	   								
	   								
	   								
   					
					}
								
		    			}catch(Exception ex) { 
		    				WriteOutput("<p>#ex.message#</p>"); 
						} 
    			
    				}
    				
    		}
    				
    	}
    				
    				
    				/* ARTIFACT 
    				
    				
    				
    		//CHECKING FOR BLANK ROWS in SALES BY INVOICE SHEET
    		for(var sales in finData){
    			if(sales['Sold By']!='Sold By'&&len(sales['Sold By'])){
    			//writedump(sales['Invoice ##']);
    			try { 
    				
    				var theInvoice = entityLoad( "sales", sales['Invoice ##'] , true );
    				if(isDefined("theInvoice")){
    				
    				arrayAppend(invoiceToSkip,sales['Invoice ##']);
    				}
    				else{
    				newSale = EntityNew('sales');
    				
				    newSale.setsalesid(sales['Invoice ##']);
				    newSale.setSTORE(0); 
				    newSale.setEMPLOYEE(sales['Sold By']); 
				    newSale.setCUSTOMER(sales['Customer']); 
				    	fixtime(sales['Created On']);
				    newSale.setDATE(fixtime(sales['Created On'])); 
				    newSale.setCOST(sales['Cost']); 
				    newSale.setSALES(sales['Sales']); 
				    newSale.setPROFIT(sales['Gross Profit']); 
				    newSale.setFINANCED(sales['VZW DEVICE PAYMENT AMT.']); 
				    newSale.setCASH(sales['Cash']); 
				    
				   
				    newSale.setCOMMENTS(sales['Invoice Comments']); 
				    EntitySave(newSale); 
				    }
				    
				    ormflush(); 
				} catch(Exception ex) { 
    				WriteOutput("<p>#ex.message#</p>"); 
					} 
    			
    			}
    			}
    			
    			var memInvoiceNumber = 1;
    			
    			for(var sales in rq4Data){
    				var memInvoiceNumber = 1;
    			if(sales['Sold As Used']!='Sold As Used'&&len(sales['Sold As Used'])){
    		
    			try { 
    				var allOfSales = EntityLoad( "sales" );
    				for(var invoice in invoiceToSkip){
    					
    					if(sales['Invoice ##'] == invoice){
    					memInvoiceNumber = 0;	
    					}
    					
    					
    					
    				}
    			   if (memInvoiceNumber == 0){
    			   	writeOutput("SKIP!");
    			   }
    			   else{
    				var theInvoice = entityLoad( "sales", sales['Invoice ##'] , true );
    				//writeDump(theInvoice);
    				//writeDump(theInvoice.getSaledetails());
    				/*if(arrayLen(theInvoice) && !len(memInvoiceNumber)){
    					writeOutput("Hey");
    				}
    				if(theInvoice.hasSaledetails()){
	    				
	    				 
	    				var soldItemArray = theInvoice.getSaledetails();
    				for(var itemSold in soldItemArray){
	    					if(itemSold.getTRACKINGNUMBER() == sales['Tracking ##']&&itemSold.getproductsku() == sales['Product SKU']&& itemSold.getinvoice() == sales['Invoice ##']){
	    						
	    						}
	    				}
	    				
	    				
	    				for(var itemSold in soldItemArray){
	    					if(itemSold.getTRACKINGNUMBER() == sales['Tracking ##']&&itemSold.getproductsku() == sales['Product SKU']&& itemSold.getinvoice() == sales['Invoice ##']){
	    						
	    						}
	    					
		    				if(itemSold.getTRACKINGNUMBER() != sales['Tracking ##']||itemSold.getproductsku() != sales['Product SKU']|| itemSold.getinvoice() != sales['Invoice ##']){
		    					
		    					
			    				newItemSold = EntityNew('saledetails'); 
			    				//newItemSold.addSALESID(theInvoice);
							    newItemSold.setINVOICE(sales['Invoice ##']); 
							    newItemSold.setPRODUCTSKU(sales['Product SKU']);
							    newItemSold.setPRODUCTNAME(sales['Product Name']); 
							    newItemSold.setTRACKINGNUMBER(sales['Tracking ##']); 
							    newItemSold.setREFUND(sales['Refund']);
							    newItemSold.setQUANTITY(sales['Qty']); 
							    newItemSold.setTOTALCOST(sales['Total Cost']); 
							    newItemSold.setSOLDFOR(sales['Sold For']); 
							    newItemSold.setGROSSPROFIT(sales['Gross Profit']); 
							    newItemSold.setCATEGORY(sales['Category']); 
							    newItemSold.setUSED(sales['Sold As Used']); 
							    newItemSold.setCOMMENTS(sales['Invoice Comments']); 
							   
							    EntitySave(newItemSold); 
							     ormflush(); 
							    //bottom
							    
			    				theInvoice.addSaledetails(newItemSold);
			    				EntitySave(theInvoice);
						    	ormflush(); 
						    	
						    	break;
		    				}
		    				else{
		    					
					    	}
					    }
				    }
				    else{
				    	entityName = EntityNew('saledetails'); 
			    				
							    
							    entityName.setINVOICE(sales['Invoice ##']); 
							    entityName.setPRODUCTSKU(sales['Product SKU']);
							    entityName.setPRODUCTNAME(sales['Product Name']); 
							    entityName.setTRACKINGNUMBER(sales['Tracking ##']); 
							    entityName.setREFUND(sales['Refund']);
							    entityName.setQUANTITY(sales['Qty']); 
							    entityName.setTOTALCOST(sales['Total Cost']); 
							    entityName.setSOLDFOR(sales['Sold For']); 
							    entityName.setGROSSPROFIT(sales['Gross Profit']); 
							    entityName.setCATEGORY(sales['Category']); 
							    entityName.setUSED(sales['Sold As Used']); 
							    entityName.setCOMMENTS(sales['Invoice Comments']);
							   
							    EntitySave(entityName); 
							     ormflush(); 
							    
							    
			    				theInvoice.addsaledetails(entityName);
			    				EntitySave(theInvoice);
						    	ormflush(); 
						    	
				    }
				}} catch(Exception ex) { 
    				WriteOutput("<p>#ex.message#</p>"); 
					} 
    			
    			}
    			
    			
    			
    		} 
			
		
		return "";
		}
		public any function makeInvoice(entityName, sales){
			//newItemSold.addSALESID(theInvoice);
								entityName.setINVOICE(sales['Invoice ##']); 
							    entityName.setPRODUCTSKU(sales['Product SKU']);
							    entityName.setPRODUCTNAME(sales['Product Name']); 
							    entityName.setTRACKINGNUMBER(sales['Tracking ##']); 
							    entityName.setREFUND(sales['Refund']);
							    entityName.setQUANTITY(sales['Qty']); 
							    entityName.setTOTALCOST(sales['Total Cost']); 
							    entityName.setSOLDFOR(sales['Sold For']); 
							    entityName.setGROSSPROFIT(sales['Gross Profit']); 
							    entityName.setCATEGORY(sales['Category']); 
							    entityName.setUSED(sales['Sold As Used']); 
							    entityName.setCOMMENTS(sales['Invoice Comments']); 
			return entityName;
			
		}
		*/
		
		
			public any function setRMAHistory(RMAData,filename){
				 var uploadStuff = EntityNew('uploadrecord');
				  uploadStuff.settype('RMAHistory');
				  uploadStuff.settime(Now());
				  uploadStuff.setfilename(filename);
				  entitySave(uploadStuff);
				 var oldStock = EntityLoad('rma');
				for(var i = 1;i<=arrayLen(oldStock);i++){
					entityDelete(oldStock[i]);
				}
				ormFlush();
				ormreload();
				for(var item in RMAData){
									var found= false;
    			if(item['Vendor']!='Vendor'&&len(item['Vendor'])){
	    			
	    			try{ 
	    				var storeQuery = entityLoad( "store", item['Location'] , true );
	    					
	    					
	    					
	    					//var selt = ORMExecuteQuery("from Sales where store.storeid=:country", {country='E Bridgewater'});
	    					
	    					if(!isDefined("storeQuery")){
	    						storeQuery = EntityNew('store');
	    						storeQuery.setstoreid(item['Location']);
	    						EntitySave(storeQuery);
	    						ormflush();
	    					}
	    					found=false;
	    							var product = EntityNew('rma');
								    product.setrmaid(item['RMA ##']); 
								    product.setVendor(item['Vendor']); 
								   // product.setstore(item['Location']);
									product.setstorename(item['Location']);
									product.setTotalCost(item['Total Cost']);
								    product.setTotalCostCredited(item['Total Cost Credited']);
								    product.setVendorRMA(item['Vendor RMA ##']); 
								    product.setWayBill(item['Way Bill ##']);  
								    product.setCreditInvoice(item['Credit Invoice ##']);  
								    product.setShippingCost(item['Shipping Cost']); 
								    product.setShippedAway(item['Shipped Away']);
								    product.setCommitted(item['Committed']);
								    product.setCommittedOn(item['Committed On']);
								    product.setCompleted(item['Completed']);
								    product.setCreatedOn(item['Created On']);
								    product.setCreatedBy(item['Created By']);
								    product.setComments(item['Comments']);
									product.setReceivingComments(item['Receiving Comments']);
									product.setRegion(item['Region']);
								    product.setDistrict(item['District']);
								    
								    
								    EntitySave(product); 
								    
								    storeQuery.addrma(product);
								    entitySave(storeQuery);
								   ormflush(); 
								   
					} catch(Exception ex) { 
	    				WriteOutput("<p>#ex.message#</p>"); 
						} 
	    			}
	    			
	    			}
    			
    					
    					
				
			} 
			
			
			
			public any function setReceiveBill(ReceivingInvoiceData,filename){
				 var uploadStuff = EntityNew('uploadrecord');
				  uploadStuff.settype('EquipmentBill');
				  uploadStuff.settime(Now());
				  uploadStuff.setfilename(filename);
				  entitySave(uploadStuff);
				 var oldStock = EntityLoad('receivedInvoice');
				for(var i = 1;i<=arrayLen(oldStock);i++){
					entityDelete(oldStock[i]);
				}
				ormFlush();
				ormreload();
				for(var item in ReceivingInvoiceData){
									var found= false;
    			if(item['Date']!='Date'&&len(item['Date'])){
	    			
	    			try{ 
	    				
	    				
	    				var storeQuery = entityLoad( "store");
	    				
	    				for(var stores in StoreQuery){
	    					
	    					
	    					
	    					if(filename contains stores.getstoreid()){
	    						
	    						storeQuery = entityLoad( "store", stores.getstoreid() , true );
	    					}
	    				}
	    					
	    					
	    					
	    					//var selt = ORMExecuteQuery("from Sales where store.storeid=:country", {country='E Bridgewater'});
	    					
	    					/*if(!isDefined("storeQuery")){
	    						storeQuery = EntityNew('store');
	    						storeQuery.setstoreid(stores.getstoreid());
	    						EntitySave(storeQuery);
	    						ormflush();
	    					}*/
	    					found=false;
	    							var product = EntityNew('receivedInvoice');
								   
								    
								    product.setreceivedInvoiceid(item['INVOICE ##']);  
								   
								    product.setDate(item['Date']);  
								    product.setPAYMENTS(item['PAYMENTS']); 
								    product.setStoreTransfer(item['Store Transfer']); 
								    product.setVERIZONAMOUNT(item['VERIZON AMOUNT']);  
								    product.setRELIANCEAMOUNT(item['RELIANCE AMOUNT']); 
								    product.setBRIGHTPOINTAMOUNT(item['BRIGHT POINT AMOUNT']);  
								    product.setVZWRMA(item['VZW- RMA']); 
								    product.setIceMobility(item['Ice Mobility']); 
								    product.setMisc(item['Misc']); 
								    product.setfilename(filename); 
								    
								    
								    
								    EntitySave(product); 
								    
								    storeQuery.addreceivedInvoice(product);
								    entitySave(storeQuery);
								   ormflush(); 
								   
					} catch(Exception ex) { 
	    				WriteOutput("<p>#ex.message#</p>"); 
						} 
	    			}
	    			
	    			}
    			
    					
    					
				
			} 
			
			
			
			
			public any function setReceived(ReceivedData,filename){
				 var uploadStuff = EntityNew('uploadrecord');
				  uploadStuff.settype('Received');
				  uploadStuff.settime(Now());
				  uploadStuff.setfilename(filename);
				  entitySave(uploadStuff);
				 var oldStock = EntityLoad('received');
				for(var i = 1;i<=arrayLen(oldStock);i++){
					entityDelete(oldStock[i]);
				}
				ormFlush();
				ormreload();
				for(var item in ReceivedData){
									var found= false;
    			if(item['Received On']!='Received On'&&len(item['Received On'])){
	    			
	    			try{ 
	    				var storeQuery = entityLoad( "store", item['Received At'] , true );
	    					
	    					
	    					
	    					//var selt = ORMExecuteQuery("from Sales where store.storeid=:country", {country='E Bridgewater'});
	    					
	    					if(!isDefined("storeQuery")){
	    						storeQuery = EntityNew('store');
	    						storeQuery.setstoreid(item['Received At']);
	    						EntitySave(storeQuery);
	    						ormflush();
	    					}
	    							found=false;
	    							var product = EntityNew('received');
								    product.setreceiveid(item['Receiving ##']); 
								    product.setReference(item['Reference ##']); 
								    product.setReceivedOn(item['Received On']);
								    product.setReceivedAt(item['Received At']);
								    product.setReceivedBy(item['Received By']); 
								    product.setVendor(item['Vendor']);
								    product.setVendorInvoice(item['Vendor Invoice ##']); 
								    product.setPosted(item['Posted']);  
								    product.setPaid(item['Paid']);  
								    product.setFlagged(item['Flagged']);
 									product.setTotalInvoice(item['Total Invoice']);
								    product.setReconciliationComments(item['Reconciliation Comments']);
								    product.setOrderingComments(item['Ordering Comments']);
								    product.setReceivingComments(item['Receiving Comments']);
								    product.setRegion(item['Region']);
								    product.setDistrict(item['District']);
								    
								    EntitySave(product); 
								    storeQuery.addreceived(product);
								    entitySave(storeQuery);
								   ormflush(); 
								   
					} catch(Exception ex) { 
	    				WriteOutput("<p>#ex.message#</p>"); 
						} 
	    			}
	    			
	    			}
    			
    					
    					
				
			} 
			public any function setTransfer(TransferData,filename){
				 var uploadStuff = EntityNew('uploadrecord');
				  uploadStuff.settype('Transfer');
				  uploadStuff.settime(Now());
				  uploadStuff.setfilename(filename);
				  entitySave(uploadStuff);
				 var oldStock = EntityLoad('transfers');
				for(var i = 1;i<=arrayLen(oldStock);i++){
					entityDelete(oldStock[i]);
				}
				ormFlush();
				ormreload();
				for(var item in TransferData){
									var found= false;
    			if(item['Committed']!='Committed'&&len(item['Committed'])){
	    			
	    			try{ 
	    				var storeQuery = entityLoad( "store", item['Received At'] , true );
	    					
	    					
	    					
	    					//var selt = ORMExecuteQuery("from Sales where store.storeid=:country", {country='E Bridgewater'});
	    					
	    					if(!isDefined("storeQuery")){
	    						storeQuery = EntityNew('store');
	    						storeQuery.setstoreid(item['Received At']);
	    						EntitySave(storeQuery);
	    						ormflush();
	    					}
	    							found=false;
	    							var product = EntityNew('transfers');
								    product.settransferid(item['Transfer ##']); 
								    
								    product.setShippedFrom(item['Shipped From']); 
								    product.setReceivedAt(item['Received At']);
								    product.setTotalInvoice(item['Total Invoice']);
								    product.setRequestedOn(item['Requested On']); 
								    product.setCommitted(item['Committed']);
								    product.setCommittedOn(item['Committed On']); 
								    product.setCompleted(item['Completed']);  
								    product.setBillTo(item['Bill To']);  
								    product.setRequestedBy(item['Requested By']); 
								    product.setRequestingComments(item['Requesting Comments']);
								    product.setShippingComments(item['Shipping Comments']);
								    product.setReceivingComments(item['Receiving Comments']);
								    product.setCancelledOn(item['Cancelled On']);
								    product.setCancelledBy(item['Cancelled By']);
								    product.setShippedFromDistrict(item['Shipped From District']);
								    product.setReceivedAtDistrict(item['Received At District']);
								    product.setShippedFromRegion(item['Shipped From Region']);
								    product.setReceivedAtRegion(item['Received At Region']);
								    
								    EntitySave(product); 
								    storeQuery.addtransfers(product);
								    entitySave(storeQuery);
								   ormflush(); 
								   
					} catch(Exception ex) { 
	    				WriteOutput("<p>#ex.message#</p>"); 
						} 
	    			}
	    			
	    			}
    			
    					
    					
				
			} 
			
			
		
		
			 //INVENTORY AND ORDERS
			public any function setInventory(inventoryData,filename){
				 var uploadStuff = EntityNew('uploadrecord');
				  uploadStuff.settype('inventory');
				  uploadStuff.settime(Now());
				  uploadStuff.setfilename(filename);
				  entitySave(uploadStuff);
				 var oldStock = EntityLoad('inventory');
				for(var i = 1;i<=arrayLen(oldStock);i++){
					entityDelete(oldStock[i]);
				}
				ormFlush();
				ormreload();
				
					
					
								for(var item in inventoryData){
									var found= false;
    			if(item['Product Name']!='Product Name'&&len(item['Product Name'])){
	    			
	    			try{ 
	    				if(len(item['Tracking ##'])){
	    					
	    					var storeQuery = entityLoad( "store", item['Location'] , true );
	    					var productList = entityLoad("productlist", item['Product SKU'] , true );
	    					var orderSetting = entityLoad("ordersettings");
	    					for(var settings in orderSetting){
	    						var stored = settings;
	    						var prod = settings.getproductlist();
	    						
	    						if(settings.getstorename()==item['Location']&&settings.getproductsku()==item['Product SKU']){
	    							found = true;
	    						}
	    					}
	    					//var selt = ORMExecuteQuery("from Sales where store.storeid=:country", {country='E Bridgewater'});
	    					
	    					if(!isDefined("storeQuery")){
	    						storeQuery = EntityNew('store');
	    						storeQuery.setstoreid(item['Location']);
	    						EntitySave(storeQuery);
	    						ormflush();
	    					}
	    					if(!isDefined("productList")){
	    						productList = EntityNew('productlist');
							   		productList.setRQSKU(item['Product SKU']);
							   		productList.setname(item['Product Name']); 
							    	productList.sethidden(false);
							    	productList.setcategory(item['Category']); 
							    	
								   productList.setcost(item['Total Cost']);
								   
							    	EntitySave(productList); 
							    	ormflush();
	    					}
	    					if(found==false){
	    							orderSetting = EntityNew('ordersettings');
							   		orderSetting.setdesiredcount(0);
							   		orderSetting.setstorename(item['Location']);
							   		orderSetting.setproductsku(item['Product SKU']);
							   		EntitySave(orderSetting); 
							    	
							    	storeQuery.addordersettings(orderSetting);
							    	productList.addordersettings(orderSetting);
							    	 
							    	entitySave(storeQuery);
							    	entitySave(productList);
							    	ormflush();
							    	
							    	
	    					}
	    					found=false;
	    							var product = EntityNew('inventory');
								    product.setinventoryid(item['Tracking ##']);
								    product.setname(item['Product Name']); 
									product.setcost(item['Total Cost']); 
									product.setstorename(item['Location']);
									product.setproductsku(item['Product SKU']);
								    
								    
								    EntitySave(product); 
								    
								    
								    storeQuery.addInventory(product);
								    entitySave(storeQuery);
								    
								    productList.addInventory(product);
								    entitySave(productList);
								    ormflush(); 
								}    
								    
	    					
					    
					    
					    
					} catch(Exception ex) { 
	    				WriteOutput("<p>#ex.message#</p>"); 
						} 
	    			}
	    			
	    			}
    			
    					
    					
				
			} 
			
			
			
			
			
			
			
			
			/*
	    					else{
	    						 productList = entityLoad("productlist");
	    						if(!isDefined("productList")){
	    							var productSettings = EntityNew('productlist');
							   		productSettings.setRQSKU(item['Product SKU']);
							   		productSettings.setname(item['Product Name']); 
							    	productSettings.sethidden(false);
							    	productSettings.setcategory(item['Category']); 
							    	productSettings.setstockFufill(0);
								    productSettings.setcost(0);
								    productSettings.setstore(item['Location']);
							    	EntitySave(productSettings); 
							    	ormflush();
		    						storeQuery.addproductlist(productSettings);
		    						EntitySave(storeQuery);
		    						ormflush();
	    						}
	    						else{
	    							
		    						if(found==false){
		    							var productSettings = EntityNew('productlist');
							   			productSettings.setRQSKU(item['Product SKU']);
							   			productSettings.setname(item['Product Name']); 
							    		productSettings.sethidden(false);
							    		 
							    		productSettings.setstockFufill(0);
								    	productSettings.setcost(0);
								    	
								    	EntitySave(productSettings); 
								    	ormflush();
			    						storeQuery.addproductlist(productSettings);
			    						EntitySave(storeQuery);
			    						ormflush();
		    						}
	    						}	
	    						}
	    						
	    					storeQuery = entityLoad( "store", item['Location'] , true );
		    				
		    				thisProductSetting = entityLoad('productlist');
		    				for(var phones in thisProductSetting){
		    					
    							if(phones.GETRQSKU()==item['Product SKU']&&phones.GETSTORE()==item['Location']){
    								
    								
    								var product = EntityNew('inventory');
								    product.setinventoryid(item['Tracking ##']);
								    
									product.setname(item['Product Name']); 
									product.setcost(item['Total Cost']); 
								    product.setproductSKU(item['Product SKU']); 
								    product.setuploadTime(fixtime(Now())); 
								    EntitySave(product); 
								    ormflush();
								    thisProductSetting[phones].addInventory(product);
								    entitySave(thisProductSetting);
								    ormflush(); 
								    storeQuery.addproductlist(thisProductSetting);
								    entitySave(storeQuery);
								    ormflush(); 
	    						}}
    						} */
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			/*scope.salesDatabase= {};	
			scope.salesSettled = {};
			scope.salesOver = {};			
			for(var row in rq4Data){
				//writeDump(row);
				if(row['Total Sales']=="Total Sales"||len(row['Sold By'])==0){
					continue;
				}
				var number = row['Tracking ##'];
				var invoice = row['Invoice ##'];
				var isRefund = row['Refund'];
				
					if(!structKeyExists(scope.salesDatabase,row['Invoice ##'])){
						var sl = {};
						
						if(len(number)==10){
							StructInsert(sl,"Phone Number",[number]);
						}
						StructInsert(sl,"Sold On", dateFormat(row['Sold On'], "m/d/yyyy") );
						StructInsert(sl,"Total Sales",0);
						StructInsert(sl,"Total Cost",0);
						StructInsert(sl,"Total Comm",0);
						if(isRefund == "Yes"){
						StructInsert(sl,"Sale Type","Return");	
						}
						else{
						StructInsert(sl,"Sale Type","Sale");	
						}
						
						
						StructInsert(sl,"Sold By",row['Sold By']);
						StructInsert(sl,"Customer Name",row['Customer']);
						StructInsert(sl,"VZWFin",0);
						StructInsert(sl,"VZWComm",0);
						StructInsert(scope.salesDatabase , invoice ,sl);
					}
					
				else{
					
					if(len(number)==10){
						//writeDump(scope.salesDatabase[invoice]);
						//StructAppend(scope.salesDatabase[row['Invoice##']]['Phone Number'],"5088738195");
						//writeDump(scope.salesDatabase);
						if(!StructKeyExists(scope.salesDatabase[invoice],'Phone Number')){
							StructInsert(sl,"Phone Number",[number]);
						}
						else if(StructKeyExists(scope.salesDatabase[invoice],'Phone Number')&&!arrayContains(scope.salesDatabase[invoice]['Phone Number'],number)){
							ArrayAppend(scope.salesDatabase[invoice]['Phone Number'],number);
							//writeDump(scope.salesDatabase[invoice]['Phone Number']);
							
							//if(scope.salesDatabase.row['Invoice##']['Phone Number']==number){
								
							}
						}
							
					}	
				}
					if(scope.salesDatabase[invoice]['Sale Type']=="Sale"){
						if(isRefund=="Yes"){
							scope.salesDatabase[invoice]['Sale Type']= "Exchange";
						}
					}
					if(scope.salesDatabase[invoice]['Sale Type']=="Return"){
						if(isRefund=="No"){
							scope.salesDatabase[invoice]['Sale Type']= "Exchange";
						}
					}
					addUpMoney(row,'Total Sales');
					addUpMoney(row,'Total Cost');
					
				
				var finAmount = 0;
				if(!StructKeyExists(scope.salesDatabase[invoice],"Fin")){
					for(var row in finData){
						if(row['Check']=="Check"||len(row['Sold By'])==0){
							continue;
						}
						if(invoice==row['Invoice ##']){
							StructInsert(scope.salesDatabase[invoice],"Fin",row['VZW Financed Amt']);
						}
				
					}
				}
			}
			writeDump(scope.salesDatabase);*/
			
		public boolean function checkDates(vzwdate,rq4Date){
			var month = ListGetAt(vzwdate,1,"/");
			var day = ListGetAt(vzwdate,2,"/");
			var year = ListGetAt(vzwdate,3,"/");
			if(left(month,1)==0){
				month = replace(month,"0","");
			}
			if(left(day,1)==0){
				day = replace(day,"0","");
			}
			if(len(year)==5){
				year = left(year,len(year)-1);
			}
			var modvzwDate = month&"/"&day&"/"&year;
			if(right(modvzwDate,1)==" "){
				
			}
			
			//writeoutput("VZW:"&modvzwDate&"RQ4:"&rq4Date&"<br/>");
			
			if(modvzwDate == rq4Date){
				
				//writeoutput("YUP<br/>");
			return true;
			}
			//writeoutput("VZW:"&modvzwDate&"RQ4:"&rq4Date&"<br/>");
			return false;
		}
		public any function checkNames(name1,name2){
			var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
			'o','p','q','r','s','t','u','v','w','x','y','z'];
			
			var characters1 = {};
			var characters2 = {};
			for(var a = 1;a<3;a++){
				
				var name = evaluate("name"&#a#);
				var characters = {};
				
				
				for(var characterInName = 1;characterInName<=len(name);characterInName++){
					var reading = Lcase(mid(name,characterInName,1));
					if(arrayContains(letters,reading)){
						if(!structKeyExists(characters,reading)){
							StructInsert(characters,reading,1);
						}
						else{
							structUpdate(characters,reading,int(characters[reading])+1);
						}
						
					}
						
				}
			evaluate("characters"&#a#&" = characters");
				
			}
			
			var totalCount = 0;
			var totalCount2 = 0;
			var inCommon = 0;
			for(letter in characters1){
				if(structKeyExists(characters2,letter)){
					if(characters2[letter]>characters1[letter]){
					inCommon = inCommon + characters1[letter];	
					}
					else{
						incommon = inCommon + characters2[letter];
					}
					
					
				}
				totalCount = totalCount+int(characters1[letter]);
			}
			for(letter in characters2){
				
				totalCount2 = totalCount2+int(characters2[letter]);
				
			}
			if(totalcount2<totalCount){
			return (inCommon/totalCount);}
			else{
			return (inCommon/totalCount2);}
		}
		
		
		public void function addUpMoney(row, column){
			if(find("$",row[column],1)>0&&len(row['Tracking ##'])==10&&column=="Total Sales"){
						var salePrice = trimDollarsAndNegatives(row[column]);
						var sum = scope.salesDatabase[row['Invoice ##']]['Total Comm'];
						var total = sum + salePrice;
						scope.salesDatabase[row['Invoice ##']]['Total Comm']= total;
					}
					else if(find("$",row[column],1)>0){
						var salePrice = trimDollarsAndNegatives(row[column]);
						var sum = scope.salesDatabase[row['Invoice ##']][column];
						var total = sum + salePrice;
						scope.salesDatabase[row['Invoice ##']][column]= total;
					}
					
			
		}
		public any function findIfVZWandrq4Match(invoice){
			
			
				sale = scope.salesDatabase[invoice];
				var fin = trimDollarsAndNegatives(sale['Fin']);
				if(len(fin)>3){
				fin = (left(fin,len(fin)-3));
				fin = replace(fin,",","");
				}
				if(sale['VZWFin']!=fin||sale['Total Comm']!=sale['VZWComm']){
					
				}
				else{
					structInsert(scope.salesSettled,invoice,scope.salesDatabase[invoice]);
					structDelete(scope.salesDatabase,invoice);
				}
				
			
		}
		
		public any function trimDollarsAndNegatives(moneyString){
			var withoutDollar = right(moneyString,len(moneyString)-find("$",moneyString,1));
			if(right(withoutDollar,1)==')'){
			withoutDollar=(left(withoutDollar,len(withoutDollar)-1))*-1;
			}
			return withoutDollar;
		}
		
		remote any function fixTime(xx){
			var dateRQ = xx;
			var codeMonth = [["Jan",00],
					["Feb",01],
					["Mar",02],
					["Apr",03],
					["May",04],
					["Jun",05],
					["Jul",06],
					["Aug",07],
					["Sep",08],
					["Oct",09],
					["Nov",10],
					["Dec",11]];
			 
			var dateArray= [];
			var month ="";
			var day ="";
			var year= "";
			var time= "";
			var hours = "";
			var minutes = "";
			
			var count = 1;
			for(var i=1;i<Len(dateRQ);i++){
					if(dateRQ.charAt(i)==" "){
						
						
						if(count == 1){
							month = left(dateRQ,i);
							for(var cmonth in codeMonth){
								
								if(month == cmonth[1]){
									month = replace(cmonth[1],cmonth[1],cmonth[2]);
								}
								
							}
							count++;
						}
						else if(count == 2){
							if(dateRQ.charAt(i-3)==" "){
								
								day = dateRQ.charAt(i-2);
								day = "0"&day;
							}
							else{
								day = mid(dateRQ,i-2,2);
							}
							count++;
						}
						else if(count == 3){
							year = mid(dateRQ,i-3,4);
							count++;
						}
						else if(count == 4){
							if(dateRQ.charAt(i-5)==" "){
								hours = mid(dateRQ,i-3,1);
									
								minutes = mid(dateRQ,i-1,2);		
								if(mid(dateRQ,i+2,2)=="PM"&&hours!="12"){
								
									hours+=12;	
								}
							}
							else{
								
								hours = mid(dateRQ,i-4,2);	
								minutes = mid(dateRQ,i-1,2);
								PM = mid(dateRQ,i+2,2);
									
								if(mid(dateRQ,i+2,2)=="PM"&&hours!="12"){
								
								hours+=12;	
								}
								if(mid(dateRQ,i+2,2)=="AM"&&hours=="12"){
								
								hours="00";	
								}
								
							}
							
							if(len(hours)==1){
								hours = "0"&hours;
							}
						}
						
					}
				
			}
			
			fulltimecode = year&month&day&hours&minutes;
			return fulltimecode;
		}
		
	</cfscript>
</cfcomponent>