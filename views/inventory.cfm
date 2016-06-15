<html>
<script type="text/javascript" >
	var tableOffset = $("#table-1").offset().top;
var $header = $("#table-1 > thead").clone();
var $fixedHeader = $("#header-fixed").append($header);

$(window).bind("scroll", function() {
    var offset = $(this).scrollTop();

    if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
        $fixedHeader.show();
    }
    else if (offset < tableOffset) {
        $fixedHeader.hide();
    }
});
	
</script>
<div>
  Search <input ng-model="typer">
  </input>
  <button ng-click="setTyper('clvzap')">Apple</button>
  <button ng-click="setTyper('clvzsa')">Samsung</button>
  <button ng-click="setTyper('clvzvz')">Verizon</button>
  <button ng-click="setTyper('clvzmo')">Motorola</button>
  <button ng-click="setTyper('clvzht')">HTC</button>
  <button ng-click="setTyper('clvzlg')">LG</button>
  <button ng-click="setTyper('clvzky')">Kyocera</button>
  <button ng-click="setTyper('clvznv')">Novatel</button>
  
    <div><table style="float:top;width:40%"></table>
    	
    
    	<tr>
    		
  			<div>{{focus.storeid}}</div>
  		</button>
    	
    	<td ng-repeat="x in storeArray" ng-if="x.district == 'District Sanat'"><b>{{x.storeid}}</b></td>
    	
    	</tr>
    	</table>
    </div>
<table table id="table-1" >
		 
    	
    	
  	<tr >
  	<td><b>SKU </b></td>
  	<td><b>ITEM </b></td>
    <td ng-repeat="x in storeArray" ng-if="x.district == 'District Sanat'"><b>{{x.storeid}}</b></td>	
    </tr>
   

  	
  	<tr  ng-repeat="x in productList | filter:typer| orderBy:'toString()'" ng-if="x['hidden']!=true" >
  	<td>{{ x.RQSKU}}</td>
    <td><div ng-click="setIMEI($index)">{{x.name}}</div> </td>
    <td ng-repeat="f in storeArray" ng-if="f.district == 'District Sanat'"><b>{{x[f.storeid].inventory}}</b></td>
    </tr>
   
</table>
</div>


<style>
table, th , td  {
  border: 1px solid grey;
  border-collapse: collapse;
  padding: 5px;
}
table tr:nth-child(odd)	{
  background-color: #f1f1f1;
}
table tr:nth-child(even) {
  background-color: #ffffff;
}
</style>
</html>
