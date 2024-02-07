var obj={func(){
console.log('from obj')}};
obj.func();
handl={set(...arr){console.dir(arr)}};
var prox = new Proxy(obj, handl);
var f = prox.func;
Object.defineProperty(globalThis, 'dd',{set(pval){prox.func=pval}});
dd = 5;

function hh(){
    ff();
    var err=new Error("vvv");
    try{throw err}catch(e){
        console.log(e.stack);
        debugger};
}
function ff(){
    var err=new Error("vvv");
try{throw err}catch(e){
    console.log(e.stack);
    debugger};
}
hh()