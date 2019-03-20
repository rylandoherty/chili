<html >
	
<style>
	.box{
	 
	  display:inline;
	min-width:90vw;	
	max-width:90vw;
		float:left;
	
	}
	 .results{
	 	
	 	float:left;
	  border: solid;
	   max-width:13vw;
	   
	  
	 }
	 .control{
	 	min-width:30vw;	
	max-width:30vw;
	  border: solid;
	  float:left;
	 }
	
</style>
	
	
	
	<body   >
		<button ng-click="copyStuff()">copy</button>
	<button style=" float: left" ng-click="loadpage();"> reset</button><button style=" float: left" ng-click="hidecontrol();"> hide</button>
	<br>
	<br>
	
	<div class="box" >
		
	<table class="control">
		
		
		<tr ng-repeat="(key,val)  in  vars.demo">
			<td> {{key}} </td>
			<td><input ng-model="vars.demo[key]" {{val}}</td>
			
		</tr>
		<tr ng-repeat="(key,val)  in  vars.dropdown">
			<td> {{key}} </td>
			<td><select ng-model="vars.dropdown[key]" ng-options="opt for opt in  vars[key] " ><option value="opt">bee</option></select></td>
			
		</tr>
		
		<tr ng-repeat="(key,val)  in  vars.history">
			<td> {{key}} </td>
			<td> <input type="checkbox" ng-model="vars.history[key]"></input></td>
			
		</tr>
		
	</table>
	<div class="results" >
	Patient is {{vars.demo['Age']}}-year-old {{vars.demo.Employment}} {{vars.dropdown.Marital}} {{vars.dropdown.Race}} {{vars.dropdown.Gender}} with a history of {{vars.demo.Dx}} 
	with  
	<span ng-if="!vars.history['Hospitalization']" > no </span> known prior psychiatric hospitalization,
	<span ng-if="!vars.history['RiskBxSI']" > no </span>known history of suicidality, 
	<span ng-if="!vars.history['RiskBxVBx']" > no </span> known history of violence, 
	<span ng-if="!vars.history['SubUse']" > no </span> known history of substance abuse.

	</div>
	</div>
	
	<div class="box">
	<table class="control" >
		<tr>
			<td> Presenting Sx </td>
			<td><input ng-model="vars.HPI.presentingsx"></input> </td>
		</tr>
		<tr>
			<td>BIB</td>
			<td><input ng-model="vars.HPI.bib"></input> </td>
		</tr>
		<tr>
			<td>Event</td>
			<td><input ng-model="vars.HPI.event"></input> </td>
		</tr>
		<tr>
			<td>Hx of Sx</td>
			<td><input ng-model="vars.HPI.symptomhx"></input> </td>
		</tr>
		
		
	</table>
	<div class="results">
	Patient presents to the Observation Unit with {{vars.HPI.presentingsx}}, after being brought in by {{vars.HPI.bib}}, following {{vars.HPI.event}}. 
