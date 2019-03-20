<cfcomponent>
<cfscript>

			remote any function getSalesByDates(dateone, datetwo){

			}
			
			
			remote any function loadCallList (){
				var dogtown = entityLoad("calllist");
				return dogtown;
			}
			remote any function setActivity(username){
			var thus = entityLoad('userlist',username,true);
			thus.setlastactive(Month(Now())&"/"&Day(Now())&"/"&Year(Now())&"  "&Hour(Now())&":"&Minute(Now()));
			entitySave(thus);
		}
			
		remote any function loadOpTypes(){
			var thus = entityLoad('operationalproblem');
			var thix = {};
			for (each in thus){
				thix[each.getname()] = each;
			}
			 
			return thix;
			
		}
		remote any function loadOpLog(){
			var thus = entityLoad('operationlog');
			return thus;
		}
		remote any function hideOp(id){
			var thus = entityLoad('operationlog',id,true);
			thus.sethidden(1);
			entitySave(thus); 
			
		}
		remote any function deleteOp(id){
			var thus = entityLoad('operationlog',id,true);
			entityDelete(thus);
			
		}
		
		remote any function newOpError(incomingOp){
			
			var newOpEntry = entityNew('operationlog');
			newOpEntry.setcreateddate(Now());
			newOpEntry.seteventdate(incomingOp.selectedDateForNew);
			newOpEntry.setemployeename(incomingOp.selectedUserForNew);
			newOpEntry.setproblemtype(incomingOp.selectedTypeForNew);
			newOpEntry.setstorename(incomingOp.selectedStoreForNew);
			newOpEntry.setstorename(incomingOp.commentForNew);
			entitySave(newOpEntry);
		}
		
		
			remote any function updateCallList(callresult){
				
				var dogtown = entityLoad("calllist", callresult.id, true);
				
				dogtown.setcompletedby(callresult.completedby);
				
				dogtown.setcompletedon(now());
				dogtown.setcompleted(callresult.completed);
				
				dogtown.setcomment(callresult.comment);
				
				dogtown.setresult(callresult.result);
				
				entitySave(dogtown);
				return(callresult);
				
			}
			remote any function saveAccessCode (a,p,u,keys,days){
				try{
				var thisRecord = ORMExecuteQuery("from applicationrecord where applicationnumber like "&a , true);
				
				
				if(!isDefined('thisRecord')){
				
				thisRecord = EntityNew('applicationrecord');
				
				thisRecord.setpin(p);
				
				thisRecord.setapplicationnumber(a);
				
				thisRecord.setusername(u);
				thisRecord.setkey(keys);
				thisRecord.setdate(days);
				entitySave(thisRecord);
				return "Completed";
				
				}
				}
				 catch (any e) {
	return (e.message);
	
} 
				return "Already exists";
			}
			remote any function loadAccessCode (a){
				
				var thisRecord = ORMExecuteQuery("from applicationrecord where applicationnumber like "&a , true);
				
				
				return thisRecord;
				
			}
			remote any function loadlinks (){
				var thisLinkList = entityLoad('links');
				return thisLinkList;
				
			}
			remote any function addlink (a){
				
				var newLink = entityNew('links');
				newLink.setname(a.name);
				newLink.setlink(a.link);
				newLink.setaddedby(a.addedby);
				EntitySave(newLink);
				
			}
			remote any function deletelinks (linkid){
				
				var thisLink = entityLoad('links' , linkid, true);
				EntityDelete(thisLink);
			}
remote any function getproductdetails(from, to){
ORMReload();
var newSalesGrab = [];
		var district = "District Sanat";
		//var hourData = EntityLoad('hoursworked', { yearmonth=something });
		
		
		date1 = from;
		date2 = to;
		var salesGrab = ORMExecuteQuery("from productdetails where date<="&date2&" and date>"&date1);
		/*var salesz = EntityLoad('productdetails');
		
		for(items in salesz){
			if(items.getdate()< date2 && items.getdate()> date1){
			ArrayAppend(newSalesGrab,items);
			}
		}*/


			return salesGrab;

		}
		remote any function geterrors(){
			var errors = entityLoad('acterror');
			return errors;
		}
		remote any function adderror(errorOb){
			var errors = entityNew('acterror');
			errors.setdate(errorOb.date);
			errors.setstorename(errorOb.store);
			errors.setinvoicenumber(errorOb.invoice);
			errors.setapplicationnumber(errorOb.app);
			errors.setmtnnumber(errorOb.mtn);
			errors.setemployeename(errorOb.nameone);
			errors.setemployeeresponsible(errorOb.nametwo);
			errors.setmoneylost(errorOb.money);
			errors.setcomment(errorOb.comments);
			errors.setisfixed(0);
			errors.setcantbefixed(0);
			
			entitySave(errors);
		}
		remote any function deleteerror(errorOb){
			var thisone = entityLoad('acterror',errorOb.id,true);
			entityDelete(thisone);
		}
		remote any function fixerror(errorOb){
			var thisone = entityLoad('acterror',errorOb.id,true);
			thisone.setisfixed(errorOb.isfixed);
			entitySave(thisone);
		}
		remote any function unfixerror(errorOb){
			var thisone = entityLoad('acterror',errorOb.id,true);
			thisone.setcantbefixed(errorOb.cantbefixed);
			entitySave(thisone);
		}
			remote any function getsaleinvoices(from,to){

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
		
		remote any function getuploadrecord(district){
			var uploadrecord = EntityLoad('uploadrecords');
			
			return uploadrecord;
		}

		remote any function loadDistrict(district){
			district = entityLoad('district',"District Sanat",true);
			realstoreList = entityLoad('stores');
			var storeList = district.getstores();
			return realstoreList;
		}
remote any function getStoreArray(){
			var district = "District Sanat";
			
			var realstoreList = entityLoad('stores');
			var storeArray = [];
			for( stores in realstoreList){
				
				var dist = stores.getdistrict();
				
				if(dist.getdistrictid() == district){
				ArrayAppend(storeArray, stores.getstoreid() );
				}
			}
			
			
			return storeArray;
			
			var thisRecord = ORMExecuteQuery("from stores where districtid like '"&district&"' " , true);
			return thisRecord;
			district = entityLoad('district',"District Sanat",true);
			var thisRecord = ORMExecuteQuery("from stores where districtname like "&a , true);
			var realstoreList = entityLoad('stores');
			var storeList = district.getstores();
			return realstoreList;
		}




	remote any function getEmployeeList(){
		  
		var district = "District Sanat";
			try{ 
				var employees = ormExecuteQuery( "FROM userlist as saleThing WHERE saleThing.accesslevel <= 3 AND saleThing.accesslevel >=2" );
				//var employees = entityLoad("userlist") ;
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
		var newList = [];
		var arrayLen = ArrayLen(listofUploads);
		for(those in listofUploads){
			if(those.getid()>arrayLen-20)
			ArrayAppend(newList, those);
		}
		return newList;
	}

</cfscript>


</cfcomponent>