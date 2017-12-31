<html>
<script>
       //messagehandler recieves all the messages from websocket
       function mycbHandler( messageobj)
       {
              var message = ColdFusion.JSON.encode(messageobj);
           var txt=document.getElementById("myDiv");
           txt.innerHTML +=message  +"<br>";
       }
      
       //openhandler is invoked when socket connection is
       function openHandler()
       {
              var txt=document.getElementById("myDiv");
           txt.innerHTML +="open Handler invoked <br>";
       }
      
       function subscribeMe()
       {
              var channelname = document.getElementById("channelname").value;
              mywsobj.subscribe(channelname);
       }
       function getSubscribers()
       {
              var channelname = document.getElementById("channelname").value;
              mywsobj.getSubscriberCount(channelname);
       }
       function unsubscribe_Me()
       {
           var channelname = document.getElementById("channelname").value;
           mywsobj.unsubscribe(channelname);
       }
       function publishClient()
       {
              var channelname = document.getElementById("channelname").value;
              var message =  document.getElementById("msg").value;
       mywsobj.publish(channelname,message);
       }
       function get_Subscriptions()
       {
           mywsobj.getSubscriptions();
       }
       function invokenpublish()
       {
              cfcname = document.getElementById("cfcname").value;
              fnname = document.getElementById("fnname").value;
              channelname = document.getElementById("channelname").value;
              mywsobj.invokeAndPublish(channelname, cfcname, fnname);      
       }
       function invokefn()
       {
              cfcname = document.getElementById("cfcname").value;
              fnname = document.getElementById("fnname").value;
              channelname = document.getElementById("channelname").value;
              mywsobj.invoke(cfcname, fnname); 
       }
       function opensocket()
       {
              var txt=document.getElementById("myDiv");
              txt.innerHTML+="opening socket"+"<br >";
              x=mywsobj.openConnection();
       }
       function stopsocket()
       {
              var txt=document.getElementById("myDiv");
              txt.innerHTML+="closing socket"+"<br >";
              x=mywsobj.closeConnection();
       }
       function checksocket()
       {
              var x=mywsobj.isConnectionOpen();
              var txt=document.getElementById("myDiv");
              txt.innerHTML+=x+"<br >";
       }
</script>
<body>
<form name="f">
<!---Define JS websocket object name and messagehandler and openhandler  --->
<cfwebsocket name="mywsobj" onMessage="mycbHandler" onOpen="openHandler"/>
<br> Subscribe to:
<input  id="channelname" name="channelname" type="text" value="stocks" >
<input  id="stocksSubscribe" type="button" value="stocksSubscribe" onclick="subscribeMe();">
<input  id="unsubscribeMe" type="button" value="unsubscribeMe" onclick="unsubscribe_Me();">
<input  id="getSubscribersCF" type="button" value="getSubscribersCF" onclick="getSubscribers();">
<input  id="getSubscriptions" type="button" value="getSubscriptions" onclick="get_Subscriptions();">
<br>
Message :<input id="msg" type="text" >
<input  id="publishMe" type="button" value="publishMe" onclick="publishClient();">
<br>
CFC Name: <input  id="cfcname" name="cfcname" type="text" value="invokeandpublish" >
Function Name: <input  id="fnname" name="fnname" type="text" value="publishall" >
<input  id="invoke_publish" type="button" value="invoke_publish" onclick="invokenpublish();">
<input  id="invoke" type="button" value="invoke" onclick="invokefn();">
<br>
<input  id="stop" name ="Close" type="button" value ="stop" onclick="stopsocket()" >
<input  id="open" name ="Open" type="button" value ="open" onclick="opensocket()" >
<input  id="check" name ="Check" type="button" value="check" onclick="checksocket()" >
<br>
<div id="myDiv"></div>
</form>
 
 
</body>
</html>