Patient has a history of {{vars.HPI.symptomhx}}
	</div>
	</div>
	
	
	<!---<div  class="box" >
		<table class="control">
			<form>
			<tr>
				<td><input ng-model="vars.newROS.a" placeholder="id"></input></td>
				<td><input ng-model="vars.newROS.b" placeholder="define"></input></td>
				<td><input ng-model="vars.newROS.c" placeholder="group"></input></td>
				<td><button type="submit" ng-click="addnewros(vars.newROS)"> Add</button></td>
			</tr>
			</form>
		</table>
	</div> --->
	<div  class="box" ng-repeat="count in dumbArray">
		<table class="control">
			
			<tr ng-repeat=" roses in vars.ROS" ng-if="roses.groupnum == count">
				<td>{{roses.display}}</td>
				
				<!---<td>{{roses.description}}</td>--->
				<td>  <input ng-init="roses['clicked'] = false" type="checkbox" ng-model="roses['clicked']"></input></td>
				
			</tr>
			
		</table>
		<div class="results">
			
			Patient <span ng-repeat="roses in vars.ROS" ng-if="roses.groupnum == count" > <span ng-if="!roses.clicked"> does not report </span> <span ng-if="roses.clicked"> reports </span> {{roses.description}}, </span> 
	</div>
	</div>
	
	<div class="box" ng-repeat="(key,value)  in  vars.notes">
		<span class="control">{{key}}           <input ng-model="vars.notes[key]"></input></span> 
			<div class="results">
	{{key}} : {{value}}
	</div>
			</div>
			
		<div class="box">
			<table class="control">
			<tr ng-repeat="(key,val)  in  vars.history2">
			<td> {{key}} </td>
			<td> <input type="checkbox" ng-model="vars.history2[key]"></input></td>
			</table>
		</tr>
		
		<div class="results">
			<span ng-if="!vars.history2['MH']" > no </span> known family history of mental health issues,
	<span ng-if="!vars.history2['SUD']" > no </span> known family history of substance use issues, 
	<span ng-if="!vars.history2['Suicidality']" > no </span> known family history of sucidiality, 
	<span ng-if="!vars.history2['PertinentMedicalDx']" > no </span> known family history of MH pertinent medical diagnoses.
			
		</div>
			
		</div>
	<div class="box">
		<div class="control">
			<div>Tobacco use<select ng-model="vars.smoker" ng-options="opt for opt in  vars.Smoke " ><option value="opt"></option></select></div>
			<table class="control">
			
			<tr ng-repeat=" roses in vars.ROS" ng-if="roses.groupnum == 5">
				<td>{{roses.display}}</td>
				
				<!---<td>{{roses.description}}</td>--->
				<td>  <input ng-init="roses['clicked'] = false" type="checkbox" ng-model="roses['clicked']"></input></td>
				
			</tr>
			
		</table>
		</div>
		<div class="results">
			Reviewed substance use history. Patient is {{vars.smoker}} , 
			
			<span ng-repeat=" roses in vars.ROS" ng-if="roses.groupnum == 5">
				<span ng-if="!roses.clicked"> does not report </span> <span ng-if="roses.clicked"> reports </span> {{roses.description}},
				
			
			
			
		</div>
		
		
	</div>
	<div class="control">
		<input type="checkbox" ng-model="vars.isdrug"> Drug Options
	</div>
	<div class="box" ng-if="!vars.isdrug">
			<table class="control"> 
				<tr ng-repeat = "(key,value) in vars.drugs">
					<td>{{key}}</td>
					<td> <input ng-model="vars.drugs[key]"></td>
				</tr>
				
			</table>
			<div class="results">
				Reports history of substance misuse. 
				<span ng-repeat="drugs in vars.drugs"> {{drugs}}</span>
			</div>
			
		</div>
		<div class="box">
			<div class="control">
				Level Of Concern : <input ng-model="vars['Level Of Concern']"></input>
				
			
			<table >
			
			<tr ng-repeat=" roses in vars.ROS" ng-if="roses.groupnum == 6">
				<td>{{roses.display}}</td>
				
				<!---<td>{{roses.description}}</td>--->
				<td>  <input ng-init="roses['clicked'] = false" type="checkbox" ng-model="roses['clicked']"></input></td>
				
			</tr>
			<tr ng-repeat=" roses in vars.ROS" ng-if="roses.groupnum == 7">
				<td>{{roses.display}}</td>
				
				<!---<td>{{roses.description}}</td>--->
				<td>  <input ng-init="roses['clicked'] = false" type="checkbox" ng-model="roses['clicked']"></input></td>
				
			</tr>
			
		</table>
		</div>
		<div class="results"> 
			
			Reports level of concern is {{vars['Level Of Concern']}}.  		
			
			<span ng-repeat=" roses in vars.ROS" ng-if="roses.groupnum == 6">
			Patient	<span ng-if="!roses.clicked"> does not acknowledge </span> <span ng-if="roses.clicked"> acknowledges </span> {{roses.description}}.
			<span ng-repeat=" roses in vars.ROS" ng-if="roses.groupnum == 7">
			Patient	<span ng-if="!roses.clicked"> does not report </span> <span ng-if="roses.clicked"> reports </span> {{roses.description}}.
			
		</div>
		</div>
	<div class="box" ng-repeat="(key,value) in vars.end">
		
			<div class = "control" >
		{{key}}  <input  ng-model="vars.end[key]"></input> </div> 
		
		<div class="results" ng-if="!ctrlcnt">
			
		<span > {{key}} {{value}} </div>
		
		
	</div>
	</body>
	
	<table id="copey" style=" display: none">
		<tr><td>Patient is {{vars.demo['Age']}}-year-old {{vars.demo.Employment}} {{vars.dropdown.Marital}} {{vars.dropdown.Race}} {{vars.dropdown.Gender}} with a history of {{vars.demo.Dx}} 
	with  
	<span ng-if="!vars.history['Hospitalization']" > no </span> known prior psychiatric hospitalization,
	<span ng-if="!vars.history['RiskBxSI']" > no </span>known history of suicidality, 
	<span ng-if="!vars.history['RiskBxVBx']" > no </span> known history of violence, 
	<span ng-if="!vars.history['SubUse']" > no </span> known history of substance abuse.</td></tr>
	
	
		<tr><td>Patient presents to the Observation Unit with {{vars.HPI.presentingsx}}, after being brought in by {{vars.HPI.bib}}, following {{vars.HPI.event}}. 
