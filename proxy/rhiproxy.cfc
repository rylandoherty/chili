<cfcomponent>
<cfscript>

			remote any function getROS(){
				var reasons = entityLoad("rhiROS");
				
				
				
				return reasons;
				
			}
			remote any function addROS(catobj){
				
					var reasons = entityNew('rhiROS');
					reasons.setdisplay(catobj.a);
    				reasons.setdescription(catobj.b);
    				reasons.setgroupnum(catobj.c);
 
					entitySave(reasons);
				
				
				
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
</cfscript>
</cfcomponent>