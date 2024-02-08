

AtomNamedEvent.prototype.target = new EventTarget();

AtomNamedEvent.prototype.addListener = function(func){
   
    if ((typeof func) == 'function') {
        this.target.addEventListener(this.name, func);
    } else {
        throw (new SyntaxError('ERROR: AtomNamedEvent.prototype.addListener - func is not function\n' + func));
    };
};
AtomNamedEvent.prototype.dispatchEvent = function(){
    this.target.dispatchEvent(this.ev);
}

AtomNamedEvent.prototype.on = AtomNamedEvent.prototype.addEventListener;
AtomNamedEvent.prototype.emit = AtomNamedEvent.prototype.dispatchEvent;




function AtomNamedEvent(pname){
    var _name = pname;
    var _ev = new CustomEvent(_name);
    var _this = this;
    _ev.this = this;
    var _origEvent = _ev;
    Object.defineProperty(this, 'name', {get(){return _ev.type}});
    //Object.assign(this, {get name(){return _ev.type}});  //--неработает как надо!!! Значение получается статичным. неизменным.
    Object.defineProperty(this, "ev", {get(){return _ev}, 
                                        set(pval){
                             //-------start set ev-------
                             if ('type' in pval) {
                                _ev = pval;
                                _ev.this = _this;
                            } else {
                                throw (new SyntaxError('set ev(pval): val is not Event \n' + pval))
                            };
                      //-------end set ev-------

                                        }});
   
   

}

module.exports.AtomNamedEvent = AtomNamedEvent;

//export to window
try {Object.assign(window, module.exports)}catch(e){ 
console.groupCollapsed('%cW', 'color: red');
console.error(e);
console.groupEnd();}
//end export to window



/*

var ane = new AtomNamedEvent('tt'); var origev = ane.ev;
ane.ev = (new CustomEvent('vv'));
//ane.addListener(console.dir);
ane.addListener(ev => console.log(ev.this.hari, ev.type));
ane.hari = 'haribol';
ane.dispatchEvent();
ane.ev = origev;
ane.addListener(ev => console.log(ev.this.hari, ev.type));
ane.dispatchEvent();

//console.dir(module);*/