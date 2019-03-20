<cfcomponent>
<cfscript>
	
	
	remote any function loadProductCatalogPhones(){
			var dogtown = EntityLoad("productcatalog", { 'category'='phone'}, false);
			for(each in dogtown){
				if(each.gethidefromsam() != 'YES' && each.gethidefromsam() != 'NO'){
				each.sethidefromsam('NO');
				EntitySave(each);	
				}
				
			}
			return dogtown;
		}
		
		remote any function getPTARTradeIn(datefrom, dateto ){
			var userlist = entityLoad("userlist");
			var container = {};
			var yearfrom = Mid(datefrom, 1, 4) ;
			var monthfrom = Mid(datefrom, 5, 2) ;
			var dayfrom = Mid(datefrom, 7, 2) ;
			var yearto = Mid(dateto, 1, 4) ;
			var monthto = Mid(dateto, 5, 2) ;
			var dayto = Mid(dateto, 7, 2) ;
			
			var newDateFrom = CreateDate(yearfrom, monthfrom, dayfrom);
			var newDateTo = CreateDate(yearto, monthto, dayto);
			var datediff = DateDiff("d", newDateFrom, newDateTo);
			
			for(var i = 0; i<=datediff; i++){
				var newDate = DateAdd("d", i, newDateFrom);
				container[DateFormat(newDate, "yyyymmdd")] = {};
				container[DateFormat(newDate, "yyyymmdd")]['date'] = DateFormat(newDate, "yyyymmdd");
				container[DateFormat(newDate, "yyyymmdd")]["totalphobio"] = 0;
				container[DateFormat(newDate, "yyyymmdd")]["totalptar"] = 0;
				container[DateFormat(newDate, "yyyymmdd")]["emp"] = {};
				
			}
			
			var tradein = ormExecuteQuery( "FROM ptar where DATE >=  "&datefrom&" and DATE <= "&dateto&" and TRADEIN != 0");
			var phobio = ormExecuteQuery( "FROM phobio where created >=  "&datefrom&" and created <= "&dateto);
			
			for(var each in phobio){
				var name = each.getfirstname()&" "&each.getlastname();
				if(!StructKeyExists(container[each.getcreated()]["emp"], name)){
					container[each.getcreated()]["emp"][name]={};
					container[each.getcreated()]["emp"][name]['name']=name;
					container[each.getcreated()]["emp"][name]['phobio']={};
					container[each.getcreated()]["emp"][name]['totalphobio']=0;
					container[each.getcreated()]["emp"][name]['ptar']={};
					container[each.getcreated()]["emp"][name]['totalptar']=0;
				}
				container[each.getcreated()]["totalphobio"]=container[each.getcreated()]["totalphobio"]+each.getquotedcustomeramountcents();
				container[each.getcreated()]["emp"][name]["totalphobio"]=container[each.getcreated()]["emp"][name]["totalphobio"]+each.getquotedcustomeramountcents();
				StructInsert(container[each.getcreated()]["emp"][name]['phobio'], each.getid(), each);
			}
			
			for(var each in tradein){
				if(!StructKeyExists(container[each.getDATE()]["emp"], each.getUSER())){
					container[each.getDATE()]["emp"][each.getUSER()]={};
					container[each.getDATE()]["emp"][each.getUSER()]['name']=each.getUSER();
					container[each.getDATE()]["emp"][each.getUSER()]['ptar']={};
					container[each.getDATE()]["emp"][each.getUSER()]['totalptar']=0;
					container[each.getDATE()]["emp"][each.getUSER()]['phobio']={};
					container[each.getDATE()]["emp"][each.getUSER()]['totalphobio']=0;
				}
				//wsPublish("uploads", each);
				container[each.getDATE()]["totalptar"]=container[each.getDATE()]["totalptar"]+each.getTRADEIN();
				container[each.getDATE()]["emp"][each.getUSER()]["totalptar"]=container[each.getDATE()]["emp"][each.getUSER()]["totalptar"]+each.getTRADEIN();
				StructInsert(container[each.getDATE()]["emp"][each.getUSER()]['ptar'], each.getid(), each);
			}
			
			
			
			return container;
				
		}
		
	remote any function finalizeRefund(items,invoicenumber){
		
		var newDateFix = Now();
		var today = CreateDate(Year(newDateFix),Month(newDateFix),Day(newDateFix));
		var todayform = Right("0"&Year(today), 4)& Right("0"&Month(today), 2)& Right("0"&Day(today), 2);
		
		 var origInvoice = entityLoad("saminvoice", {"id"=invoicenumber},true );
		 var cust = origInvoice.getsamcustomer();
		 var custname = cust.getname();
		 var thisCustomer = entityLoad("samcustomer", {"name"=custname},true);
		var thisInvoice = entityNew("saminvoice");
		thisInvoice.setrelatedinvoice(invoicenumber);
		thisInvoice.setdate(todayform);
		thisInvoice.settype("Refund");
		for(item in items){
			var oldTrx = entityLoad("saminventorytrx", {"id" = item.id}, true);
			oldTrx.setrefunded(1);
			
			var currentDevice = entityLoad("saminventory", {"imei" = item.IMEI}, true);
			currentDevice.setstatus("InStock");
			var newtrx = entityNew("saminventorytrx");
			newtrx.settype("Refunded");
			newtrx.setsoldfor(item.soldfor*-1);
			entitySave(newtrx);
			currentDevice.addsaminventorytrx(newtrx);
			thisInvoice.addsaminventorytrx(newtrx);
			entitySave(currentDevice);
		}
		entitySave(thisInvoice);
		thisCustomer.addsaminvoice(thisInvoice);
		entitySave(thisCustomer);
		
	}		
		
		
	remote any function finalizeInvoice(items,customer){
		
		var newDateFix = Now();
		var today = CreateDate(Year(newDateFix),Month(newDateFix),Day(newDateFix));
		var todayform = Right("0"&Year(today), 4)& Right("0"&Month(today), 2)& Right("0"&Day(today), 2);
		var thisCustomer = entityLoad("samcustomer", {"name"=customer},true);
		 
		var thisInvoice = entityNew("saminvoice");
		thisInvoice.setdate(todayform);
		thisInvoice.settype("Sale");
		for(item in items){
			var currentDevice = entityLoad("saminventory", {"imei" = item.imei}, true);
			currentDevice.setstatus("Invoiced");
			var newtrx = entityNew("saminventorytrx");
			newtrx.settype("Invoiced");
			newtrx.setsoldfor(item.sellprice);
			entitySave(newtrx);
			currentDevice.addsaminventorytrx(newtrx);
			thisInvoice.addsaminventorytrx(newtrx);
			entitySave(currentDevice);
		}
		entitySave(thisInvoice);
		thisCustomer.addsaminvoice(thisInvoice);
		entitySave(thisCustomer);
		
	}	
	remote any function loadTrx(){
		var trxlist = entityLoad("saminventorytrx");
		for(each in trxlist){
			var inv = each.getsaminventory();
			var invo = each.getsaminvoice();
			var cust = invo.getsamcustomer();
			var custname = cust.getname();
			each['cust'] = custname;
			each['phobiomodel'] = inv.getphobiomodel();
			each['imei'] = inv.getimei();
			each['model'] = inv.getmodel();
			each['invoicenumber'] = invo.getid();
			each['type'] = invo.gettype();
			each['date'] = invo.getdate();
		}
		return trxlist;
	}
	remote any function loadInvoices(){
		var inv = entityLoad("saminvoice");
		for(those in inv){
		those.trx = those.getsaminventorytrx();
		for(dem in those.trx){
			var invent = dem.getsaminventory();
			dem.model = invent.getmodel();
			dem.phobiomodel = invent.getphobiomodel();
			dem.imei = invent.getimei();
			dem.cost = invent.getcost();
			
		}
		var cust = those.getsamcustomer();
		those.cust = cust.getname();
		
		}	
			return inv;
		}
	remote any function loadPhobioList(){
		var dogtown = entityLoad("phobio");
		for(var eich in dogtown){
			eich.phobsku = eich.getphobioskulist();
		}
		return dogtown;
	}
	remote any function loadPhobioDiscrep(){
		var dogtown = entityLoad("phobio");
		var newdog = [];
		for(each in dogtown){
			
			if(each.getreportedcondition()== 'working' && (each.getadjustedcondition() == 'damaged' || each.getsamcondition() == 'damaged' )){
				
				ArrayAppend(newdog, each);
			}
		}
		return newdog;
	}
	
		
	remote void function hidePhoneFromSam(a,b){
			var dogtown = EntityLoad("productcatalog", a.rqsku, true);
			dogtown.sethidefromsam(b);
			entitysave(dogtown);
			
		}
		remote any function loadCustomerList(){
			var dogtown = EntityLoad("samcustomer");
			return dogtown;
		}
		remote any function loadPhobioSkuList(){
			var dogtown = EntityLoad("phobioskulist");
			return dogtown;
		}
		remote any function loadStockInventory(){
			var dogtown = EntityLoad("saminventory", {'status' = 'InStock'  }, false);
			for(each in dogtown){
				each.productcatalog = each.getproductcatalog();
				var tmp = each.getphobioskulist();
				if(isDefined("tmp")){
				each['suggested'] = tmp.getsellprice();
				}
				else{
				each['suggested'] = 0;
				}
			}
			return dogtown;
		}
		remote any function loadPhobioMinusInventory(){
			var newPhob = [];
			var inventory = EntityLoad("saminventory");
			var phobio = EntityLoad("phobio", {'status' = 'quoted' }, false);
			for(eich in phobio){
				var found = false;
				eich.phobsku = eich.getphobioskulist();
		
				for(euch in inventory ){
					if(eich.getimei() == euch.getimei() && (euch.getstatus() != 'Deleted' || Len(eich.getshipmenttrackingnumber()) )){
						found = true;
					}
				}
				if(found==false){
				ArrayAppend(newPhob, eich);	
				}
				
			}
			return newPhob;
		}
		remote void function setHidden(phob){
			var y = entityLoad("phobio", {"imei" = phob['imei']},true);
			y.sethidden(phob.hidden);
			entitySave(y);
		}
		
		remote void function updatePhobioSkuSellPrice(model,cost){
			var x = entityLoad("phobioskulist", {"model" = model}, true);
			x.setsellprice(cost);
			entitySave(x);
		}
		remote void function updatePhobioSkuSellPriceDmg(model,cost){
			var x = entityLoad("phobioskulist", {"model" = model}, true);
			x.setsellpricedmg(cost);
			entitySave(x);
		}
		remote void function updatePhobioSkuCost(model,cost){
			var x = entityLoad("phobioskulist", {"model" = model}, true);
			x.setcost(cost);
			entitySave(x);
		}
		remote void function updatePhobioComment(phob){
			if(isDefined("phob.samcomment")){
			var x = entityLoad("phobio", {"tradenum" = phob.tradenum}, true);
			x.setsamcomment(phob.samcomment);
			entitySave(x);
			}
		}
		remote void function updatePhobioSkuCostDmg(model,cost){
			var x = entityLoad("phobioskulist", {"model" = model}, true);
			x.setcostdmg(cost);
			entitySave(x);
		}
		remote void function updateSamInventorySellPrice(imei,cost){
			var x = entityLoad("saminventory", {"imei" = imei}, true);
			x.setsellprice(cost);
			entitySave(x);
		}
		
		remote void function addCustomer(a){
			var dogtown = EntityNew("samcustomer");
			dogtown.setname(a);
			entitySave(dogtown);
		}
		
		remote void function addPhobioPhone(phob){
			var today = DateFormat (now() , "yyyymmdd");
			var deletedimeilook = EntityLoad("saminventory", {'imei' = phob.imei, 'status' = 'Deleted'} , true);
			var imeilook = EntityLoad("saminventory", {'imei' = phob.imei} , true);
			var phobioSkuList = EntityLoad("phobioskulist", {"model"=phob.model}, true);
			var thisPhobio = EntityLoad("phobio", {"imei"=phob.imei},true);
			if(IsDefined("deletedimeilook")){
				deletedimeilook.setStatus("InStock");
				entitySave(deletedimeilook);
				phobioSkuList.addsaminventory(deletedimeilook);
				entitySave(phobioSkuList);
			}
			else if(IsDefined("imeilook")){
				return "Imei Duplicate";
			}
			else{
			thisPhobio.setsamcondition(phob.samcondition);
			thisPhobio.setsamvalue(phob.samvalue);
			entitySave(thisPhobio);
			if(phob.samcondition == "damaged" && phob.samvalue != phobioSkuList.getcostdmg()){
				phobioSkuList.setcostdmg(phob.samvalue);
				phobioSkuList.setcostdmgdate(today);
				entitySave(phobioSkuList);
			}
			else if(phob.samcondition == "working" && phob.samvalue != phobioSkuList.getcost()){
				phobioSkuList.setcost(phob.samvalue);
				phobioSkuList.setcostdate(today);
				entitySave(phobioSkuList);
			}
			
			var dogtown = EntityNew("saminventory");
			
			dogtown.setphobiomodel(phob.model);
			
			dogtown.setstatus('InStock');
			dogtown.setsource('Phobio');
			if(phob.samcondition == 'working'){
			dogtown.setsellprice(phobioSkuList.getsellprice());
			}
			else{
			dogtown.setsellprice(phobioSkuList.getsellpricedmg());	
			}
			dogtown.setimei(phob.imei);
			dogtown.setcost(phob.samvalue);
			dogtown.setdateadded(today);
			dogtown.setphobiotradenum(phob.tradenum);
			entitySave(dogtown);
			phobioSkuList.addsaminventory(dogtown);
			entitySave(phobioSkuList);
			}
		}
		remote any function addPhone(model, imei, cost, source){
			var today = DateFormat (now() , "yyyymmdd");
			var deletedimeilook = EntityLoad("saminventory", {'imei' = imei, 'status' = 'Deleted'} , true);
			var imeilook = EntityLoad("saminventory", {'imei' = imei} , true);
			var phonemodel = EntityLoad("productcatalog", model , true);
			if(IsDefined("deletedimeilook")){
				deletedimeilook.setStatus("In Stock");
				entitySave(deletedimeilook);
				phonemodel.addsaminventory(deletedimeilook);
				entitysave(phonemodel);	
			}
			
			else if(IsDefined("imeilook")){
				return "Imei Duplicate";
			}
			else{
				
			
			
			var dogtown = EntityNew("saminventory");
			
			
			
			dogtown.setstatus('InStock');
			dogtown.setimei(imei);
			dogtown.setcost(cost);
			dogtown.setsellprice(0);
			dogtown.setsource(source);
			dogtown.setdateadded(today);
			dogtown.setmodel(phonemodel.getname());
			entitySave(dogtown);
			phonemodel.addsaminventory(dogtown);
			entitysave(phonemodel);
			}
		}
		remote any function deletePhone(imei){
			var imeilook = EntityLoad("saminventory", {'imei' = imei} , true);
			imeilook.setstatus("Deleted");
			entitySave(imeilook);
			}
</cfscript>
</cfcomponent>