<cfcomponent>
<cfscript>
			remote any function setContractNumber(saleid , contractnumber ){
				try { 
					
			   
			    var itemQuery = entityLoad( "saledetails", saleid , true );
			    itemQuery.setCONTRACTNUMBER(contractnumber);
			     EntitySave(itemQuery); 
			    ormflush(); 
			   } catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setLastFour(invoice , number ){
				try { 
					
			   
			    var saleQuery = entityLoad( "sales", invoice , true );
			    saleQuery.setLASTFOUR(number);
			     EntitySave(saleQuery); 
			    ormflush(); 
			   } catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setPassword(invoice , number ){
				try { 
					
			   
			    var saleQuery = entityLoad( "sales", invoice , true );
			    saleQuery.setPASSWORD(number);
			     EntitySave(saleQuery); 
			    ormflush(); 
			   } catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function setcheckedbymanager(invoice,checked){
				try { 
					
			   
			    var saleQuery = entityLoad( "sales", invoice , true );
			    saleQuery.setCHECKEDBYMANAGER(checked);
			     EntitySave(saleQuery); 
			    ormflush(); 
			   } catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}


</cfscript>


</cfcomponent>