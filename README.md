# AtomNamedEvent
version 1.1.2<br></br>
 Event + EventTarget<br>

 ## Обзор
 - <a href="#Зачем">Зачем</a>
 - <a href="#Установка">Установка</a>
 - <a href="#USAGE">USAGE</a>
 - <a href="#diffver">Отличие от предыдущей версии</a>
 - <a href="#pr">Принцип работы</a>
 - <a href="#svm">Свойства и методы</a>
 - <a href="#Наследовани">Наследовани</a>
 - <a href="#jsdoc">Документация JSDoc</a>

 ## Зачем<span id="Зачем"></span>
 Цель проста - унифицировать в одном классе всё потребное для работы с событиями, сохранив возможность классической работы с событиями класса **Event** через интерфейс **EventTarget**. Предостовляя также возможность прототипного наследования.<br>
 Пакет представляет единую, крсплатформенную реализацию работы с событиями.
 Создаёт новые и оборачивает сущиствующие события всеми методами необходимыми для работы с ними. Каждый метод сам знает с каким объектом **Event** связан. Приэтом каждый метод статичен, т.е один и тотже для всех экземпляров.

 ## Установка<span id="Установка"></span>
 Для установки пакета в качестве зависимомти другого пакета.

    npm install atomnamedevent

Что бы скачать git репозиторий пакета - вам так же понадобится   **git**. Выполните в терминалн следующий код 

    git clone https://github.com/dimkl-dev/AtomNamedEvent.git && cd ./AtomNamedEvent && npm install 

## USAGE<span id="USAGE"></span>
<pre>
   var { AtomNamedEvent } = require('atomnamedevent');
   var ane = new AtomNamedEvent("hari");
   ane.addListener(ev => console.log(ane === ev));
   ane.dispatchEvent(); 
 </pre>       

## Отличие от предыдущей версии<span id="diffver"></span>
 <p> Главное отличие от версии 1.1 от версии 1.0 в том - что конструктор возврощает полноценный объект события, и он же будет передан в параметром в обработчик события. 
 <P>Версия 1.0 возврощала объект где объект события представлял из себя отдельное свойство.
    
 ## Принцип работы<span id="pr"></span>
 Класс основан на двух базовых интерфейсах<br>
 **Event** и **EventTarget**<br>
 Хоть в документации они называются интерфесами - с ними можно работать как с обычными классами... у каждого есть свой конструктор.<br>
 Конструктор класс **AtomNamedEvent** возврощает с дополнительными примесями экземпляры класса **Event** или объекты унаследованных от него(завист от параметров конструктора) . При помощи механизма внешнего интерфейса(смотри разел [Внутренние свойства экземпляра](#vse) и коментарии [JSDoc](#jsdoc)) реализована работа всех методов работы с событиями. Каждый метод статичен(т.е все методы реализованы в единичном экземпляре) но при этом сохроняют контекст вызова(достаточно вызвать метод - и он сам знает с каким экземпляром класса **AtomNamedEvent** он работает. Это не нужно указывать отдельным способом). Так как конструктор возвращает полноценные объекты - то сохроняется возможность классичечской работы с событиями основаными на интерфесе **Event**. Так же в **AtomNamedEvent** можно обернуть существующие события **Event**

 ## Свойства и методы<span id="svm"></span>
 
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
- **func** - объект для внутренниего использования класс. Вне пределах класса смысла не имеет. В этом объекте определены все методы из него подмешиваются к каждому экземпляру. В ведён ради удобства.

</div>

### Внутренние свойства экземпляра<span id="vse"></span>

Cтрого необходимы для работы. Не трогать их. Без них ничего работать не будет.

- **_this** - контекст экземпляра класс **AtomNamedEvent**
- **_this.mthis** - ссылка на объект **Event** возвращённая конструктором класса **AtomNamedEvent**, т.е ссылка объекта **Event** на самого себя. Проверить это можно выполнив следующий код

<pre>
   var { AtomNamedEvent } = require('atomnamedevent');
   var ane = new AtomNamedEvent("hari");
   console.log(ane === ane._this.mthis)// true
</pre>

Именно эти переменые позволяют реализовать концепции внешнего интерфейса и защищённых полей класса



 ## Наследовани<span id="Наследовани"></span> 
 Пример реализации наследования от класса **AtomNamedEvent** 

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

## Документация JSDoc<span id='jsdoc'></span>

Для  просмотра документации **JSDoc** можно использовать пакет [JSDocLive](https://www.npmjs.com/package/jsdoclive)

Если вы установили пакет как зависимость, то в каталоге пакета наберите команду 

    cd ./node_modules/atomnamedevent/ && jsdoclive ./

Если вы скачали git-репозиторий пакета, то в катологе пакета наберите 

    jsdoclive ./ 





