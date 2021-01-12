//  a callback is function that is passed to another function as an argument to be executed later this is done to make the code aysnchronous

function getMessage(msg, callback) {
    setTimeout(() => {
        console.log(msg);
        callback();
    }, 1000);
}
function displayMsg() {
    console.log("display later");
}
getMessage("display earlier", () => console.log("this is callback function"));