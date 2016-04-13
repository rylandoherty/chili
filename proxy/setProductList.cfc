<cfcomponent>
<cfscript>
			remote any function setStock( SKU, location, addOrRemove){
				try { 
			    var item = EntityLoad('productList',SKU,true);
			    
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    Evaluate("item.set"&location&"(item.get"&location&"()+"&addOrRemove&")");
			    
			    EntitySave(item); 
			    ormflush(); 
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setCost(SKU, cost){
		var item = EntityLoad('productList',SKU,true);
			    
			    //writeDump(item); 
			   // var locationCode = location;
			    item.setcost(cost);
			    
			    
			    EntitySave(item); 
			    ormflush(); 
		
		
	 
			return serializeJSON(0);
		
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