<cfcomponent>
<cfscript>
	
			remote any function newgoalformatgroup(name){
				var gf = entityNew("goalformatgroup");
				entitySave(gf);
				gf.setname(name);
				entitySave(gf);
			}
			remote any function loadgoalformatgroup(){
				var arra = entityLoad("goalformatgroup");
				for ( var each in arra){
					each['format'] = each.getgoalformats();
				}
				return arra;
			}
			remote any function deletegoalformatgroup(id){
				var th = entityLoad("goalformatgroup",id,true);
				entityDelete(th); 
				
			}
			remote any function newgoalformat (id){
				var ta = entityNew("goalformats");
				var td = entityLoad("goalformatgroup",id,true);
				td.addgoalformats(ta);
				entitySave(td);
				entitySave(ta);
			}
			remote any function setgoalformatprogress (id,value){
				var ta = entityLoad("goalformats",id,true);
				ta.setprogress(value);
				entitySave(ta);
			}
			remote any function setgoalformatpercentpayed (id,value){
				var ta = entityLoad("goalformats",id,true);
				ta.setpercentpayed(value);
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