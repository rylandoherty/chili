<cfcomponent>
	<cfscript>
	

	
	
	
	remote void function abc(){
	try { 
    newArtistObj = EntityNew('artists'); 
    newArtistObj.setID("9");
    newArtistObj.setfirstname("John"); 
    newArtistObj.setlastname("Smith"); 
    newArtistObj.setaddress("5 Newport lane"); 
    newArtistObj.setcity("San Francisco"); 
    newArtistObj.setstate("CA"); 
    newArtistObj.setPostalCode("90012"); 
    newArtistObj.setphone("612-832-2343"); 
    newArtistObj.setfax("612-832-2344"); 
    newArtistObj.setemail("jsmith@company.com"); 
    newArtistObj.setThePassword("jsmith"); 
    EntitySave(newArtistObj); 
    
    ormflush(); 
} catch(Exception ex) { 
    WriteOutput("<p>#ex.message#</p>"); 
} 
	}
	remote void function bad(){
		
		
		var logic = createObject("component", "logic");
		//logic.fixTime();
		var stupid=  logic.testGet();
		
		
		//numberStruct = logic.testGet();
		//var numberStruct =  logic.fixTime();
		//writeOutput(numberStruct);
	}
	
	
	remote any function loadStoreStuff(){
	try { 
		ormreload();
		var loadArray = {};
		var userList = [];
		var storeList = EntityLoad('store');
		var productList = EntityLoad('productlist');
		for(var i = 1;i<=arraylen(productList);i++){
			
			productList[i]['inventory'] = productList[i].getInventory();
			productList[i]['settings'] = productList[i].getordersettings();
			
		}
		for(var i = 1;i<=arraylen(storeList);i++){
		
			var dist = storeList[i].getdistrict();
			if(dist=='District Sanat')
				userList[arrayLen(userList)+1]= (storeList[i].getuser());
			storeList[i]['user'] = storeList[i].getuser();
			//storeList[i]['sales'] = storeList[i].getsales();
			//for(var sales in storeList[i]['sales']){
				
				//sales['saledetails'] = sales.getsaledetails();
				
			//}
		}
		var rmaList = EntityLoad('rma');
		var transfersList = EntityLoad('transfers');
		var receivedList = EntityLoad('received');
		var uploadrecord = EntityLoad('uploadrecord');
		var receivedInvoice = EntityLoad('receivedInvoice');
		/*
		var uploadrecordlist = entityload('uploadrecord');
		var comms = entityload('comms');
		*/
		var Glob ={};
		Glob.receivedInvoiceList = receivedInvoice;
		Glob.storeList = storeList;
		Glob.productList = productList;
		Glob.rmaList = rmaList;
		Glob.transfersList = transfersList;
		Glob.receivedList = receivedList;
		Glob.uploadRecord = uploadRecord;
		return Glob;
			//return [storeList,productList,rmaList,transfersList,receivedList];
		//return [storeList,productList,userList,uploadrecordlist,comms];
		} catch(Exception ex) { 
    		WriteOutput("<p>#ex.message#</p>"); 
		}
} 

	/*
	remote any function xyz(){
	try { 
		var newSale = EntityLoad('sales');
		
		for(var i = 1;i<=arraylen(newSale);i++){
			newSale[i]['saledetails'] = newSale[i].getsaledetails();
		}
		
		var abc = serializeJson(newSale);
		//writeoutput(abc);
    return abc;
} catch(Exception ex) { 
    WriteOutput("<p>#ex.message#</p>"); 
} 
	}*/


	
	</cfscript>
</cfcomponent>