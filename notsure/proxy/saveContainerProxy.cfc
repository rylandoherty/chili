<cfcomponent>
<cfscript>
			remote any function deleteEntry(type){
				//var gf = entityLoad("salescontainer", type, false);

				var gf = ormExecuteQuery( "FROM salescontainer as dc WHERE dc.type LIKE '"&type&"'" );
				if(IsDefined("gf")){


				for( demtings in gf){
				entityDelete(demtings);
				}
					}
			}
			remote any function fcontainer(type, district, storename, username,productgroup, qty, gp ){
							var saletoadd = entityNew("salescontainer");

							saletoadd.setusername(username);

							saletoadd.setstorename(storename);

							saletoadd.setdistrict(district);
							saletoadd.settype(type);

							saletoadd.setproductgroup(productgroup);
							saletoadd.setqty(qty);
							saletoadd.setgp(gp);
							entitySave(saletoadd);


			}
			remote any function loadcontainer(type){
			var gf = ormExecuteQuery( "FROM salescontainer as dc WHERE dc.type LIKE '"&type&"'" );
			return gf;
			}


</cfscript>
</cfcomponent>