# AtomNamedEvent
version 1.0.0<br></br>
 CustomEvent + EventTarget
   
 ## Обзор
 - <a href="#Зачем">Зачем</a>
 - <a href="#Установка">Установка</a>
 - <a href="#USAGE">USAGE</a>

 - <a href="#svm">Свойства и методы</a>


 ## Зачем<span id="Зачем"></span>
 Цель проста - унифицировать в одном классе всё потребное для работы с событиями, сохранив возможность классической работы с событиями класса **Event** через интерфейс **EventTarget**. Предостовляя также возможность прототипного наследования.<br>
 Пакет представляет единую, крсплатформенную реализацию работы с событиями.


 ## Установка<span id="Установка"></span>
 Для установки пакета в качестве зависимомти другого пакета.

    npm install atomnamedevent@1.0.0

Что бы скачать git репозиторий пакета - вам так же понадобится   **git**. Выполните в терминалн следующий код 

    git clone https://github.com/dimkl-dev/AtomNamedEvent.git && cd ./AtomNamedEvent && git branch v1.0.0 && npm install    

## USAGE<span id="USAGE"></span>

<pre>
   var { AtomNamedEvent } = require('atomnamedevent');
   var ane = new AtomNamedEvent("hari");
   ane.addListener(ev => console.log(ev === ane.ev));
   ane.dispatchEvent(); 
</pre>   


## Свойства и методы<span id="svm"></span>
 - **constructor**(name) - name имя события объекта CustomEvent
 - **name** - имя события
 - **ev** - возвращает и устанавливает объект события

### AtomNamedEvent.prototype
- **target** - Объект EventTarget
- **addListener**(func) - подписывает функцию func на срабатывание события
- **dispatchEvent** - генерирует событие
- **on** - псевдоним для addListener
- **emit** - псевдоним для dispatchEvent

