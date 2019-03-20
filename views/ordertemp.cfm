    
    <html>
    	<input type="checkbox" ng-model="isAdmin" ng-checked='true'> IsAdmin
    	
    	<button style = " width :  25% ;"  ng-if="selectedCat.tier>0" ng-click="selectedCat.tier=selectedCat.tier-1;">Back </button>
    	<br>
    	<br>
    	{{selectedCat}}
    	<div style="border: solid;display:block;" >
    		
    		
	    	<div  style=" border: solid; float:left; display : inline; position : relative; "  ng-repeat = "cats in result=(phonecatlist|filter: {'tier':(1)})" ng-click = "spring(cats)" >
		    	{{cats.title}}<br>
		    	<div ng-if="isAdmin">Tier {{cats.tier}} </div><br>
		    	<div ng-if="isAdmin">Parentid {{cats.parent}}</div><br>
		    	<div ng-if="isAdmin">isFinal {{cats.finaltier}}</div>
	    	</div>
    	
    	
	    	<span style=" border: solid;  " ng-if="selectedCat.tier == 0">
	    		Title<input ng-model="catToAdd.title"><br>
	    		Final Tier <input type="checkbox"  ng-model="catToAdd.finaltier" ng-init="catToAdd.finaltier='false'"><br>
	    		<button ng-click="addCat()" >Add</button>
	    		
	    	</span>
    	
    	
    	<br>
    	<div ng-if="selectedCat.tier>0" style=" border: solid; display:block; position : static; ">
    	
    		<div  style=" border: solid; display:block " ng-repeat = "cats in result=(phonecatlist|filter: {'tier':(selectedCat.tier+1),'parent':(selectedCat.id)})" ng-click = "spring(cats)" >
	    	
		    	{{cats.title}}<br>
		    	<div ng-if="isAdmin">Tier {{cats.tier}} </div><br>
		    	<div ng-if="isAdmin">Parentid {{cats.parent}}</div><br>
		    	<div ng-if="isAdmin">isFinal {{cats.finaltier}}</div>
	    	</div>
	    	
	    	
    	<span style=" border: solid; ">
    		Title<input ng-model="catToAdd.title"><br>
    		Tier<input ng-model ="catToAdd.tier"  ng-init="catToAdd.tier=selectedCat.tier+1"><br>
    		Parentid<input ng-model ="catToAdd.parent" ng-init="catToAdd.parent=selectedCat.id"><br>
    		
    		Final Tier <input type="checkbox"  ng-model="catToAdd.finaltier" ng-init="catToAdd.finaltier='false'" ng-if="selectedCat.tier> 0"><br>
    		<button ng-click="addCat()" >Add</button>
    		
    	</span>
    	</div>
    	</div>
    	
    	
    </html>
    
   