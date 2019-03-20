
function OptionsEdit ( action,type){
	var openthing = document.getElementById("OptionsOpen");
	var closething = document.getElementById("OptionsClose");
	var openthing1 = document.getElementById("MainOpen");
	var fullthing1 = document.getElementById("MainFull");
	var openthing2 = document.getElementById("CartOpen");
	var fullthing2 = document.getElementById("CartFull");
	var rightoptionsthing = document.getElementsByClassName("Options");
	rightoptionsthing = rightoptionsthing[0];
	var mainviewthing = document.getElementsByClassName("MainListing");
	mainviewthing = mainviewthing[0];
	var cartthing = document.getElementsByClassName("CartListing");
	cartthing = cartthing[0];
	if(action=='Open' && type=='Options'){
		
		openthing.style.visibility = "hidden";
		closething.style.visibility = "visible"; 
		
		rightoptionsthing.style.height = "20%"
		mainviewthing.style.height = "70%";
	}
	
	if(action=='Close'&& type =='Options'){
		
		openthing.style.visibility = "visible";
		closething.style.visibility = "hidden"; 
		console.log(rightoptionsthing);
		rightoptionsthing.style.height = "5%"
		mainviewthing.style.height = "20%";
		
		
		
		console.log(mainviewthing);
		
	}
	if(action=='Open'&& type =='Main'){
		
		fullthing1.style.visibility = "visible";
		openthing1.style.visibility = "hidden"; 
		openthing2.style.visibility = "hidden";
		fullthing2.style.visibility = "visible";
		
		
		cartthing.style.height = "0%"
		mainviewthing.style.height = "20%";
		
		
	
		
	}
	if(action=='FullOpen'&& type =='Main'){
		
		fullthing1.style.visibility = "hidden";
		openthing1.style.visibility = "hidden"; 
		openthing2.style.visibility = "visible";
		fullthing2.style.visibility = "hidden"; 
		
		
		mainviewthing.style.height = "20%";
		cartthing.style.height = "5%";
		
		
		
		
	}
		if(action=='FullOpen'&& type =='Cart'){
		
		fullthing1.style.visibility = "hidden";
		openthing1.style.visibility = "visible"; 
		openthing2.style.visibility = "hidden";
		fullthing2.style.visibility = "hidden";
		
		mainviewthing.style.height = "5%"
		cartthing.style.height = "70%";
		
		
		
	}
		if(action=='Open'&& type =='Cart'){
		
			fullthing1.style.visibility = "visible";
		openthing1.style.visibility = "hidden"; 
		openthing2.style.visibility = "hidden";
		fullthing2.style.visibility = "visible";
		
		
		cartthing.style.height = "0%"
		mainviewthing.style.height = "20%";
		
		
		
		
		
	}
	
	
	
}