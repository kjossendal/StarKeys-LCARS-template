export const conn = (hostip, fileid, macrostr) => {
  // console.log("conn called", hostip, fileid, macrostr)
  if (hostip.trim() === "") {
    alert("Host IP is required. Please provide the value shown when starting the StarKeys-vMFD Server on the gaming PC.");
    return;
  }
  if (fileid.trim() === "") {
    alert("File ID is required. Please provide the value shown when starting the StarKeys-vMFD Server on the gaming PC.");
    return;
  }
  if (hostip != null && fileid != null) {
    if ("WebSocket" in window) {
      // alert("WebSocket is supported by your Browser!");

      // Let us open a web socket
      var ws = new WebSocket("ws://" + hostip + "/echo");

      ws.onopen = function () {
        console.log('onopen called')

        // Web Socket is connected, send data using send()
        ws.send("fileid:" + fileid + "_" + macrostr);
        // alert("Message is sent...");
      };

      ws.onmessage = function (evt) {
        // const received_msg = evt.data;
        // alert("Message is received...");
      };

      ws.onclose = function () {
        console.log("connection closed")
        // websocket is closed.
        //alert("Connection is closed...");
      };
      ws.onerror = function (error) {
        console.error(error)
      }
    } else {
      // The browser doesn't support WebSocket
      alert("WebSocket NOT supported by your Browser!");
    }
  }
}