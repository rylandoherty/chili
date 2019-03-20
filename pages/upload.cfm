<html >


<title>
	Green Chili
</title>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  	<button ng-click="changeMonth(-1)"><</button>
	{{monthString}}
	{{year}}
	<button ng-click="changeMonth(1)">></button>
	<button ng-click="refreshMTD()">REFRESH MTD</button><br>
	<button ng-click="salescontainer2018()"> ByDay </button><br>
	{{district}}

  <script>
  $( function() {
    $( "#datepickerstart" ).datepicker();
  } );
  $( function() {
	    $( "#datepickerend" ).datepicker();
	  } );

	  var datetoday = new Date();
	   var thisMonthFormatted = datetoday.getMonth()+1;
		  if(thisMonthFormatted.length=1){
			  thisMonthFormatted = "0"+thisMonthFormatted;
		  }
		  var thisDateFormatted = datetoday.getDate();
		  console.log(thisDateFormatted.toString().length);

		  if(thisDateFormatted.toString().length==1){
			  thisDateFormatted = "0"+thisDateFormatted;
		  }

		  $('#datepickerstart').val(datetoday.getFullYear()+thisMonthFormatted+""+thisDateFormatted);

   </script>
</head>
<body>
  <p id="counter"></p>
<p>Date <input type="text" id="datepickerstart" onchange=""></p>
<!---<p>End Date: <input type="text" id="datepickerend" onchange="checkDates()"></p>--->

</body>
</html>
<div ng-app="fileUpload" ng-controller="MyCtrl">
     Drop File:
    <div ngf-drop ngf-select ng-model="files" class="drop-box"
        ngf-drag-over-class="'dragover'" ngf-multiple="true" ngf-allow-dir="true"
        accept=".xls"
        ngf-pattern="'.xls'">Drop pdfs or images here or click to upload</div>
    <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>
    Files:
    <ul>
        <li ng-repeat="f in files" style="font:smaller">{{f.name}} {{f.$error}} {{f.$errorParam}}</li>
    </ul>
    Upload Log:
    <pre>{{log}}</pre>
</div>









	<style>
	.button {
    -moz-appearance: button;
    /* Firefox */
    -webkit-appearance: button;
    /* Safari and Chrome */
    padding: 10px;
    margin: 10px;
    width: 70px;
}
.drop-box {
    background: #F8F8F8;
    border: 5px dashed #DDD;
    width: 200px;
    height: 65px;
    text-align: center;
    padding-top: 25px;
    margin: 10px;
}
.dragover {
    border: 5px dashed blue;
}</style>


	</html>