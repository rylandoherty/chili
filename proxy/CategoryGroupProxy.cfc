<cfcomponent>
<cfscript>
	
	
	
	remote any function setFormulaName(a,b){
		var thisOne = entityLoad ("groupformula",b,true);
		thisOne.setname(a);
		entitySave(thisOne);
		ormflush();
	}
	remote any function saveFormula(formulaid, formula){
		var thisOne= entityLoad ("groupformula", formulaid, true);
		thisOne.setformula(formula);
		entitySave(thisOne);
		ormflush();
	}
	remote any function loadFormula(){
		var thisOne= entityLoad ("groupformula");
		return thisOne;
	}
	
	remote any function removeItem(skuid){
				try {
					var groupQuery = entityLoad( "categoryitems",skuid,true);
					entityDelete(groupQuery);
					ormflush(); 
				 }
				catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
			}
				remote any function deleteCategory(categoryid){
				try { 
					
			   var catQuery = entityLoad("category",categoryid);
			     entityDelete( catQuery);
			    
			     
			    ormflush(); 
			    //writeDump(item); 
			   // var locationCode = location;
			    
			    
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
			}
			remote any function createFormula(){
				try {
					var groupQuery = entityNew( "groupformula");
					entitySave(groupQuery);
					ormflush(); 
				 }
				catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
			}
			remote any function getFormula(){
				try {
					var groupQuery = entityLoad( "groupformula");
					if(isDefined("groupQuery")){
						
					
				
				 return groupQuery;
				  }
				 
				 }
				 
				catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
			}
			
			remote any function getGroups(){
				try {
					var groupQuery = entityLoad( "category");
					var objectNamedAsCategory = {};
					if(isDefined("groupQuery")){
						
					for(var cats in groupQuery){
						objectNamedAsCategory[cats.getcategoryid()] = cats;
						objectNamedAsCategory[cats.getcategoryid()]['items'] = cats.getcategoryItems();
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
					var groupQuery = entityNew( "category");
					groupQuery.setcategoryid(name);
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
					var groupQuery = entityLoad( "category",name,true);
					var items = groupQuery.getcategoryitems();
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
			
			remote any function addSkuToGroup(activeGroup,categoryIDSku){
				try {
					var category = EntityLoad("category", activeGroup,true);
					var item = EntityNew("categoryitems");
					item.setproductSKU( categoryIDSku.PRODUCTSKU.toString() );
					item.setname( categoryIDSku.PRODUCTNAME.toString() );
					item.setgrossProfit( categoryIDSku.GROSSPROFIT);
					item.setcost( categoryIDSku.TOTALCOST );
					
					entitySave(item);
					ormflush();
					category.addcategoryitems(item);
					entitySave(category);
					ormflush(); 
					
				 }
				catch(Exception e){
					
				}
				}
				
				remote any function addCategoryToGroup(activeGroup,categoryIDSku,ind){
				try {
					var category = EntityLoad("category", activeGroup,true);
					var item = EntityNew("categoryitems");
					item.setcategorycode( categoryIDSku.CATEGORY.toString() );
					item.setcategorydepth( ind+1 );
					
					
					
					entitySave(item);
					ormflush();
					category.addcategoryitems(item);
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