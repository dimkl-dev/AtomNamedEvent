# AtomNamedEvent
version 1.1.0<br></br>
 CustomEvent + EventTarget<br>

 <p> Главное отличие от версии 1.1 от версии 1.0 в том - что конструктор возврощает полноценный объект события, и он же будет передан в параметром в обработчик события. 
 <P>Версия 1.0 возврощала объект где объект события представлял из себя отдельное свойство.
    
   
 ## Свойства и методы
 
   *constructor(name[String|Event], [target=EventTarget]) 
 <pre>
      *name имя события объекта для <i>CustomEvent</i> или экземпляр объекта базирующийся на объекте <i>Event</i>
      *target - опциональный парамет позволяющий задать для объекта события экземпляр объекта <i>EventTarget</i> 
   </pre>
   возвращает и устанавливает объект события

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
   ane.addListener(ev => console.log(ane === ev));
   ane.dispatchEvent(); 
</code></pre>   