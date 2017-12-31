<input ng-model="d.old" ></input>Old Password
<input ng-model="d.old2"></input>Confirm Old Password<br>
<span ng-if="d.old==thisGuy.password && d.old2==thisGuy.password">
<input ng-model="d.new"></input>New Password
<button ng-click="setpassword(thisGuy,d)">Update Password</button>	
</span>
