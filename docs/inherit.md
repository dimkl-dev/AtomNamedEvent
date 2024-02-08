<pre>
  var { AtomNamedEvent } = require('atomnamedevent');
  
  AtomNamedEventExt.prototype = AtomNamedEvent.prototype;
  AtomNamedEventExt.prototype.constructor = AtomNamedEventExt;

  function AtomNamedEventExt(...args){
    var mix = AtomNamedEvent.apply(this, args);
    Object.assign(this, mix);
  }

  var obj = new AtomNamedEventExt("gg");
  var obj1 = new AtomNamedEventExt("gg", (new EventTarget()));


  obj.addListener((ev)=>{console.log('event obj')});
  obj1.addListener(()=>{console.log("event obj1")});

  obj.dispatchEvent();
  obj1.dispatchEvent();
</pre>