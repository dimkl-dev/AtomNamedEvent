// Add your code here
AtomNamedEvent.prototype.target = new EventTarget();
AtomNamedEvent.prototype.func = {};
AtomNamedEvent.prototype.func.addListener = function(func){
    var mthis = "_this" in this ? this : this.mthis;
    var _this = "mthis" in this ? this : this._this;
    //debugger;
    _this.target.addEventListener(mthis.type, func)
    /* this._this.target.addEventListener(this.type, func) */
    };
AtomNamedEvent.prototype.func.dispatchEvent = function(){
    var mthis = "_this" in this ? this : this.mthis;
    var _this = "mthis" in this ? this : this._this;
    _this.target.dispatchEvent(mthis)
    /* this._this.target.dispatchEvent(this) */
};

AtomNamedEvent.prototype.func.on = AtomNamedEvent.prototype.func.addListener;
AtomNamedEvent.prototype.func.emit = AtomNamedEvent.prototype.func.dispatchEvent;


AtomNamedEvent.prototype.init = function(pname, target){
  //var mthis = new CustomEvent(pname);
if (
(this.target !== target)&&(target instanceof EventTarget)
){this.target = target};

    var _this = this;
    _this.name = pname;
  var mthis = (pname instanceof Event) ? pname : new CustomEvent(pname);

  mthis._this = this;
  this.mthis = mthis;
  var _this = this;
  ;
  /*mthis.addListener = this.addListener;
  mthis.dispatchEvent = this.dispatchEvent;*/
  Object.assign(mthis, _this.func);
  
  return mthis;
  
};

//AtomNamedEvent.prototype.say = function(){console.log(this.name)}





function AtomNamedEvent(pname, target=AtomNamedEvent.prototype.target){
 //   this.init(pname);
 
  var mthis = this.init(pname, target);
  //console.dir(arguments);
  return mthis;
}

module.exports.AtomNamedEvent = AtomNamedEvent;

//export to window
try {Object.assign(window, module.exports)}catch(e){ 
console.groupCollapsed('%cW', 'color: red');
console.error(e);
console.groupEnd();}
//end export to window



//AtomNamedEvent.prototype.constructor = AtomNamedEvent.prototype.init;

//var obj = new AtomNamedEvent("gg");
//var obj1 = new AtomNamedEvent("gg", (new EventTarget()));
//
//
//obj.addListener((ev)=>{console.log(ev._this.name)});
//
//obj1.addListener(()=>{console.log("hari")});
///*obj._this.target.addEventListener(obj.type, (ev)=>{console.log(ev._this.name)});*/
//obj.dispatchEvent();
//obj1.dispatchEvent();
////console.log(obj instanceof Event)

