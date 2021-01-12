function clown() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("emoji")
        }, 2000);
    })
}
async function msg() {
    const msg = await clown();
    console.log("message ", msg);
}

msg();