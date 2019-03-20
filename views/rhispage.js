

// Here we get the module we created in file one
angular.module('ngViewExample')

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('RhiCtrl', RhiCtrl);

// Inject my dependencies
RhiCtrl.$inject = ['$routeParams','$scope','userlist' ];

// Now create our controller function with all necessary logic

function RhiCtrl($routeParams, $scope, userlist  ) {
	
	var ctrlcount = 0;
	$scope.dumbArray = [1,2,3,4];
	$scope.hidecontrol = function(){
		ctrlcount=1-ctrlcount;
		var ctrls = document.getElementsByClassName('control');
		for(var those in ctrls){
			
			console.log(ctrls[those].style);
			if(typeof ctrls[those].style !== 'undefined'){
				
		if(ctrlcount){
		ctrls[those].dog = ctrls[those].style.display;
		ctrls[those].style.display = "none";
		
		}
		else{
			
			ctrls[those].style.display = ctrls[those].dog;
			
		}
		}
		}
	}
	function selectElementContents(el) {
        var body = document.body, range, sel;
        if (document.createRange && window.getSelection) {
            range = document.createRange();
            sel = window.getSelection();
            sel.removeAllRanges();
            try {
                range.selectNodeContents(el);
                sel.addRange(range);
            } catch (e) {
                range.selectNode(el);
                sel.addRange(range);
            }
            document.execCommand("copy");

        } else if (body.createTextRange) {
            range = body.createTextRange();
            range.moveToElementText(el);
            range.select();
            range.execCommand("Copy");
        }
    }
	$scope.copyStuff = function(){
		
		//$window.clipboardData.setData ("Text", "DogTown");
		//selectElementContents(document.getElementsByClassName("results"));
		
		var stuffThing = document.getElementById("copey");
		stuffThing.style.display = "inline-block";
		selectElementContents(document.getElementById("copey"));
		stuffThing.style.display = "none";
		
		//console.log(stuffThing);
		//stuffThing[0].select(); 
		//document.execCommand("Copy");
	}
	
	$scope.loadpage = function(){
		$scope.vars = {};
		$scope.vars.messages = {};
		$scope.vars.isdrugs = true;
		//$scope.vars.messages = {};
		$scope.vars.demo = {};
		$scope.vars.demo.Age = 'X';
		$scope.vars.demo.Employment = 'EMPLOY';
		$scope.vars.demo.Dx = 'DX';
		$scope.vars.ROS={};
		$scope.vars.dropdown = {};
		$scope.vars.dropdown.Marital = 'MARITAL';
		$scope.vars.dropdown.Race = 'RACE';
		$scope.vars.dropdown.Gender = 'GENDER';
		$scope.vars.smoker = 'non-smoker';
		$scope.vars.Marital =['MARITAL','single','married','separated','divorced','widowed','cohabiting','engaged',];
		$scope.vars.Race =['RACE','White','Black','Indian-Alaskan Native','Asian','Southeast Asian','Pacific Islander','Multi-racial'];
		$scope.vars.Gender =['GENDER','male','female','transgender','male','transgender female','agender','gender not disclosed'];
		$scope.vars.Smoke =['non-smoker','former smoker,daily smoker','infrequent nicotine user'];
		$scope.vars.marital =['MARITAL','single','married','separated','divorced','widowed','cohabiting','engaged',];
		$scope.vars.history = {};
		$scope.vars.history.Hospitalization =  false;
		$scope.vars.history['RiskBxSI'] =  false;
		$scope.vars.history['RiskBxVBx'] =  false;
		$scope.vars.history['SubUse'] =  false;
		$scope.vars.messages['demo'] = {};
		$scope.vars.HPI = {};
		$scope.vars.HPI.presentingsx = "PRESENTING SX";
		$scope.vars.HPI.bib = "ambulance";
		$scope.vars.HPI.event = "EVENT";
		$scope.vars.HPI.symptomhx = "SYMPTOM HX";
		$scope.vars.ROS=rhi.getROS();
		
		$scope.vars.notes={};
		$scope.vars.notes['Trauma history'] ='Unremarkable';
		$scope.vars.notes.currentmeds ='None currently';
		$scope.vars.notes.medtrials ='None reported';
		$scope.vars.history2 ={};
		$scope.vars.history2.MH =  false;
		$scope.vars.history2['SUD'] =  false;
		$scope.vars.history2['Suicidality'] =  false;
		$scope.vars.history2['PertinentMedicalDx'] =  false;
		
		
		$scope.vars.drugs = {};
		$scope.vars.drugs.ETOH = "";
		$scope.vars.drugs.THC = "";
		$scope.vars.drugs.Opiates = "";
		$scope.vars.drugs.Cocaine = "";
		$scope.vars.drugs['MDMA-variant'] = "";
		$scope.vars.drugs.Psychadelics = "";
		$scope.vars.drugs['OTC Medication'] = "";
		$scope.vars.drugs['Prescription Meds'] = "";
		$scope.vars.drugs.Other = "";
		
		
		$scope.vars['Level Of Concern'] = 'low';
		$scope.vars.end={};
		$scope.vars.end['RISK ASSESS'] = "";
		$scope.vars.end['Current SI'] = "";
		$scope.vars.end['Hx of SI'] = "";
		$scope.vars.end['Current HI'] = "";
		$scope.vars.end['Hx of HI'] = "";
		$scope.vars.end['Duty to Warn'] = "";
		$scope.vars.end['Protective'] = "";
		






		
		
		
		
		}
		
		
		$scope.loadROS = function(){
			$scope.vars.ROS= rhi.getROS();
			$scope.loadpage();
			
			
		}
		$scope.addnewros = function(x){
			rhi.addROS(x);
		}
		$scope.loadpage();
}