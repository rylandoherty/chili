<cfcomponent>
<cfscript>
			remote any function setStock( SKU, location, count){
				try { 
					
			    var item = EntityLoad('productlist',SKU,true);
			    var storeQuery = entityLoad( "store", location , true );
			    var settingsQuery = entityLoad( "ordersettings");
			    
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			    if(isDefined("settings")){
			    for(var sett in settingsQuery){
			    	
			    	if(location==settingsQuery[sett]['storename']&&SKU==settingsQuery[sett]['productsku']){
			    		settingsQuery[sett].setdesiredcount(count);
			    		entitySave(settingsQuery);
			    		ormflush();
			    	}
			    	}
			    	}
			    	else {
			    			
	    					orderSetting = EntityNew('ordersettings');
							   		orderSetting.setdesiredcount(count);
							   		orderSetting.setstorename(location);
							   		orderSetting.setproductsku(SKU);
							   		EntitySave(orderSetting); 
							   		ormflush();
							    	storeQuery.addordersettings(orderSetting);
							    	item.addordersettings(orderSetting);
							    	entitySave(storeQuery);
			    					EntitySave(item); 
							    	ormflush();
							    	
					    }
			    
			    
			    ormflush(); 
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	
	remote any function setIcon(SKU, name){
		writeDump(SKU);
		var item = EntityLoad('productList',SKU,true);
			
            item.seticon("/img/"&name);
            EntitySave(item);   
            ormflush();
		
	}
	remote void function setCost(SKU, cost){
		var item = EntityLoad('productlist',SKU,true);
			    
			    //writeDump(item); 
			   // var locationCode = location;
			    item.setcost(cost);
			    
			    
			    EntitySave(item); 
			    ormflush(); 
		
		
	 
		
		
	}
	
	remote void function setName(SKU, name){
		var item = EntityLoad('productList',SKU,true);
			    item.setname(name);
			    EntitySave(item); 
			    ormflush(); 
	}
	remote void function setHidden(SKU){
		var item = EntityLoad('productList',SKU,true);
			    if(item.gethidden()==false){
			    	item.sethidden(true);
			    }
			    else item.sethidden(false);
			    EntitySave(item); 
			    ormflush(); 
	}
		
</cfscript>


</cfcomponent>