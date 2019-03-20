<html>
	<style>
	
	</style>
	
	<button ng-click="createFormula()">
		New Formula
	</button>
	<button ng-click="reload()">
		Reload
	</button>
	
	<ul>
		<li ng-repeat="formula in formulas | orderBy:'-orderlocation' ">
			{{formula.name}}<br>
			<input type="checkbox" ng-checked="formula.trending" ng-model="formula.isTrending" ng-change="setFormulaTrending(formula)">Trending</input>
			<input type="checkbox" ng-init="formula.isSelected = false" ng-model="formula.isSelected" ng-change="setActiveFormula(formula)">Select</input>
			<input style="width:40px" ng-change="setOrderLocation(formula)" ng-model="formula.orderlocation"></input>Order Location
			
			
			<input ng-change="saveColor(formula)" type="color" ng-model="formula.color"  />
			<input ng-change="saveDecimal(formula)" placeholder="decimallength" ng-model="formula.decimal"  />
			
			<input ng-change="saveWarningAlert(formula)" placeholder="warningalert" ng-model="formula.warningalert"  />
			<input ng-change="saveBelowAverageAlert(formula)" placeholder="belowaveragealert" ng-model="formula.belowaveragealert"  />
			<input type="checkbox" ng-checked="formula.displayspercentage" ng-model="formula.displayspercentage" ng-change="setshowpercentage(formula)">add%</input>
			<select ng-change="saveViewGroup(formula)" ng-model="formula.VIEWGROUP.id"
			  	ng-options="fvg.id as fvg.name for fvg in formulaviewgroups">
					
			</select>
			
			
			<span ng-if="formula.isSelected">
			 formula list {{formulaList}}
			<form >
				<input ng-value="formula.name" ng-model="send" ng-change="setNameForFormula(send,formula.id)"></input>SetName
			</form>
			
			
			
			
			
				
			
			<div >
				<select ng-model="steve"
			  	ng-options="dec for dec in decisions">
					
			</select>
			{{formula}}
			<button ng-click="setFormulaList(steve)">Add</button>
			<button ng-click="saveFormula(formula.id)">Save</button>
			<button ng-click="deleteFormula(formula.id)">Delete</button>
			
			</div>
			</span>
			<!---
			<div ng-repeat="entries in formulaList">
			 <select name="that" ng-model="that" ng-change="setFormulaList(that)" >
			 	
			  <option ng-repeat="beep in decisions" ng-value="that" value="beep" ng-click="setFormulaList(beep)" >{{beep}}</option>
			  
			 </select>
			 
			 
			 <br/>
			 
			 
			 
			 
			 
			<select name="thisType" ng-model="thisType" >
			  <option value="GP">GP of</option>
			  <option value="QTY">QTY of</option>
			 </select><br/>
			 <select  name="thatType" ng-model="thatType" >
			 	
			  <option ng-repeat="cats in categories" value="cats.productgroupid">{{cats.productgroupid}}</option>
			  
			 </select>
			 <select name="formula.oksure" ng-model="formula.oksure"  >
			  <option value="end">)</option>
			  <option value="a">+</option>
			  <option value="b">-</option>
			  <option value="c">/</option>
			  <option value="d">*</option>
			 </select>
			 
			 <select name="formula.second" ng-model="formula.second" >
			 	  <option ng-if="formula.oksure!== 'end'" value="open">(</option>
			 	  <option value="a">+</option>
				  <option value="a">-</option>
				  <option value="a">/</option>
				  <option value="a">*</option>
				
				  <option ng-if="formula.oksure !== 'end'" value="GP">GP of</option>
				  <option ng-if="formula.oksure !=='end'" value="QTY">QTY of</option>
			 </select>
			  <select name="formula.thoType" ng-model="formula.thoType" >
			 	  <option ng-if="formula.second!== 'GP'||formula.oksure!== 'QTY'" value="open">(</option>
			 	  <option ng-if="formula.second!== 'end'" value="open">(</option>
			 	  <option ng-if="formula.second!== 'a'" value="a">+</option>
				  <option ng-if="formula.second!== 'a'" value="a">-</option>
				  <option ng-if="formula.second!== 'a'" value="a">/</option>
				  <option ng-if="formula.second!== 'a'" value="a">*</option>
				
				  <option ng-if="formula.second !== 'end'" value="GP">GP of</option>
				  <option ng-if="formula.second !== 'end'" value="QTY">QTY of</option>
				   </select>
				  <select name="thirdType" ng-model="thirdType" >
			 			 <option value="GP">GP of</option>
			 			 <option value="QTY">QTY of</option>
			 </select><br/>
			 
			 <select  name="thxType" ng-model="thxType" >
			 	
			  <option ng-repeat="cats in categories" value="cats.productgroupid">{{cats.productgroupid}}</option>
			  
			 </select>
				  
				  
				  
			 </select>
			 --->
		</li>
	</ul>
	
</html>