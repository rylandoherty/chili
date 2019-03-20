<cfcomponent>
<cfscript>
	
			remote any function TwoCyclesPTARDatascapedailyreportinput(shortdate){
				try {
					ormreload();
					//14 days back from the next Monday
					//load 4 entity ptar, scape, DRI, noncomm,
					
					var vars = {};
					vars.stores = entityLoad("stores");
					//vars.stores = ormExecuteQuery( "FROM stores where date<="&vars.nextMonday&" and date>"&vars.twoweeks ); 
					var newDateFix = Now();
					var YY = Left(shortdate,4);
					var MM = Mid(shortdate, 5,2);
					var DD = Right(shortdate,2);
					var today = CreateDate(YY,MM,DD);
					//var today = CreateDate(Year(newDateFix),Month(newDateFix),Day(newDateFix));
					
					var vars.nextMonday = DateAdd('d', (9-dayofweek(today)), today);
					
					
					
					var vars.twoweeks = DateAdd('d', -21, vars.nextMonday);
					
					
					vars.today = Right("0"&Year(today), 4)& Right("0"&Month(today), 2)& Right("0"&Day(today), 2);
					
					vars.FnextMonday = Right("0"&Year(vars.nextMonday), 4)& Right("0"&Month(vars.nextMonday), 2)& Right("0"&Day(vars.nextMonday), 2);
					vars.Ftwoweeks = Right("0"&Year(vars.twoweeks), 4)& Right("0"&Month(vars.twoweeks), 2)& Right("0"&Day(vars.twoweeks), 2);
					vars.GnextMonday = Right("0"&Year(vars.nextMonday), 4)& Right("0"&Month(vars.nextMonday), 2)& Right("0"&Day(vars.nextMonday), 2)&"0000";
					vars.Gtwoweeks = Right("0"&Year(vars.twoweeks), 4)& Right("0"&Month(vars.twoweeks), 2)& Right("0"&Day(vars.twoweeks), 2)&"9999";
					
					
					
					var ptar = ormExecuteQuery( "FROM ptar where date<= "&vars.FnextMonday&" and date> "&vars.Ftwoweeks );
					
					var datascape = ormExecuteQuery( "FROM datascape where date<= "&vars.FnextMonday&" and date > "&vars.Ftwoweeks );
					var noncomm = ormExecuteQuery( "FROM noncomm where date<= "&vars.GnextMonday&" and date > "&vars.Gtwoweeks );
					var dailyreportinput = ormExecuteQuery( "FROM dailyreportinput where date<= "&vars.FnextMonday&" and date> "&vars.Ftwoweeks );
			   		
			   		vars.storeList = {};
			   		
			   		for(those in vars.stores){
			   			vars.storeList[those.getStoreid()]={};
			   			vars.storeList[those.getStoreid()].storename=those.getStoreid();
			   			vars.storeList[those.getStoreid()].container={};
			   			var start = vars.nextMonday;
			   				
			   			while (vars.twoweeks < start){
			   				
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]={};
			   				
			   				
			   				
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['DATE']=DateFormat(start, "yyyymmdd");
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['CASHIN'] = {'Total':0,'invoices':{}};
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['CASH'] = {'Total':0,'invoices':{}};
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['BILLPAY'] = {'Total':0,'invoices':{}};
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['REFUNDCASH'] = {'Total':0,'invoices':{}};
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['REFUNDCARD'] = {'Total':0,'invoices':{}};
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['REFUNDOTHER'] = {'Total':0,'invoices':{}};
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['REBATES'] = {'Total':0,'invoices':{}};
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['VIRTUALTERMINAL'] = {'Total':0,'invoices':{}};
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['CHECK'] = {'Total':0,'invoices':{}};
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['PHONELOSSWARRANTY'] = {'Total':0,'invoices':{}};
			   				
			   				
			   				
			   				
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['DATASCAPE'] = {'Total':0,'invoices':{}};
			   				
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['NONCOMM'] = {'Total':0,'invoices':{}};
			   				
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['PAYOUTS'] = {'Total':0,'invoices':{}};
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['DEPOSITS'] = {'Total':0,'invoices':{}};
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['DAILY'] = {'Total':0,'invoices':{}};
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['DAILYDATASCAPE'] = {'Total':0,'invoices':{}};
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['USER'] = {'Name':''};
			   				
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['COMMENTS'] = " ";
			   				vars.storeList[those.getStoreid()].container[DateFormat(start, "yyyymmdd")]['LOCKED'] = false;
			   				
			   				
			   				
			   				start = DateAdd('d', -1, start);
			   				
			   				
			   			}
			   			
			   			vars.storeList[those.getStoreid()].container['Total']={};
			   		
			   			
			   			
			   		}
			   		
			   			for(that in ptar)
			   				{
			   					try{
			   						
					   			var thisAsInvoice ={};
					   			thisAsInvoice.ID = that.getID();
					   			thisAsInvoice.title = that.getINVOICE();
					   			thisAsInvoice.date = that.getDATE();
					   			thisAsInvoice.related = that.getRELATEDINVOICE();
					   			thisAsInvoice.user = that.getUSER();
					   			thisAsInvoice.otheruser = that.getUSERTENDER();
					   			thisAsInvoice.qty = 0;
					   			
					   			if(that.getTYPE()=="CashIn"){
					   			vars.storeList[that.getSTORE()].container[that.getDATE()]['CASHIN']['Total'] = 
					   			vars.storeList[that.getSTORE()].container[that.getDATE()]['CASHIN']['Total']+  that.getCASH();
					   			thisAsInvoice.qty = that.getCASH();
					   			vars.storeList[that.getSTORE()].container[that.getDATE()]['CASHIN']['invoices'][thisAsInvoice.title] = thisAsInvoice;
					   			}
					   			else if(that.getTYPE()=="Refund"){
					   				vars.storeList[that.getSTORE()].container[that.getDATE()]['REFUNDCASH']['Total'] = vars.storeList[that.getSTORE()].container[that.getDATE()]['REFUNDCASH']['Total'] + that.getCASH();	
					   				vars.storeList[that.getSTORE()].container[that.getDATE()]['REFUNDCARD']['Total'] = vars.storeList[that.getSTORE()].container[that.getDATE()]['REFUNDCARD']['Total'] + that.getCARDS();	
					   				
					   				thisAsInvoice.qty = that.getCASH();
					   				var invoiceValue = duplicate(thisAsInvoice); 
					   				vars.storeList[that.getSTORE()].container[that.getDATE()]['REFUNDCASH']['invoices'][thisAsInvoice.title] = invoiceValue;
					   				thisAsInvoice.qty = that.getCARDS();
					   				vars.storeList[that.getSTORE()].container[that.getDATE()]['REFUNDCARD']['invoices'][thisAsInvoice.title] = thisAsInvoice;
					   				
					   				
					   				
					   			}
					   			else if(that.getTYPE()=="PayOut"){
					   				vars.storeList[that.getSTORE()].container[that.getDATE()]['PAYOUTS']['Total']= vars.storeList[that.getSTORE()].container[that.getDATE()]['PAYOUTS']['Total'] + that.getCASH();	
					   				thisAsInvoice.qty = that.getCASH();
					   				vars.storeList[that.getSTORE()].container[that.getDATE()]['PAYOUTS']['invoices'][thisAsInvoice.title] = thisAsInvoice;
					   			
					   			}
					   			else if(that.getTYPE()=="Sale"){
					   				
					   			
					   				
					   				
					   				
					   				
					   				var theCASH = that.getCASH();
					   				
					   				var theCHECK  = that.getCHECK();
					   				var theVIRTUALTERMINAL = that.getVIRTUALTERMINAL();
					   				
					   				
					   				
					   				//var theREBATES = that.getREBATES();
					   				
					   					
					   				var invoiceValue = {};
					   				
					   					invoiceValue.title = that.getINVOICE();
					   			invoiceValue.date = that.getDATE();
					   			invoiceValue.related = that.getRELATEDINVOICE();
					   			invoiceValue.user = that.getUSER();
					   			invoiceValue.otheruser = that.getUSERTENDER();
					   			invoiceValue.qty = theCASH;
					   				
					   				
					   				vars.storeList[that.getSTORE()].container[that.getDATE()]['CASH']['Total'] 
					   				=vars.storeList[that.getSTORE()].container[that.getDATE()]['CASH']['Total'] + theCASH;	
					   				//vars.storeList[that.getSTORE()].container[that.getDATE()]['REBATES']['Total'] 
					   				//= vars.storeList[that.getSTORE()].container[that.getDATE()]['REBATES']['Total'] + theREBATES;
					   				vars.storeList[that.getSTORE()].container[that.getDATE()]['VIRTUALTERMINAL']['Total'] 
					   				= vars.storeList[that.getSTORE()].container[that.getDATE()]['VIRTUALTERMINAL']['Total'] + theVIRTUALTERMINAL;
					   				vars.storeList[that.getSTORE()].container[that.getDATE()]['CHECK']['Total'] 
					   				= vars.storeList[that.getSTORE()].container[that.getDATE()]['CHECK']['Total'] + theCHECK;
					   				
					   			
					   				
					   				//vars.storeList[that.getSTORE()].container[that.getDATE()]['REBATES']['invoices'][thisAsInvoice.title] = invoiceValue[2];
					   				
					   				vars.storeList[that.getSTORE()].container[that.getDATE()]['CASH']['invoices'][that.getINVOICE()] = invoiceValue;
					   				
					   						
					   				
					   				
					   		
					   				
					   				
					   			}
					   			else if(that.getTYPE()=="VendorDeposit"){
					   				vars.storeList[that.getSTORE()].container[that.getDATE()]['BILLPAY']['Total'] = vars.storeList[that.getSTORE()].container[that.getDATE()]['BILLPAY']['Total'] + that.getBILLPAY();	
					   				thisAsInvoice.qty = that.getBILLPAY();
					   				vars.storeList[that.getSTORE()].container[that.getDATE()]['BILLPAY']['invoices'][thisAsInvoice.title] = thisAsInvoice;
					   				
					   			}
					   			else{
					   			
					   			
					   			
					   			
					   			
					   					
					   			
					   			 
					   			
					   			
					   			}
					   			}
					   			catch(any e){
					   				
					   			}
					   			
					   			
					   			}
					   			
					   		for(thut in datascape)
			   				{
					   			var thisAsInvoice ={};
					   			thisAsInvoice.title = thut.getCTRLNUM();
					   			thisAsInvoice.date = thut.getDATE();
					   			thisAsInvoice.related = thut.getMTN();
					   			thisAsInvoice.user = thut.getSALESID();
					   			thisAsInvoice.otheruser = thut.getTIME();
					   			thisAsInvoice.qty = thut.getMONEY();
					   			vars.storeList[thut.getSTORE()].container[thut.getDATE()]['DATASCAPE']['Total'] = 
					   			vars.storeList[thut.getSTORE()].container[thut.getDATE()]['DATASCAPE']['Total'] +  thut.getMONEY();
					   			vars.storeList[thut.getSTORE()].container[thut.getDATE()]['DATASCAPE']['invoices'][thisAsInvoice.title] = thisAsInvoice;
					   		}
					   		
					   		for(thot in noncomm)
			   				{
			   					var thisAsInvoice ={};
			   					thisAsInvoice.title = thot.getinvoicenumber();
					   			thisAsInvoice.type = thot.getPRODUCTNAME();
					   			thisAsInvoice.date = thot.getdate();
					   			thisAsInvoice.store = thot.getstorename();
					   			thisAsInvoice.user = thot.getusername();
					   			
					   			
					   			thisAsInvoice.qty = thot.getSOLDFOR();
			   					var thisdte = Left(thot.getdate(),8);
			   					
					   			vars.storeList[thot.getstorename()].container[thisdte]['NONCOMM']['Total'] = 
					   			vars.storeList[thot.getstorename()].container[thisdte]['NONCOMM']['Total'] +  thot.getSOLDFOR();
					   			vars.storeList[thot.getstorename()].container[thisdte]['NONCOMM']['invoices'][thisAsInvoice.title] = thisAsInvoice;
					   			
					   		}
					   		for(thet in dailyreportinput)
			   				{
			   					var thisAsInvoice ={};
			   					thisAsInvoice.title = thet.getid();
					   			thisAsInvoice.type = thet.gettype();
					   			thisAsInvoice.date = thet.getdate();
					   			thisAsInvoice.store = thet.getstore();
					   			thisAsInvoice.user = thet.getuser();
					   			thisAsInvoice.related = thet.getdateadded();
					   			thisAsInvoice.otheruser = thet.getcomment();
					   			thisAsInvoice.qty = thet.getQTY();
			   					
			   					
			   					if(thet.getTYPE()=="PAYOUTS"){
			   						vars.storeList[thet.getSTORE()].container[thet.getDATE()]['PAYOUTS']['Total'] = vars.storeList[thet.getSTORE()].container[thet.getDATE()]['PAYOUTS']['Total'] + thisAsInvoice.qty;
			   						vars.storeList[thet.getSTORE()].container[thet.getDATE()]['PAYOUTS']['invoices'][thisAsInvoice.title] = thisAsInvoice;
			   						}
			   					else if(thet.getTYPE()=="DEPOSITS"){
			   						vars.storeList[thet.getSTORE()].container[thet.getDATE()]['DEPOSITS']['Total'] = vars.storeList[thet.getSTORE()].container[thet.getDATE()]['DEPOSITS']['Total'] + thisAsInvoice.qty;
			   						vars.storeList[thet.getSTORE()].container[thet.getDATE()]['DEPOSITS']['invoices'][thisAsInvoice.title] = thisAsInvoice;
			   						}
			   					else if(thet.getTYPE()=="DAILY"){
			   						vars.storeList[thet.getSTORE()].container[thet.getDATE()]['DAILY']['Total'] = thet.getQTY();
			   						vars.storeList[thet.getSTORE()].container[thet.getDATE()]['USER']['Name'] = thet.getuser();
			   						
			   						}	
			   					else if(thet.getTYPE()=="DAILYDATASCAPE"){
			   						vars.storeList[thet.getSTORE()].container[thet.getDATE()]['DAILYDATASCAPE']['Total'] = thet.getQTY();
			   						}
			   					else if(thet.getTYPE()=="COMMENTS"){
			   						
			   						vars.storeList[thet.getSTORE()].container[thet.getDATE()]['COMMENTS'] = thisAsInvoice.otheruser;
			   						}	
			   						else if(thet.getTYPE()=="LOCKED"){
			   						
			   						vars.storeList[thet.getSTORE()].container[thet.getDATE()]['LOCKED'] = thet.getQTY();
			   						}	
					   			
					   		}
					   			
			   				return vars;
			   			
			   		//return ptar;
			  	
				
					
			   //advanced query for month
			    //var doorcountGrab = entityLoad( 'doorcount' );
			    //var date = CreateMonth(yeah,month,day);
			    //var lengthOfMonth = date.DaysInMonth();

			   // var shortdate = year+""+month;
			   
			   //var doorcountGrab = ormExecuteQuery( "FROM ptar where date<="&date2&" and date>"&date1 );
			   //var doorcountGrab = ormExecuteQuery( "FROM datascape where date<="&date2&" and date>"&date1);
			   //var doorcountGrab = ormExecuteQuery( "FROM dailyreportinput where date<="&date2&" and date>"&date1  );
			   //var doorcountGrab = ormExecuteQuery( "FROM noncomm where date<="&date2&" and date>"&date1  );
			    //writeDump(item);
			   // var locationCode = location;
			  


			} catch(Exception ex) {
			    WriteOutput("<p>#ex.message#</p>");
			}
				
	}
	


remote any function updateDayValue(thisObj){
	
		var ptar = ormExecuteQuery( "FROM dailyreportinput where date like "&thisObj.date&" and store like '"&thisObj.store&"' and type like'"&thisObj.type&"'" );
	if(ArrayIsEmpty(ptar)){
		var newInput = entityNew("dailyreportinput");
		newInput.settype(thisObj.type);
		newInput.setdate(thisObj.date);
		newInput.setstore(thisObj.store);
		newInput.setcomment(thisObj.comment);
		newInput.setuser(thisObj.user);
		newInput.setdateadded(DateFormat(now(),"yyyymmdd"));
		newInput.setQTY(thisObj.value);
		entitySave(newInput);
		
	}
	else{
		for(one in ptar){
			one.setuser(thisObj.user);
			one.setdateadded(DateFormat(now(),"yyyymmdd"));
			one.setQTY(thisObj.value);
			one.setcomment(thisObj.comment);
			entitySave(one);
			return one;
		}
	}
	
}

remote any function getInvoice (invoicenum){
	var ptar = ormExecuteQuery( "FROM productdetails where invoicenumber like '"&invoicenum&"'" );
	return ptar;
}

</cfscript>


</cfcomponent>