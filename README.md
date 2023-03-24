# AtomNamedEvent
 CustomEvent + EventTarget
   
   
 ## Свойства и методы
    *constructor(name) - name имя события объекта CustomEvent
    *name - имя события
    *ev - возвращает и устанавливает объект события

 ## AtomNamedEvent.prototype
    *target - Объект EventTarget
    *addListener(func) - подписывает функцию func на срабатывание события
    *dispatchEvent - генерирует событие
    *on - псевдоним для addListener
    *emit - псевдоним для dispatchEvent

  # USAGE:
<pre><code>
   var { AtomNamedEvent } = require('atomnamedevent');
   var ane = new AtomNamedEvent("hari");
   ane.addListener(ev => console.log(ev === ane.ev));
   ane.dispatchEvent(); 
</code></pre>   