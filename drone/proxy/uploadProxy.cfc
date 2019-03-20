<cfcomponent>
	
	<cfscript>
		remote any function setUpload(file,name,location,viewgroup){
				try { 
					
					var addedtime = DateTimeFormat(now(),"yyyy.MM.dd HH:nn:ss");
					
					var p = EntityLoad("pilot", name, true);
					
					var vg = EntityLoad("viewgroup", viewgroup,true);
					var l = EntityLoad("location", location,true);
					var uploadType = 0;
					if(Find('.jpg',file )>0 || Find('.png',file)>0){
						uploadType = 1;
					}
					else{
						uploadType = 2;
					}
					
					var upty = EntityLoad("uploadtype", uploadtype,true);
					var d = EntityNew("upload");
					d.setfilename("upload/"&file);
					d.setaddedon(addedtime);
					d.setlocation(l);
					EntitySave(d);
					
					p.addUpload(d);
					vg.addUpload(d);
					upty.addUpload(d);
					l.addUpload(d);
					
					
					if(isDefined(location)){
						d.setlocationid();
					}
					
					
					
					
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function getUploads(){
				try { 
					
					
					var d = EntityLoad("upload");
					var n=arraylen(d);
					var newArray = [];
					
    				for (i=1;i<=n;i++){
    				d[i]['uploadtypeid']= d[i].GETUPLOADTYPE();
					d[i]['locationid']= d[i].GETLOCATION();
					d[i]['pilotid']= d[i].GETPILOT();
					d[i]['viewgroupid']= d[i].GETVIEWGROUP();
					}
					for (i=ArrayLen(d); i>0;i--){
						ArrayAppend(newArray, d[i]);
					}
					return newArray;
					
					
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function getUploadType(){
				try { 
					
					var d = EntityLoad("viewgroup");
					return d;
					
					
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function getPilots(){
				try { 
					
					var d = EntityLoad("pilot");
					return d;
					
					
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function getViewGroups(){
				try { 
					
					var d = EntityLoad("viewgroup");
					return d;
					
					
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function getLocations(){
				try { 
					
					var d = EntityLoad("location");
					return d;
					
					
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	remote any function addLocation(name){
				try { 
					
					var d = EntityNew("location");
					d.setname(name);
					EntitySave(d);
					return d;
					
					
			} catch(Exception ex) { 
			    WriteOutput("<p>#ex.message#</p>"); 
			} 
	}
	</cfscript>
</cfcomponent>