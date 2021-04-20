const PORT = 34345;
const ADDR = '10.11.6.7';

let ws = new WebSocket(`ws://${ADDR}:${PORT}`);
  
ws.onmessage = function(event) {
    handler(JSON.parse(event.data));
};
  
ws.onclose = function(event) {
    if (event.wasClean) 
      console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    else 
      console.log('[close] Соединение прервано');
};
  
ws.onerror = function(error) {
    console.log(`[error] ${error.message}`);
};

