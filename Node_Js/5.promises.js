// another way to create the code in js asynchrous is promises,
// promises is a way to execute the result aysnchrous function as soon as possible
let promise = new Promise(function (resovle, reject) {
    setTimeout(() => {
        resovle("run before")
    }, 3000);
})
promise.then(
    result => {
        console.log(result)
        GetAfter();
    },
    error => console.log(error)
)
function GetAfter() {
    console.log("print after");
}