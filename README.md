# AtomNamedEvent
version 1.1.0<br></br>
 CustomEvent + EventTarget<br>

 <p> Главное отличие от версии 1.1 от версии 1.0 в том - что конструктор возврощает полноценный объект события, и он же будет передан в параметром в обработчик события. 
 <P>Версия 1.0 возврощала объект где объект события представлял из себя отдельное свойство.
    
   
 ##<span id="svm"> Свойства и методы</span>
 
 ### constructor(name=(String|Event), [target=EventTarget]) 
 - **name** -  имя  для объекта события типа **CustomEvent** или экземпляр объекта базирующийся на объекте **Event**. 

 - **target** - опциональный парамет позволяющий задать отдельный  экземпляр объекта **EventTarget**. По умолчанию
 используется экземпляр находящийся в *AtomNamedEvent.prototype.target*. с помощю него происходит вызов событий  и назначаются обработчики событий
  
Возвращает и устанавливает объект события

 ### AtomNamedEvent.prototype
 <div style="line-height: 15pt">

- **target** - Объект EventTarget
- **addListener**(*listener*) - подписывает функцию listener на срабатывание события
- **removeListener**(*listener*) - удаляет listener из обработчиков события.
- **dispatchEvent**() - генерирует событие
- **on**() - псевдоним для addListener
- **emit**() - псевдоним для dispatchEvent
</div>

## USAGE:
<pre>
   var { AtomNamedEvent } = require('atomnamedevent');
   var ane = new AtomNamedEvent("hari");
   ane.addListener(ev => console.log(ane === ev));
   ane.dispatchEvent(); 
 </pre>   