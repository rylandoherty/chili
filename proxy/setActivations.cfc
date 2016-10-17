<cfcomponent>
<cfscript>
			
			remote any function setEmployeeHidden(user){
				try { 
					
			   
			    var person = entityLoad( "User", user , true );
			   if(!isDefined(person.getisHidden())){
			   	person.setisHidden("true");
			   } 
			   else{
			    if(person.getisHidden()){
			    	person.setisHidden(false);
			    }else{
			    	person.setisHidden(true);
			    }
			    }
			     EntitySave(person); 
			    ormflush(); 
			   } catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
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