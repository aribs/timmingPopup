var idleTime = 0;

//Insertar dentro del $(document).ready
//Incrementar intervalo inactividad cada minuto
var idleInterval = setInterval(timerIncrement, 60000); // 1 minuto
//Se vuelve a marcar 0 en cuento se pulse una tecla o se mueva el ratón
$(this).mousemove(function (e) {
    idleTime = 0;
});
$(this).keypress(function (e) {
    idleTime = 0;
});
//Función incremento, en caso de cumplir condición abre modal
function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 1) { // 1 minuto
        $(".bs-example-modal-sm").modal('show');
    }
}