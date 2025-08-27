// 1. Carga el módulo HTTP
var http = require("http");

// 2. Crea el servidor HTTP
var server = http.createServer(function(request, response) {
  // 3. Define la cabecera de la respuesta (estado 200 OK y tipo de contenido)
  response.writeHead(200, { "Content-Type": "text/plain" });
  // 4. Envía el mensaje de respuesta
  response.end("¡Hola Mundo!\n");
});

// 5. Inicia el servidor para que escuche en el puerto 8000
server.listen(8000, function() {
  console.log("Servidor escuchando en http://127.0.0.1:8000/");
});
