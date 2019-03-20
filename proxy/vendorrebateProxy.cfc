<cfcomponent>
<cfscript>


remote any function getVRI(datefrom,dateto){
	
	var invoices = ormExecuteQuery( "FROM vendorrebateinvoice where soldon >=  "&datefrom&" and soldon <= "&dateto);
	return invoices;
}

remote any function getStuff(inv){
	
	
	var so = ORMExecuteQuery("FROM vendorrebatehistory where invoice LIKE '"&inv&"'");
	
	return so;
}
remote any function eachNumberStatusLookup(tra){
	
	
	var so = ORMExecuteQuery("FROM csvmtn where mtn = "&tra&"");
	
	return so;
}
remote any function updateInvoice(inv){
	
	
	var so = ORMExecuteQuery("FROM vendorrebateinvoice where invoice LIKE '"&inv.invoice&"'");
	so[1].setchecked(inv.checked);
	so[1].setstatus(inv.status);
	so[1].setcomments(inv.comments);
	entitySave(so[1]);
	ormflush();
	
}


remote any function getInvoice (){
	var vars = {};
	var vars.today = Now();

	var vars.yesterday = DateAdd('d', -1, vars.today);
	
	vars.today = (Right("0"&Year(vars.today), 4)& Right("0"&Month(vars.today), 2)& Right("0"&Day(vars.today), 2))+"0000";
	vars.yesterday = (Right("0"&Year(vars.yesterday), 4)& Right("0"&Month(vars.yesterday), 2)& Right("0"&Day(vars.yesterday), 2))+"0000";
	var invoices = ormExecuteQuery( "FROM productdetails where date<= "&vars.today&"9999 and date> "&vars.yesterday&"0000" );
	
	var finalProduct = processInvoic(invoices);
	return finalProduct;
}
remote any function getUniqueMTNCSV(datefrom,dateto){
	var list = {};
	var list['CSV'] = "";
	var invoices = ormExecuteQuery( "FROM vendorrebateinvoice where soldon >=  "&dateto&" and soldon <= "&datefrom);
	
	for (those in invoices){
		var so = ORMExecuteQuery("FROM vendorrebatehistory where invoice LIKE '"&those.getinvoice()&"'");
		
		for(items in so){
		if(items.getproductname()=='Phobio Vendor Rebate')	{
			
		}
			
		else if (!StructKeyExists(list,items.gettracking())){
			var getPosOfNonNum = 0;
			getPosOfNonNum = FindNoCase("-",items.gettracking());
		if(!getPosOfNonNum){
		 list[items.gettracking()]="";
		 list['CSV']=list['CSV']&items.gettracking()&","; 
		 }
		 }
		 }
	}
	
	
	return list['CSV'];
}

remote any function processInvoic (invoicelist){
	var newObj = {};
	for (invoice in invoicelist){
		var invoicenumbers = invoice.getinvoicenumber();
		var dates = invoice.getdate();
		var GPs = invoice.getGROSSPROFIT();
		var REFUNDs = invoice.getREFUND();
		var QUANTITYs = invoice.getQUANTITY();
		var TOTALCOSTs = invoice.getTOTALCOST();
		var SOLDFORs = invoice.getSOLDFOR();
		
		var users = invoice.getusername();
		var customers = invoice.getcustomername();
		if(! StructKeyExists(  newObj, invoicenumbers) ){
			newObj[invoicenumbers] = {};
			newObj[invoicenumbers].invoicenumber = invoicenumbers;
			newObj[invoicenumbers].GP = 0;
			newObj[invoicenumbers].products = [];
			newObj[invoicenumbers].date = dates;
			
			newObj[invoicenumbers].color = "rgba(84, 11, 11, 0.5)";
			newObj[invoicenumbers].soldby = users;
			newObj[invoicenumbers].soldto = customers;
		}
		ArrayAppend(newObj[invoicenumbers].products, invoice);
		newObj[invoicenumbers].GP = newObj[invoicenumbers].GP +  GPs;
		
		
	}
	var finalArray = [];
	for(dem in newObj){
		ArrayAppend(finalArray, newObj[dem]);
	}
	
	return finalArray;
}

</cfscript>


</cfcomponent>