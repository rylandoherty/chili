<cfcomponent>
<cfscript>

			remote any function newmonthlygoal(gg){
				var gf = entityNew("storegoal");
				gf.setyear(gg.year);
				gf.setmonth(gg.month);
				gf.setstorename(gg.storename);
				gf.setlastyear(gg.lastyear);
				gf.setbeatbest(gg.beatbest);
				gf.setaverage(gg.average);
				gf.setformulaname(gg.formulaname);
				entitySave(gf);
			}
			
			remote any function loadmonthlygoals(){
				var arra = entityLoad("storegoal");

				return arra;
			}
			remote any function deletemonthlygoal(id){
				var th = entityLoad("storegoal",id,true);
				entityDelete(th);

			}
			remote any function setStoreForcast(goalobj){
				var th = entityLoad("storegoal",goalobj.id,true);
				th.setforcast(goalobj.forcast);
				entitySave(th);

			}
			remote any function setStoreFinal(goalobj){
				var th = entityLoad("storegoal",goalobj.id,true);
				th.setfinalized(goalobj.finalized);
				entitySave(th);

			}

			remote any function newgoalforemployee (goalobject){
				var ta = entityNew("goalemployee");
				ta.setusername(goalobject.username);
				ta.setstorename(goalobject.storename);
				ta.setyear(goalobject.year);
				ta.setmonth(goalobject.month);
				entitySave(ta);
			}
			remote any function loademployeegoals(){
				var arra = entityLoad("goalemployee");

				return arra;
			}

			remote any function updateEmpGoal (emplobj){
				
				
				var arra = ORMExecuteQuery(" from goalemployee where month like '"&emplobj.month&"' and year like '"&emplobj.year&"' and formula like '"&emplobj.formula&"' and username like '"&emplobj.username&"'" );
			
				if(!ArrayLen(arra)){
					var ta = entityNew("goalemployee");
					ta.setusername(emplobj.username);
					ta.setstorename(emplobj.storename);
					ta.setyear(emplobj.year);
					ta.setmonth(emplobj.month);
					if(StructKeyExists(emplobj, "finalized")){
						if(emplobj.finalized == 'NO'){
							ta.setfinalized('false');		
						}
						else{
						ta.setfinalized('true');
						}
					}
					if(StructKeyExists(emplobj, "forcast")){
					ta.setforcast(emplobj.forcast);
					}
					if(StructKeyExists(emplobj, "beatbest")){
					ta.setbeatbest(emplobj.beatbest);
					}
					if(StructKeyExists(emplobj, "average")){
					ta.setaverage(emplobj.average);
					}
			
					ta.setformula(emplobj.formula);
					entitySave(ta);
					}
				if(ArrayLen(arra)){
					
					if(StructKeyExists(emplobj, "forcast")){
					arra[1].setforcast(emplobj.forcast);
					}
					if(StructKeyExists(emplobj, "finalized")){
						if(emplobj.finalized == 'NO'){
							arra[1].setfinalized('false');		
						}
						else{
							arra[1].setfinalized('true');
						}
					}
					if(StructKeyExists(emplobj, "beatbest")){
					arra[1].setbeatbest(emplobj.beatbest);
					}
					if(StructKeyExists(emplobj, "average")){
					arra[1].setaverage(emplobj.average);
					}
					entitySave(arra[1]);
				}	
				
				}
				
				
				
		
		
				
				
			
			remote any function setgoalpercenteffort (id,value){
				var ta = entityLoad("goalemployee",id,true);
				ta.setpercentageeffort(value);
				entitySave(ta);
			}

			remote any function setStoreForGoal(id,store){

				var ta = entityLoad("stores",store,true);
				var td = entityLoad("goalstore",id,true);
				ta.addgoalstore(td);

			}
			remote any function setgoalcash (id){

				var td = entityLoad("goalstore",id['id'],true);
				td.setcash(id['cash']);
				entitySave(td);

			}
			remote any function setgoalquantity (id){

				var td = entityLoad("goalstore",id['id'],true);
				td.setquantity(id['quantity']);
				entitySave(td);

			}
			remote any function setgoalformatgroup (id){

				var td = entityLoad("goalstore",id['id'],true);
				var tc = entityLoad("goalformatgroup",id.goalformatgroup, true);
				tc.addgoalstore(td);
				entitySave(td);

			}
			remote any function creategoalstore(f){
				var gf = entityNew("goalstore");
				gf.setname(f.name);
				gf.setcash(f.cash);
				gf.setquantity(f.quantity);
				gf.setmonth(f.month);
				gf.setyear(f.year);
				var ta = entityLoad("stores",f.stores,true);
				var tb = entityLoad("goalformatgroup",f.goalformatgroup,true);
				var tc = entityLoad("formulalist", f.formulalist, true);
				ta.addgoalstore(gf);
				tb.addgoalstore(gf);
				tc.addgoalstore(gf);

				entitySave(gf);


			}
			remote any function setgoalstorethings(id,store){



			}


			remote any function loadgoalstore(year,month){
				var arra = entityLoad("goalstore");

				var arra = ORMExecuteQuery("from goalstore where month="&month&" and year="&year);
				for(each in arra){
					var boop = {};
					each['stores']= each.getstores();
					boop = each.getgoalformatgroup();
					each['goalformatgroup'] = each.getgoalformatgroup();
					each['formulalist']= each.getformulalist();
					each['format'] = boop.getgoalformats();

				}

				return arra;
			}

			remote any function deletegoalstore(id){
				var tb = entityLoad("goalstore",id,true);
				entityDelete(tb);
			}

</cfscript>
</cfcomponent>