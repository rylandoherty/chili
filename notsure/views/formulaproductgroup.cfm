<html>
	<button ng-click="createFormula()">
		New Formula
	</button>
	<ul>
		<li ng-repeat="formula in formulas">
			{{formula.name}}<br>
			<input type="checkbox" ng-checked="formula.trending" ng-model="formula.isTrending" ng-change="setFormulaTrending(formula)">Trending</input>
			<input type="checkbox" ng-init="formula.isSelected = false" ng-model="formula.isSelected" ng-change="setActiveFormula(formula)">Select</input>
			<input style="width:40px" ng-change="setOrderLocation(formula)" ng-model="formula.orderlocation"></input>Order Location
			
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