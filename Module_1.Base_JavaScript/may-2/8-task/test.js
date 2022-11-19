
let signal = true;
setInterval(function() {
    function postRouterSignal() {
        if (signal === true) {
            console.log('Сигнал отправлен');
        } else {
            console.log('Сигнал отсутствует');
        }
    };
}, 2000);

// function getSignalRouter() {
//     postRouterSignal() 
// }