Patient has a history of {{vars.HPI.symptomhx}}</td></tr>


		<tr ng-repeat="count in dumbArray" ><td>
			Patient <span ng-repeat="roses in vars.ROS" ng-if="roses.groupnum == count" > <span ng-if="!roses.clicked"> does not report </span> <span ng-if="roses.clicked"> reports </span> {{roses.description}}, </span> </td></tr>
			
		<tr ng-repeat="(key,value)  in  vars.notes"><td > 
	{{key}} : {{value}}
	    </td></tr>
	    
		<tr><td><span ng-if="!vars.history2['MH']" > no </span> known family history of mental health issues,
	<span ng-if="!vars.history2['SUD']" > no </span> known family history of substance use issues, 
	<span ng-if="!vars.history2['Suicidality']" > no </span> known family history of sucidiality, 
	<span ng-if="!vars.history2['PertinentMedicalDx']" > no </span> known family history of MH pertinent medical diagnoses.</td></tr>
	
		<tr><td>Reviewed substance use history. Patient is {{vars.smoker}} , 
			
			<span ng-repeat=" roses in vars.ROS" ng-if="roses.groupnum == 5">
				<span ng-if="!roses.clicked"> does not report </span> <span ng-if="roses.clicked"> reports </span> {{roses.description}},</td></tr>
				
		<tr ng-if="!vars.isdrug" ><td>Reports history of substance misuse. 
				<span ng-repeat="drugs in vars.drugs"> {{drugs}}</span></td></tr>
		<tr><td>Reports level of concern is {{vars['Level Of Concern']}}.  		
			
			<span ng-repeat=" roses in vars.ROS" ng-if="roses.groupnum == 6">
			Patient	<span ng-if="!roses.clicked"> does not acknowledge </span> <span ng-if="roses.clicked"> acknowledges </span> {{roses.description}}.
			<span ng-repeat=" roses in vars.ROS" ng-if="roses.groupnum == 7">
			Patient	<span ng-if="!roses.clicked"> does not report </span> <span ng-if="roses.clicked"> reports </span> {{roses.description}}.</td></tr>
			
			
		<tr ng-repeat="(key,value) in vars.end"><td><span > {{key}} {{value}} </div></td></tr>
		
		
	</table> 
	
	
</html>