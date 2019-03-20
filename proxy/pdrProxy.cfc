<cfcomponent>
<cfscript>

			remote any function get48hoursPDR(phonecatobj){
				var salesGrab = ORMExecuteQuery("from productdetails where date<="&date2&" and date>"&date1);
				var newCat = entityNew('phonecats');
				entitySave(newCat);
				newCat.settitle(phonecatobj.title);
				newCat.settier(phonecatobj.tier);
				var newParent = phonecatobj.parent&","&newCat.getid();
				newCat.setparent(newParent);
				newCat.setfinaltier(phonecatobj.finaltier);
				newCat.setcategory(phonecatobj.category);
				entitySave(newCat);
				
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
</cfscript>
</cfcomponent>