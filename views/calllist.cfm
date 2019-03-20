<html>
	
	
	<style>
		tr.spaceUnder>td {
 		padding-bottom: 3em;
		}
	</style>
	
	<div height="30%" width="100%">
		
		<select  ng-model="vars.store" > {{stores.storeid}}
		<option ng-repeat="stores in vars.storelist" ng-value="stores.storeid"> {{stores.storeid}}</option>
		</select>
		<div>
			completed
			<input type="checkbox" ng-model="vars.completed">
			</input>	
	</div>
	<table style=" padding-left:20%" width="80%" border="0" cellspacing="0" cellpadding="0">
	
		
		
												
		<tr>
			<th width="20%" >ID</th>
			<th width="10%" >MTN</th>
			<th width="10%" >Result</th>
			<th width="10%" >Comment</th>
			<th width="10%" >Finish</th>
			<th ng-if="vars.completed" width="10%" >CompletedBy</th>
			<th ng-if="vars.completed" width="10%" >CompletedOn</th>
			
		</tr>
		
		<tr class="spaceUnder" ng-repeat="calls in result=(calllist| filter:{'store':vars.store,'completed':vars.completed})"</tr>
		
		<td><br/>
		<div>{{calls.date}}</div><br/>
		<div>{{calls.product | limitTo : 35}}</div><br/>
		<div>{{calls.customer}}</div>
		<div>{{calls.type}} </div>
		<div>{{calls.invoice}}</div><br/>
		
		
		
		
		
		<td>{{calls.mtn}}</td>
		
		
		
		
		
		<td><select ng-model="calls.result" ng-change="updateCall(calls)" ng-selected="calls.result" > <option ng-repeat="status in vars.callresults" ng-value="status"> {{status}}</option></select>
			<div>{{calls.result}}</div>
		</td>
		
		<td><input ng-if="!calls.completed" <div style="height:100%"  ng-model="calls.comment" ng-blur="updateCall(calls)"></td>
		<td><div ng-if="calls.completed">{{calls.comment}} </div></td>
		<td><input type="checkbox" ng-if="calls.result" ng-model="calls.completed" ng-change="updateCall(calls)"></td>
		<td ng-if="calls.completed"> {{calls.completedby}}</td>
		<td ng-if="calls.completed"> {{calls.completedon}}</td>
		<td ng-if="calls.completed"><input type="checkbox" ng-model="calls.hide"  ng-change="updateCall(calls)" ng-checked="false">Hide</td>
			
		</tr>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		</table>