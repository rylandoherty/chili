<cfcomponent>
	<cfscript>
			
		remote any function getUserList(){
		
		
			
			
			userData = entityLoad("userlist");
			if(isDefined("userData")){
				return userData;
			}
		}
		remote any function testCF(){
			var today = now();
			var strin = DateFormat(today, "yyyymmdd");
			return strin;
		}
		remote any function getUserListWithComms(mmyyyy){
		
		var month = left(mmyyyy,2);
			var year = right(mmyyyy,4);
			
			
			userData = entityLoad("userlist");
			
			if(isDefined("userData")){
				for(each in userData){
					each.comz = [];
					var commtoadd = each.getcommissionableemployee();
					
					
					var found = false;
					for(euch in commtoadd){
						var m2 = euch.getmonth();
						var y2 = euch.getyear();
						if(m2 == month && y2 == year){
							each.comz = euch;
							each.comz.groups = euch.getcommissiongroup();
							for(eoch in each.comz.groups){
								eoch.formulas = eoch.getcommissiontype();
								for(forms in eoch.formulas){
									forms.formula = forms.getformulalist();
									forms.pegs = forms.getcommissionpeg();
								}
							}
							found = true;
						}	
					}
					if(!found){
						each.comz = 0;
					}
					else{
						
					}
					
					
				}
				
				return userData;
			}
		}
		remote any function deleteCommGroup(commid){
			var trash = entityLoad("commissiongroup", commid, true);
			entityDelete(trash);
		}
		
		remote any function copyToMonth (frommonth, tomonth, user){
			
			var yeara = Right(frommonth,4);
			var montha = Left(frommonth,2);
			var yearb = Right(tomonth,4);
			var monthb = Left(tomonth,2);
			var userlistlook = entityLoad("userlist", {name = user}, true);
			
			var thisGuy = entityLoad("commissionableemployee", { month=montha, year=yeara}, false );
			for(those in thisGuy){
				
				
				if(those.getuserlist().getname()==user){
					var deesGroups = those.getcommissiongroup();
					
					for(eich in deesGroups){
						eich.formu = eich.getcommissiontype();
						for (euch in eich.formu){
							euch.formlist = euch.getformulalist();
							euch.pegs = euch.getcommissionpeg();
						}	
					}
					
					
					var newCopy = entityNew("commissionableemployee");
					
					newCopy.setmonth(monthb);
					newCopy.setyear(yearb);
					entitySave(newCopy);
					userlistlook.addcommissionableemployee(newCopy);
					entitySave(userlistlook);
					for(diz in deesGroups){
						//return diz;
						var newgroup = entityNew("commissiongroup");
						newgroup.setname(diz.getname());
						newgroup.setbasepaypercent(diz.getbasepaypercent());
						newgroup.setmeasuretarget(diz.getmeasuretarget());
						newgroup.setdrawtype(diz.getdrawtype());
						newgroup.setdrawvalue(diz.getdrawvalue());
						entitySave(newgroup);
						newCopy.addcommissiongroup(newgroup);
						for(daz in diz.FORMU){
							var formulaentity = entityLoad("formulalist", daz.FORMLIST.getid(), true);
							
							var newtype = entityNew("commissiontype");
							newtype.setname(daz.getname());
							newtype.setbonusratetype(daz.getbonusratetype());
							entitySave(newtype);
							formulaentity.addcommissiontype(newtype);
							newgroup.addcommissiontype(newtype);
							for(piz in daz.PEGS){
								var peggypig = entityNew("commissionpeg");
								peggypig.setbonus(piz.getbonus());
								peggypig.setvalue(piz.getvalue());
								entitySave(peggypig);
								newtype.addcommissionpeg(peggypig);
							}
						}
					}
					return deesGroups;
				}
			}
			
		}
		remote any function getUserCommData (month, year, user){
			var searchguy = 0;
			var thisCommEmp = entityLoad('commissionableemployee', {month=month, year=year});
			for(eic in thisCommEmp){
				var userid = eic.getuserlist();
				if(user == userid.getuserid()){
					searchguy = eic;
					searchguy.commgroups = eic.getcommissiongroup();
					for(eac in searchguy.commgroups){
						eac.formulas = eac.getcommissiontype();
						for(euc in eac.formulas){
							euc.formula = euc.getformulalist();
							euc.pegs = euc.getcommissionpeg();
						}
					}
				}
			}
			return searchguy;
			
		}
			remote any function newCommSpiffGroup(user){
			
			
			var commgroup =entityNew('commissionspiffgroup');
			commgroup.setname("Blank");
			entitySave(commgroup);
			var commemp =entityLoad('commissionableemployee', user.COMZ.commissionableemployeeid,true);
			commemp.addcommissionspiffgroup(commgroup);
			entitySave(commemp);
			ORMFlush();
			var comp =entityLoad('commissionspiffgroup');
			return comp;
			}


		remote any function newCommGroup(user){
			
			
			var commgroup =entityNew('commissiongroup');
			commgroup.setname("Blank");
			entitySave(commgroup);
			var commemp =entityLoad('commissionableemployee', user.COMZ.commissionableemployeeid,true);
			commemp.addcommissiongroup(commgroup);
			entitySave(commemp);
			ORMFlush();
			var comp =entityLoad('commissiongroup');
			return comp;
			}
		remote any function loadCommGroup(){
			
			
			var commgroup =entityLoad('commissiongroup');
			for(those in commgroup){
				those.commissionableemployee = those.getcommissionableemployee();
			}
			return commgroup;
		}
		remote any function createNewCommType(group,formula){
			var commtype = entityNew('commissiontype');
			entitySave(commtype);
			var commgroup = entityLoad('commissiongroup', group, true);
			var formugroup = entityLoad('formulalist',formula,true);
			commgroup.addcommissiontype(commtype);
			formugroup.addcommissiontype(commtype);
			entitySave(commgroup);
			entitySave(formugroup);
			ormflush();
		}
		remote any function createNewCommPeg(commtypeid, pay, work){
			var commpeg = entityNew('commissionpeg');
			var commtype = entityLoad('commissiontype',commtypeid,true);
			commpeg.setbonus(pay);
			commpeg.setvalue(work);
			entitySave(commpeg);
			commtype.addcommissionpeg(commpeg);
			entitySave(commtype);
			
		}
		remote any function updateCommGroup(item){
			var commgroup =entityLoad('commissiongroup',item.commissiongroupid,true);
			commgroup.setname(item.name);
			commgroup.setbasepaypercent(item.basepaypercent);
			commgroup.setmeasuretarget(item.measuretarget);
			commgroup.setdrawtype(item.drawtype);
			commgroup.setdrawvalue(item.drawvalue);
			entitySave(commgroup);
		}
		remote any function duplicateCommGroup(item){
			
			var commgroup =entityLoad('commissiongroup',item.commissiongroupid,true);
			var user = commgroup.getcommissionableemployee();
			
			
			
			var newcommgroup = entityNew('commissiongroup');
			newcommgroup.setname(commgroup.getname());
			newcommgroup.setbasepaypercent(commgroup.getbasepaypercent());
			newcommgroup.setmeasuretarget(commgroup.getmeasuretarget());
			newcommgroup.setdrawtype(commgroup.getdrawtype());
			newcommgroup.setdrawvalue(commgroup.getdrawvalue());
			entitySave(newcommgroup);
			user.addcommissiongroup(newcommgroup);
			entitySave(user);
			var formlist = commgroup.getcommissiontype();
			var finalobj = {};
			for(eac in formlist){
				var newformtype = entityNew('commissiontype');
				newformtype.setbonusratetype(eac.getbonusratetype());
				
				entitySave(newformtype);
				newcommgroup.addcommissiontype(newformtype);
				eac.formula = eac.getformulalist();
				
				var newform = entityLoad('formulalist', eac.formula.getid(),true);
				
				newform.addcommissiontype(newformtype);
				entitySave(newform);
				eac.peg = eac.getcommissionpeg();
				for(eic in eac.peg){
					var curpeg = entityNew('commissionpeg');
					curpeg.setvalue(eic.getvalue());
					curpeg.setbonus(eic.getbonus());
					entitySave(curpeg);
					newformtype.addcommissionpeg(curpeg);
					entitySave(newformtype);
				}
			}
			
		}
		remote any function updateCommType(item){
			var commtype = entityLoad('commissiontype',item.commissiontypeid, true);
			commtype.setbonusratetype(item.bonusratetype);
			entitySave(commtype);
		}
		remote any function deleteCommType(item){
			var commtype = entityLoad('commissiontype',item.commissiontypeid, true);
			
			entityDelete(commtype);
		}
		remote any function updatePeg(item){
			var thisPeg = entityLoad('commissionpeg',item.commissionpegid,true);
			thisPeg.setbonus(item.bonus);
			thisPeg.setvalue(item.value);
			entitySave(thisPeg);
		}
		remote any function copyToEmployee(a, b){
			var commgroup = entityLoad('commissiongroup', b, true);
			var user = entityLoad('commissionableemployee', a.commissionableemployeeid, true);
			var newcommgroup = EntityNew('commissiongroup');
			
			newcommgroup.setname(commgroup.getname());
			newcommgroup.setbasepaypercent(commgroup.getbasepaypercent());
			newcommgroup.setmeasuretarget(commgroup.getmeasuretarget());
			newcommgroup.setdrawtype(commgroup.getdrawtype());
			newcommgroup.setdrawvalue(commgroup.getdrawvalue());
			entitySave(newcommgroup);
			user.addcommissiongroup(newcommgroup);
			entitySave(user);
			var formlist = commgroup.getcommissiontype();
			var finalobj = {};
			for(eac in formlist){
				var newformtype = entityNew('commissiontype');
				newformtype.setbonusratetype(eac.getbonusratetype());
				
				entitySave(newformtype);
				newcommgroup.addcommissiontype(newformtype);
				eac.formula = eac.getformulalist();
				
				var newform = entityLoad('formulalist', eac.formula.getid(),true);
				
				newform.addcommissiontype(newformtype);
				entitySave(newform);
				eac.peg = eac.getcommissionpeg();
				for(eic in eac.peg){
					var curpeg = entityNew('commissionpeg');
					curpeg.setvalue(eic.getvalue());
					curpeg.setbonus(eic.getbonus());
					entitySave(curpeg);
					newformtype.addcommissionpeg(curpeg);
					entitySave(newformtype);
				}
			}
			
			
		}
		
		
		remote any function getcommissionable(String mmyyyy){
			
			if(Len(mmyyyy)==5){
				mmyyyy = ToString("0"&mmyyyy);
			}
			
			var month = left(mmyyyy,2);
			var year = right(mmyyyy,4);
			var eliglbeForMonthQuery = entityLoad("commissionableemployee", {"month" = month, "year" = year}, false);
			//var eliglbeForMonthQuery = ORMExecuteQuery("from commissionableemployee where month LIKE "&month&" and year LIKE "&year);
			
			if(isDefined("eliglbeForMonthQuery")){
			for(eac in eliglbeForMonthQuery){
				eac.user = eac.getuserlist();
				eac.groups = eac.getcommissiongroup();
			}
			return eliglbeForMonthQuery;
			}
			return 0;
			
			}
		remote any function createcommissionableemployee(mmyyyy,emp){
			var month = left(mmyyyy,2);
			var year = right(mmyyyy,4);
			var userQuery = entityLoad('userlist',{name=emp},true);
			var usrid = userQuery.getUSERID();
			
				var eliglbeForMonthQuery = ORMExecuteQuery("from commissionableemployee where month LIKE "&month&" and year LIKE "&year&" and userid LIKE "&usrid, true);
			
			if(!isDefined("eliglbeForMonthQuery")){
				var thisone = entityNew("commissionableemployee");
				thisone.setmonth(month);
				thisone.setyear(year);
				
				entitySave(thisone);
				userQuery.addcommissionableemployee(thisone);
				entitySave(userQuery);
			}
		}

		remote any function getLocationObject(){
			ORMReload();
		var x ={};
		x.regionlist = EntityLoad ("region");
		x.districtlist = EntityLoad ("district");
		x.storelist = EntityLoad ("stores");
		for(str in x.storelist){
			str.districtid = str.getdistrict().getdistrictid();
			str.regionid = str.getregion().getregionid();
		}
		
		return x;
		}
		
		remote any function setAccessForUser(person,access){
		
			var them = EntityLoad('userlist',person,true);
			them.setaccesslevel(access);
			EntitySave(them);
		}
		
		remote any function setWageForUser(person,wagex){
		
			var them = EntityLoad('userlist',person,true);
			them.setwage(wagex);
			EntitySave(them);
		}
		
		remote any function getUserListByDistrict(dis){	
			var userData = ORMExecuteQuery("from userlist where districtname like '" & dis&"' and accesslevel != -1"  );
			
			if(isDefined("userData")){
				return userData;
			}
		}
		remote any function setUserDistrict(person,district){
			var them = EntityLoad('userlist',person,true);
			them.setdistrictname(district);
			EntitySave(them);
		}
		remote any function setUserHidden(person){
			var them = EntityLoad('userlist',person,true);
			them.setaccesslevel(-1);
			EntitySave(them);
		}
		
		remote any function getUserListHoursPerWeek(district,year,month){
			
			var container = {};
			container.byuser = {};
			container.bystore = {};
			var from= 0;
			var to = 0;
			var currentDate = 0;
			
			var firstdayofmonth = CreateDate(year,month,1);
			var thisWeeksDate = dateAdd("d",Day(firstdayofmonth)-DayOfWeek(firstdayofmonth),firstdayofmonth);
			
			//return dis;
			var districtLoad = entityLoad('district',district,true);
			var stores = districtLoad.getstores();
			
			
			var users = getUserListByDistrict(district);
			var holidayList = entityload("holiday");
			var holidayArray = [];
			for (days in holidayList){
				arrayappend(holidayArray,days.getdate());
			}
			do{
				
			from = dateforfunction(thisWeeksDate);
			thisWeeksDate = dateAdd("d",7,thisWeeksDate);
			to = dateforfunction(dateAdd("s",-1,thisWeeksDate));
			var thisClock = getclockinclockout(from,to,district);
			container.byuser[from]={};
			container.bystore[from]={};
			container.bystore[from].total = {};
			container.byuser[from].total = {};
			container.byuser[from].to = Mid(to,5,2);
			container.byuser[from].total.draw = 0;
			container.byuser[from].total.pay = 0;
			container.byuser[from].total.hours =  0;
			container.byuser[from].total.hoursfordraw = 0;
			container.byuser[from].total.holiday = 0;
			//create containers for each week
			for(thise in stores){
				
				container.bystore[from][thise.getstoreid()]={};
				container.bystore[from][thise.getstoreid()]['users']={};
				container.bystore[from][thise.getstoreid()].hours = 0;
				container.bystore[from][thise.getstoreid()].hoursnotfordraw = 0;
				container.bystore[from][thise.getstoreid()].hoursfordraw = 0;
				container.bystore[from][thise.getstoreid()].holiday =0;
				container.bystore[from][thise.getstoreid()].pay =0;
			}
			
			for (those in users){
				
				container.byuser[from]['user'][those.getname()]={};
				container.byuser[from]['user'][those.getname()].hours = 0;
				container.byuser[from]['user'][those.getname()].hoursnotfordraw = 0;
				container.byuser[from]['user'][those.getname()].hoursfordraw = 0;
				container.byuser[from]['user'][those.getname()].holiday = 0;
				container.byuser[from]['user'][those.getname()]['clocks']=[];
				container.byuser[from]['user'][those.getname()]['draw']=0;
				container.byuser[from]['user'][those.getname()]['pay']=0;
				
			}
			
			var hoursC = 0;
			var userC = 0;
			var storeC = 0;
		//iterate over clocks to fill containers
			for(clocks in thisClock){
				
				
				
				
					try{
				
				hoursC=val(clocks.gethours());
				userC=clocks.getusername();
				//hoursC = LSParseNumber(hoursC, "__.__");
				
				if(!StructKeyExists(container.bystore[from][clocks.getstorename()]['users'],userC)){
					
					container.bystore[from][clocks.getstorename()]['users'][clocks.getusername()]={};
					
					container.bystore[from][clocks.getstorename()]['users'][clocks.getusername()].hours =0;
					container.bystore[from][clocks.getstorename()]['users'][clocks.getusername()].hoursnotfordraw = 0;
					container.bystore[from][clocks.getstorename()]['users'][clocks.getusername()].holiday = 0;
					
				}
				if(ArrayContains(holidayArray,clocks.getdate())&& month == Mid(clocks.getdate(),5,2)){
					container.bystore[from][clocks.getstorename()]['users'][clocks.getusername()]['HOLIDAY']= container.bystore[from][clocks.getstorename()]['users'][clocks.getusername()]['HOLIDAY']+ hoursC ;
					container.bystore[from][clocks.getstorename()]['HOLIDAY'] =container.bystore[from][clocks.getstorename()]['HOLIDAY'] + hoursC ;
					if(StructKeyExists(container.byuser[from]['user'],userC)){
					container.byuser[from]['user'][clocks.getusername()]['HOLIDAY']= container.byuser[from]['user'][clocks.getusername()]['HOLIDAY']+hoursC ;
					}
				}
				if(month !=Mid(clocks.getdate(),5,2)){
					
					//if(yeardate < commdate )
					//dont do anything
					container.bystore[from][clocks.getstorename()]['users'][clocks.getusername()]['HOURSNOTFORDRAW'] = container.bystore[from][clocks.getstorename()]['users'][clocks.getusername()]['HOURSNOTFORDRAW'] + hoursC ;
					
					container.bystore[from][clocks.getstorename()]['HOURSNOTFORDRAW'] =container.bystore[from][clocks.getstorename()]['HOURSNOTFORDRAW']+ hoursC ;
					if(StructKeyExists(container.byuser[from]['user'],userC)){
					container.byuser[from]['user'][clocks.getusername()]['HOURSNOTFORDRAW'] =container.byuser[from]['user'][clocks.getusername()]['HOURSNOTFORDRAW'] + hoursC ;
					}
					
				}
				
					container.bystore[from][clocks.getstorename()]['users'][clocks.getusername()]['HOURS']= container.bystore[from][clocks.getstorename()]['users'][clocks.getusername()]['HOURS']+ hoursC ;
					container.bystore[from][clocks.getstorename()]['HOURS'] =container.bystore[from][clocks.getstorename()]['HOURS'] + hoursC ;
					if(StructKeyExists(container.byuser[from]['user'],userC)){
					container.byuser[from]['user'][clocks.getusername()]['HOURS']= container.byuser[from]['user'][clocks.getusername()]['HOURS']+hoursC ;
					arrayappend (container.byuser[from]['user'][clocks.getusername()]['CLOCKS'],clocks);
					}
				
				
				
		
			}catch(any err){
				
				return err;
			}
				}
		
			
			
			
				
			}while (Day(thisWeeksDate)<=DaysInMonth(firstdayofmonth)&&Month(thisWeeksDate)<=Month(firstdayofmonth)&&Year(thisWeeksDate)<=Year(firstdayofmonth));
					
					
					
					
					
					//add draw now that container is full of data
					var i = 4;
					for(weeks in container.byuser){
						i= i + 1;
						
						if(container.byuser[weeks].to == month){
							
							for(user in container.byuser[weeks]['user']){
						users = container.byuser[weeks]['user'][user];	
						users['hoursfordraw'] = (users['HOURS']-users['HOURSNOTFORDRAW']);
							users['draw']=users['HOLIDAY']*6;
							
							 if(users['HOURS']>40){
								var overtime = users['HOURS']-40;
								
							users['draw']= users['draw']+(overtime*6);
								
							}
							
								users['pay']=users['draw']+((users['HOURS'])*12);
							users['draw']= users['draw']+(users['hoursfordraw']*12 );
							
							container.byuser[weeks].total.draw = container.byuser[weeks].total.draw + users['DRAW'];
						
							container.byuser[weeks].total.pay = container.byuser[weeks].total.pay + users['PAY'];
							container.byuser[weeks].total.hours =  container.byuser[weeks].total.hours + users['HOURS'];
							
							container.byuser[weeks].total.hoursfordraw = container.byuser[weeks].total.hoursfordraw + users['HOURSFORDRAW'];
							
							container.byuser[weeks].total.holiday = container.byuser[weeks].total.holiday + users['HOLIDAY'];
						
						}
						}
						else{
							
							for(user in container.byuser[weeks]['user']){
						users = container.byuser[weeks]['user'][user];	
						users['hoursfordraw'] = (users['HOURS']-users['HOURSNOTFORDRAW']);
						var overtime = users['HOURS']-40;
						
							users['draw']=users['HOLIDAY']*6;
							if(users['HOURS']>40){
								
								
							users['pay']= users['draw']+(overtime*6);
								
							}
							if(users['hoursfordraw']>40){
								
								var overtime2 = users['hoursfordraw']-40;
							users['draw']= users['draw']+(overtime2*6);
								
							}
							
								users['pay']=users['pay']+((users['HOURS'])*12);
							users['draw']= users['draw']+(users['hoursfordraw']*12 );
							
							container.byuser[weeks].total.draw = container.byuser[weeks].total.draw + users['DRAW'];
						
							container.byuser[weeks].total.pay = container.byuser[weeks].total.pay + users['PAY'];
							container.byuser[weeks].total.hours =  container.byuser[weeks].total.hours + users['HOURS'];
							
							container.byuser[weeks].total.hoursfordraw = container.byuser[weeks].total.hoursfordraw + users['HOURSFORDRAW'];
							
							container.byuser[weeks].total.holiday = container.byuser[weeks].total.holiday + users['HOLIDAY'];
						
						}
							
						}
						
						
					}
					
					
					return container;
				
		
			
		}
		remote any function dateforfunction(dateObj){
			
			return (""&Year(dateObj)&Right("0"&Month(dateObj),2)&Right("0"&Day(dateObj),2));
			
		}
		remote any function setpassword(user,pw){
			var userData = EntityLoad('userlist',user['userid'],true);
			userData.setpassword(pw['new']);
		}
		
		remote any function getschedule(from,to){
			//var hourData = EntityLoad('hoursworked', { yearmonth=something });
			var dateList = ORMExecuteQuery("from storeschedule where date<="&to&" and date>="&from);
			
			if(isDefined("dateList")){
				return dateList;
			}
		}
		
		remote any function getclockinclockout(from,to,district){
			var districtLoad = entityLoad('district',district,true);
			var keys = districtLoad.getstores();
			var keyArray = [];
			for(key in keys){
				ArrayAppend(keyArray,key.getstoreid());
			}
			var dateList = ORMExecuteQuery("from clockinclockout where date<="&to&" and date>="&from&" and storename in (:keylist)",{keylist=keyArray});
			if(isDefined("dateList")){
				return dateList;
			}
			return "Error";
		}
		
	
		remote any function gethoursworked(from,to){
			//var hourData = EntityLoad('hoursworked', { yearmonth=something });
			var dateList = ORMExecuteQuery("from hoursworked where date<="&to&" and date>="&from);
			
			if(isDefined("dateList")){
				return dateList;
			}
		}
		
		remote any function sendEmailForPassword(user){
			var them = EntityLoad('userlist',user,true);
				mailService = new mail(
			  to = them.getemail(),
			  from = "password@greenchili.space",
			  subject = "Password Reminder",
			  body= them.getpassword()
			);
			
			// Send
			mailService.send();
}
		
		
	</cfscript>
</cfcomponent>

