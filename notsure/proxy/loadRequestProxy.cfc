<cfcomponent>
<cfscript>
	
			remote any function getSalesByDates(dateone, datetwo){
				
			}
			remote any function getsaleinvoices(from,to){
		//wsPublish("uploads", locationFind);
		var district = "District Sanat";
		//var hourData = EntityLoad('hoursworked', { yearmonth=something });
		var salesGrab = ORMExecuteQuery("from saleinvoice where date<"&to&" and date>"&from);
		district = entityLoad('district',district,true);
		var storeList = district.getstores();
		var isRelated = false;
		 for(var sales in salesGrab){
		 	isRelated = false;
		 		var storeop = sales.getstores();
		 		
		 		
		 		
		 			
					sales['storeid'] = storeop.getstoreid();		 			
			  	
					sales['saledetails'] = sales.getproductdetails();
					
		 			
		 				
		 		
			  
			  
				}
		
			return salesGrab;
		
		}
		remote any function loadDistrict(district){
			district = entityLoad('district',"District Sanat",true);
			realstoreList = entityLoad('stores');
			var storeList = district.getstores();
			return realstoreList;
		}
		
			
			    
			 
	remote any function getEmployeeList(){
			try{ 
				var employees = entityLoad("userlist") ;
				return employees;	
			}catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
		
		
	}
	
	remote any function setDoorCountType(){
				try { 
					ormreload();
			   //advanced query for month
			    var doorcountGrab = entityLoad( 'doorcount' );
			   
			    
			    //writeDump(item); 
			   // var locationCode = location;
			    return doorcountGrab;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function getUploads(){
		var listofUploads = entityLoad('uploadrecords');
		return listofUploads;
	}


</cfscript>


</cfcomponent>