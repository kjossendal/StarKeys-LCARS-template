var hostip=null;
var fileid=null;

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function CheckForParameters(){
  hostip=findGetParameter("hostip");
  if (hostip!=null)
  {
    document.forms["GetHostIP"].style.visibility = "hidden";
  }

  fileid=findGetParameter("fileid");
  if (fileid!=null)
  {
    document.forms["GetFileID"].style.visibility = "hidden";
  }
}

function Client2Server(macrostr) {
   if (hostip==null)
   {
     hostip = document.forms["GetHostIP"]["hostip"].value;
     if (hostip == "") {
         alert ("Host IP is required. Please provide the value shown when starting the StarKeys-vMFD Server on the gaming PC.");
     }
   }
   if (fileid==null)
   {
     fileid = document.forms["GetFileID"]["fileid"].value;
     if (fileid == "") {
         alert ("File ID is required. Please provide the value shown when starting the StarKeys-vMFD Server on the gaming PC.");
     }
   }
   if (hostip!=null && fileid !=null)
   {
       if ("WebSocket" in window) {
          //alert("WebSocket is supported by your Browser!");

          // Let us open a web socket
          var ws = new WebSocket("ws://" + hostip + "/echo");

          ws.onopen = function() {

             // Web Socket is connected, send data using send()
             ws.send("fileid:"+fileid+"_"+macrostr);
             //alert("Message is sent...");
          };

          ws.onmessage = function (evt) {
             var received_msg = evt.data;
             //alert("Message is received...");
          };

          ws.onclose = function() {

             // websocket is closed.
             //alert("Connection is closed...");
          };
       } else {

          // The browser doesn't support WebSocket
          alert("WebSocket NOT supported by your Browser!");
       }
   }
}
