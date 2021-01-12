const bar = () => console.log("bar");
const baz = () => console.log("baz");

const foo = () => {
    console.log("foo");
    setTimeout(() => {
        bar();
    }, 2000);
    baz();

}
foo();