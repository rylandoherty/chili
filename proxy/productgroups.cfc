<cfcomponent>
<cfscript>
	
	
	remote any function loadFormulaViewGroup(){
		var thisOne= entityLoad ("formulaviewgroup");
		return thisOne;
	}
		remote any function loadFormulaViewGroupObject(){
		var thisOne= entityLoad ("formulaviewgroup");
		var newObj = {};
		for(dem in thisOne){
			newObj[dem.getid()] = dem;
		}
		return newObj;
	}
	remote any function saveViewGroup(formula){
		var thisOne= entityLoad ("formulalist", formula.id , true);
		var thisTwo= entityLoad ("formulaviewgroup", formula.VIEWGROUP.id , true);
		thisTwo.addformulalist(thisOne);
		entitySave(thisTwo);
		entitySave(thisOne);
		ormflush();
	}
	remote any function setFormulaName(a,b){
		var thisOne = entityLoad ("formulalist",b,true);
		thisOne.setname(a);
		entitySave(thisOne);
		ormflush();
	}
	remote any function deleteFormula(b){
		var thisOne = entityLoad ("formulalist",b,true);
		
		entityDelete(thisOne);
		ormflush();
	}
	remote any function saveFormula(formulaid, formula){
		var thisOne= entityLoad ("formulalist", formulaid, true);
		thisOne.setformula(formula);
		entitySave(thisOne);
		ormflush();
	}
	remote any function savetheColor(formula){
		var thisOne= entityLoad ("formulalist", formula.id , true);
		thisOne.setcolor(formula.color);
		entitySave(thisOne);
		ormflush();
	}
	remote any function savetheDecimal(formula){
		var thisOne= entityLoad ("formulalist", formula.id , true);
		thisOne.setdecimal(formula.decimal);
		entitySave(thisOne);
		ormflush();
	}
	remote any function saveWarningAlert(formula){
		var thisOne= entityLoad ("formulalist", formula.id , true);
		thisOne.setwarningalert(formula.warningalert);
		entitySave(thisOne);
		ormflush();
	}
	remote any function saveBelowAverageAlert(formula){
		var thisOne= entityLoad ("formulalist", formula.id , true);
		thisOne.setbelowaveragealert(formula.belowaveragealert);
		entitySave(thisOne);
		ormflush();
	}
	remote any function loadFormula(){
		var thisOne= entityLoad ("formulalist");
		return thisOne;
	}
	remote any function createFormula(){
				try {
					var groupQuery = entityNew( "formulalist");
					entitySave(groupQuery);
					ormflush(); 
				 }
				catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
			}
			remote any function getFormula(){
				try {
					var groupQuery = entityLoad( "formulalist");
					for(var cats in groupQuery){
						cats.viewgroup = cats.getformulaviewgroup();
						
					}
					if(isDefined("groupQuery")){
						
					
				
				 return groupQuery;
				  }
				 
				 }
				 
				catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
			}
			remote any function setFormulaTrending(form){
				try {
					var groupQuery = entityLoad( "formulalist",form['id'],true);
					if(groupQuery.gettrending()==true){
					groupQuery.settrending(false);	
					}
					else{
						groupQuery.settrending(true);
					}
				 
				 }
				 
				catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
			}
			remote any function setshowpercentage(form){
				try {
					var groupQuery = entityLoad( "formulalist",form['id'],true);
					if(groupQuery.getdisplayspercentage()==true){
					groupQuery.setdisplayspercentage(false);	
					}
					else{
						groupQuery.setdisplayspercentage(true);
					}
				 
				 }
				 
				catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
			}
			remote any function setOrderLocation(form){
				try {
					var groupQuery = entityLoad( "formulalist",form['id'],true);
					
						groupQuery.setorderlocation(form['orderlocation']);
					
				 
				 }
				 
				catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
			}
	
	remote any function removeItem(skuid){
				try {
					var groupQuery = entityLoad( "productgroupitems",skuid,true);
					entityDelete(groupQuery);
					ormflush(); 
				 }
				catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
			}
				remote any function deleteCategory(productgroupid){
				try { 
					
			   var catQuery = entityLoad("productgroup",productgroupid);
			     entityDelete( catQuery);
			    
			     
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
			
			}
			
			
			
			remote any function getGroups(){
				try {
					var groupQuery = entityLoad( "productgroup");
					var objectNamedAsCategory = {};
					
					if(isDefined("groupQuery")){
						
					for(var cats in groupQuery){
						objectNamedAsCategory[cats.getproductgroupid()] = cats;
						objectNamedAsCategory[cats.getproductgroupid()]['items'] = cats.getproductgroupItems();
					}
				
				 return objectNamedAsCategory;
				  }
				 
				 }
				 
				catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
			}
			
			
			
			remote any function createGroup(name, catType){
				try {
					var groupQuery = entityNew( "productgroup");
					groupQuery.setproductgroupid(name);
					groupQuery.settype(catType);
					entitySave(groupQuery);
					ormflush(); 
				 }
				catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
			}
			remote any function deleteGroup(name){
				try {
					var groupQuery = entityLoad( "productgroup",name,true);
					var items = groupQuery.getproductgroupitems();
					for(var each in items){
						entityDelete(each);
					}
					entityDelete(groupQuery);
					ormflush(); 
				 }
				catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
			}
			
			remote any function addSkuToGroup(activeGroup,productgroupIDSku, nameOfProduct){
				try {
					var category = EntityLoad("productgroup", activeGroup,true);
					var item = EntityNew("productgroupitems");
					item.setproductSKU( productgroupIDSku.toString() );
					item.setname( nameOfProduct.toString() );
					
					entitySave(item);
					ormflush();
					category.addproductgroupitems(item);
					entitySave(category);
					ormflush(); 
					
				 }
				catch(Exception e){
					
				}
				}
				
				remote any function addCategoryToGroup(activeGroup,productgroupIDSku,ind){
				try {
					var category = EntityLoad("productgroup", activeGroup,true);
					var item = EntityNew("productgroupitems");
					item.setcategorycode( productgroupIDSku.CATEGORY.toString() );
					item.setcategorydepth( ind+1 );
					
					
					
					entitySave(item);
					ormflush();
					category.addproductgroupitems(item);
					entitySave(category);
					ormflush(); 
					
				 }
				catch(Exception e){
					
				}
				}
				
				
				
				
				remote any function addGroupToGroup(){
				try {
					EntityLoad(category, categoryID);
				 }
				catch(Exception e){
					
				}
				
				}
</cfscript>
</cfcomponent>