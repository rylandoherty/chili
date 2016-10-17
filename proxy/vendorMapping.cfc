<cfcomponent>
	<cfscript>
		remote any function loadMappings(){
				try { 
					
			    var vendorList = EntityLoad('vendorMapping');
			    return vendorList;
			    ormflush(); 
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	
	
	remote any function newMapping(sheetHeader){
		try { 
			
	    var vendorList = EntityNew('vendorMapping');
	    vendorList.setreceiptVendor(sheetHeader);
	    EntitySave(vendorList); 
		ormflush();
		}catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	
	
	
	remote any function setMapping(selectedVendor,rqVendor){
		try { 
			
	    var vendorList = EntityLoad('vendorMapping',{receiptVendor=selectedVendor},true);
	    vendorList.setrqVendor(rqVendor);
	    EntitySave(vendorList); 
		ormflush();
		}catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	
	</cfscript>
</cfcomponent>