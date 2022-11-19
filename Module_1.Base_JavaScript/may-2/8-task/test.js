
// let signal = true;
// setInterval(function() {
//     function postRouterSignal() {
//         if (signal === true) {
//             console.log('Сигнал отправлен');
//         } else {
//             console.log('Сигнал отсутствует');
//         }
//     };
//     postRouterSignal(); 
// }, 2000);


let signal = false;

function postSignalRouter() {
    if (signal === true) {
        console.log('Сигнал отправлен');
    } else {
        console.log('Сигнал отсутствует');
    }
};

function getSignalRouter() {
    postSignalRouter()
};


setInterval(function() {
    getSignalRouter();
}, 2000);






// setInterval(function() {
// 	console.log('text');
// }, 1000);