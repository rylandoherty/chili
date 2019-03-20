<cfcomponent>
<cfscript>
	




remote any function getInvoice (){
	var vars = {};
	var vars.today = Now();

	var vars.yesterday = DateAdd('d', -2, vars.today);
	
	vars.today = (Right("0"&Year(vars.today), 4)& Right("0"&Month(vars.today), 2)& Right("0"&Day(vars.today), 2))+"0000";
	vars.yesterday = (Right("0"&Year(vars.yesterday), 4)& Right("0"&Month(vars.yesterday), 2)& Right("0"&Day(vars.yesterday), 2))+"0000";
	var invoices = ormExecuteQuery( "FROM productdetails where date<= "&vars.today&"9999 and date> "&vars.yesterday&"0000" );
	
	var finalProduct = processInvoic(invoices);
	return finalProduct;
}

remote any function processInvoic (invoicelist){
	var newObj = {};
	var groups = entityLoad('productgroup');
	var groupitems = entityLoad('productgroupitems');
	
	

	
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
		var store = invoice.getstorename();
		if(! StructKeyExists(  newObj, invoicenumbers) ){
			newObj[invoicenumbers] = {};
			newObj[invoicenumbers].invoicenumber = invoicenumbers;
			newObj[invoicenumbers].GP = 0;
			newObj[invoicenumbers].products = [];
			newObj[invoicenumbers].ptar = getptar(invoicenumbers);
			newObj[invoicenumbers].stats = {};
			for (var mit in groups){
				newObj[invoicenumbers].stats[mit.getproductgroupid()]={};
				newObj[invoicenumbers].stats[mit.getproductgroupid()].name=mit.getproductgroupid();
				newObj[invoicenumbers].stats[mit.getproductgroupid()].type=mit.gettype();
				newObj[invoicenumbers].stats[mit.getproductgroupid()].count = 0;
			}
			newObj[invoicenumbers].date = dates;
			
			newObj[invoicenumbers].color = "rgba(84, 11, 11, 0.5)";
			newObj[invoicenumbers].soldby = users;
			newObj[invoicenumbers].soldto = customers;
			newObj[invoicenumbers].soldat = store;
		}
		ArrayAppend(newObj[invoicenumbers].products, invoice);
		newObj[invoicenumbers].GP = newObj[invoicenumbers].GP +  GPs;
		
		
	}
	var finalArray = [];
	
	for(em in newObj){
		var dis = newObj[em];
		
	for(prod in dis.PRODUCTS){
		
		for(cats in groupitems){
			
			if(prod.getPRODUCTSKU()==cats.getproductSKU()|| findnocase(cats.getproductSKU(),prod.getCATEGORY())){
				var ddp = cats.getproductgroup();
				ddp= ddp.getproductgroupid();
				dis.stats[ddp].count=dis.stats[ddp].count+prod.getQUANTITY();
				
			}	
		}
		
	}
	}
	for(dem in newObj){
		ArrayAppend(finalArray, newObj[dem]);
	}
	
	return finalArray;
}
remote any function getptar (invoicenum){
	var ptar = ormExecuteQuery( "FROM ptar where INVOICE like '"&invoicenum&"'" );
	return ptar;
}
</cfscript>


</cfcomponent>