// Add your code here

/**
 * @module atomnamedevent
 */
//----------------Start Event-----------------
/**
 * @class Event
 * @alias Event
 * @param {String} type - тип соботия. По сути имя события. В документации **mozilla** это параметр носит имя **typeArg**
 * @classdesc Базовый класс.  Экземпляры этого класса и есть сами объекты событий.
 * Переменные этого типа, с дополнительными примясями, возврощаяются конструктором класса [AtomNamedEvent]{@link module:atomnamedevent~AtomNamedEvent}.
 * Класс является встроенным в сам язык как **web** версии, так и его серверной реализации **nodeJS**.
 * Для больших подробностей по работе с этим интерфейсом смотрите
 * докоментацию  [mozilla]{@link https://developer.mozilla.org/ru/docs/Web/API/Event/Event}
 * или документацию [node js]{@link https://nodejs.org/docs/latest/api/events.html#class-event} если используете пакет на сервере.
 * Здесь приведён только самый необходимый минимум информации о классе, только та которая используется в коде.
 */
//----------------End  Event-----------------



//----------------Start EventTarget-----------------
/**
 * @class EventTarget
 * @alias EventTarget

 * @interface EventTarget
 * @classdesc Базовый класс. Функциональность класса [AtomNamedEvent]{@link module:atomnamedevent~AtomNamedEvent} по рабате с событиями основана на нём.
 * Описание класса приведено ради справки. Класс является встроенным в сам язык как **web** версии,
 * так и его серверной реализации **nodeJS**.
 * Для больших подробностей по работе с этим интерфейсом смотрите
 * докоментацию  [mozilla]{@link https://developer.mozilla.org/ru/docs/Web/API/EventTarget/EventTarget}
 * или документацию [node js]{@link https://nodejs.org/docs/latest/api/events.html#class-eventtarget} если используете пакет на сервере.
 * Является свойством конструктора определённои в прототипе.

 *  Достепен как ***{@link AtomNamedEvent.prototype.target}***<br>
 * При работе с самим классом на прямую используется следующий код<br>
 * <pre>
 *    eventTarget = new EventTarget();
 * </pre>
 */


/**
 * @function addEventListener
 * @param {String} type - в коде ниже используется как имя события
 * @param {Function} listener - обработчик события
 * @param {...any} [args] - остальные параметры. Подробности смотри в полной документации к функции.
 * @memberof module:atomnamedevent~EventTarget
 * @instance
 * @description добовляет обработчик события. Подробности смотри по ссылкам ниже.<br>
 * [web реализация]{@link https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener}  и
 * [серверная реализация]{@link https://nodejs.org/docs/latest/api/events.html#eventtargetaddeventlistenertype-listener-options}
 *
 */

/**
 * @function removeEventListener
 * @param {String} type - в коде ниже используется как имя события
 * @param {Function} listener - обработчик события
 * @param {...any} [args] - остальные параметры. Подробности смотри в полной документации к функции.
 * @memberof module:atomnamedevent~EventTarget
 * @instance
 * @description удаляет обработчик события. Подробности смотри по ссылкам ниже.<br>
 * [web реализация]{@link https://developer.mozilla.org/ru/docs/Web/API/EventTarget/removeEventListener}  и
 * [серверная реализация]{@link https://nodejs.org/docs/latest/api/events.html#eventtargetremoveeventlistenertype-listener-options}
 *
 */

/**
 * @function dispatchEvent
 * @param {module:atomnamedevent~Event} event - сам объект события
 * @memberof module:atomnamedevent~EventTarget
 * @instance
 * @description Генерирует события. Подробности смотри по ссылкам ниже.<br>
 * [web реализация]{@link https://developer.mozilla.org/ru/docs/Web/API/EventTarget/dispatchEvent}  и
 * [серверная реализация]{@link https://nodejs.org/docs/latest/api/events.html#eventtargetdispatcheventevent}
 *
 */

//----------------End EventTarget-----------------

/**

 * @type {module:atomnamedevent~EventTarget}
 * @description доступна как **AtomNamedEvent.prototype.target** */

AtomNamedEvent.prototype.target = new EventTarget();


//----------------Start eventFunc-----------------
/**
 * _@class eventFunc
 * _@hideconstructor
 * @mixin eventFunc
 *

 * @memberof module:atomnamedevent~AtomNamedEvent
 * @description  Cодержит методы которые используются всеми экземплярами.
 *  Нужен для удобства использования.

 */

/**
 * @type {module:atomnamedevent~AtomNamedEvent.eventFunc}
 * @memberof module:atomnamedevent~AtomNamedEvent
 * @alias func
 * @description Доступна как  ***{@link AtomNamedEvent.prototype.func}***
 * Добавлена для удобства. Содержит функции которые используется всеми экземплярами класса {@link AtomNamedEvent}
 */
AtomNamedEvent.prototype.func = {};

//-----Определение функций-----
/**
 * @function addListener
 * @param {Function} listener - **callback** функция которая будет вызвана в результате срабатывания событитя.
 * @param {...any} [args] - значение параметра смотри в описание функции [EventTarget#addEventListener]{@link module:atomnamedevent~EventTarget#addEventListener}
 * @memberof module:atomnamedevent~AtomNamedEvent.eventFunc
 * @description Региструет обработчик события для экземпляра объекта {@link module:atomnamedevent~AtomNamedEvent}.
 * Является абстракцией над функцией [EventTarget#addEventListener]{@link module:atomnamedevent~EventTarget#addEventListener} избавляя от потребности вводить
 * строковое имя события. Достаточно только передать в качеств параметра функцию - которая будет обработчиком события.
 *
 */
AtomNamedEvent.prototype.func.addListener = function(func, ...args){
    var mthis = "_this" in this ? this : this.mthis;//_this только интепрфейса
    var _this = "mthis" in this ? this : this._this;//mthis - внешний интерфейс
    //debugger;
    _this.target.addEventListener(_this.mthis.type, func, ...args)
    /* this._this.target.addEventListener(this.type, func) */
};

/**
 * @function removeListener
 * @param {Function} listener - **callback** функция которая будет удалена из обработчиков событитя.
 * @param {...any} [args] - значение параметра смотри в описание функции [EventTarget#removeEventListener]{@link module:atomnamedevent~EventTarget#removeEventListener}
 * @memberof module:atomnamedevent~AtomNamedEvent.eventFunc
 * @description Удаляет обработчик события для экземпляра объекта {@link module:atomnamedevent~AtomNamedEvent}.
 * Является абстракцией над функцией [EventTarget#removeEventListener]{@link module:atomnamedevent~EventTarget#removeEventListener} избавляя от потребности вводить
 * строковое имя события. Достаточно только передать в качеств параметра функцию - которая будет удалена из обработчиков события.
 *
 */
AtomNamedEvent.prototype.func.removeListener = function(func, ...args){
  var mthis = "_this" in this ? this : this.mthis;//_this только интепрфейса
  var _this = "mthis" in this ? this : this._this;//mthis - внешний интерфейс
  //debugger;
  _this.target.removeEventListener(_this.mthis.type, func, ...args)
  /* this._this.target.addEventListener(this.type, func) */
};

/**
 * @function dispatchEvent
 * @memberof module:atomnamedevent~AtomNamedEvent.eventFunc
 * @description Генерирует событие. Экземпляры объекта {@link module:atomnamedevent~AtomNamedEvent} являются событиями
 * с дополнительными примесями. Этот методо генерирует это событие.
 * Является абстракцией над функцией [EventTarget#dispatchEvent]{@link module:atomnamedevent~EventTarget#dispatchEvent} избавляя от потребности передовать
 * в виде параметра объект события.
 *
 */
AtomNamedEvent.prototype.func.dispatchEvent = function(){
    var mthis = "_this" in this ? this : this.mthis;//_this только интепрфейса
    var _this = "mthis" in this ? this : this._this;//mthis - внешний интерфейс
    _this.target.dispatchEvent(_this.mthis)
    /* this._this.target.dispatchEvent(this) */
};

/**
 * @function on
 * @memberof module:atomnamedevent~AtomNamedEvent.eventFunc
 * @description псевдоним для {@link module:atomnamedevent~AtomNamedEvent.eventFunc.addListener
 * }
 */
AtomNamedEvent.prototype.func.on = AtomNamedEvent.prototype.func.addListener;
/**
 * @function emmit
 * @memberof module:atomnamedevent~AtomNamedEvent.eventFunc
 * @description псевдоним для {@link module:atomnamedevent~AtomNamedEvent.eventFunc.dispatchEvent}
 */
AtomNamedEvent.prototype.func.emmit = AtomNamedEvent.prototype.func.dispatchEvent;

//----------------End eventFunc-----------------

/**
 * @function init
 * @param {String | module:atomnamedevent~Event} pname  - имя события(тип {@link Event}), или  объект события.
 * @param {module:atomnamedevent~EventTarget} target - интервейс для работы с событиями.
 * Именно он вызывает, определяет, и удоляет слушателей событий
 * @memberof module:atomnamedevent~AtomNamedEvent
 * @returns {module:atomnamedevent~AtomNamedEvent#OuterInterface}


 * @description  Это функци возврощает объект - который будет возвращён конструктором
 * класса {@link module:atomnamedevent~AtomNamedEvent}. Она коректно сработает только в контексте этого класса, или
 * класса который наследуется от него. Использование вне контекста этого класса - вызовет ошибку.
 * Значение параметров передаются от параметров конструктора.
 */
AtomNamedEvent.prototype.init = function(pname, target){
  //var mthis = new CustomEvent(pname);

  //проверка опционального EventTarget
if (
(this.target !== target)&&(target instanceof EventTarget)
){this.target = target};

    var _this = this;
    _this.name = pname; //запомнили имя события или сам объект события.
  var mthis = (pname instanceof Event) ? pname : new Event(pname); // проверка pname на предметого не являетсяли он объектом событием


  mthis._this = this;
  this.mthis = mthis;
  var _this = this;
  ;
  /*mthis.addListener = this.addListener;
  mthis.dispatchEvent = this.dispatchEvent;*/


  //assign - объединение объектов.
  Object.assign(mthis, _this.func);

  return mthis;

};

//AtomNamedEvent.prototype.say = function(){console.log(this.name)}


//----------------Start AtomNamedEvent-----------------
/**
 * @class AtomNamedEvent


 * @param {(String|module:atomnamedevent~Event)} pname - имя события(тип {@link Event}), или  объект события.
 * @param {module:atomnamedevent~EventTarget} [target={@link AtomNamedEvent.prototype.target}] - интервейс для работы с событиями.
 * Именно он вызывает, определяет, и удоляет слушателей событий
 * @description
 * @returns {module:atomnamedevent~AtomNamedEvent#OuterInterface} - возврощает переменную {@link module:atomnamedevent~AtomNamedEvent#mthis}

 */

function AtomNamedEvent(pname, target=AtomNamedEvent.prototype.target){
 //   this.init(pname);


/**
 * @type {module:atomnamedevent~AtomNamedEvent#OuterInterface}
 * @description Переменная будет возвращена конструктором. Контекст конструктора сохраняется
 * в одном из свойств (**_this**). Переменная является внешним интерфейсом для работы с классом.
 * Всё что определено в контексте класса [AtomNamedEvent]{@link module:atomnamedevent~AtomNamedEvent} через **this** по сути является защищёнными
 * полями(не доступные за пределами класса, но доступны тем классам которые от него наследуются)
 * Функция [AtomNamedEvent.init]{@link module:atomnamedevent~AtomNamedEvent.init} помимо того что функция инициализирует экземпляр,
 * очень важную взаимосвязь следующего вида<br>
 * <pre>
 *    mthis._this = this;
 *    this.mthis = mthis;
 * </pre>
 * Взаимосвязь описанная выше - и является основой для реализации внешнего интерфейса и
 * реализации защищённызх переменнных.
 * @memberof module:atomnamedevent~AtomNamedEvent
 * @instance
 * @readonly
 */
  var mthis = this.init(pname, target);
  //console.dir(arguments);
  Object.assign(this, mthis);
 // return mthis;
}

/**
 * @typedef {module:atomnamedevent~Event} module:atomnamedevent~AtomNamedEvent#OuterInterface

 * @mixes module:atomnamedevent~AtomNamedEvent.eventFunc
 * @property {module:atomnamedevent~AtomNamedEvent} _this - **READONLY**. Свойство потребное для работы методов класса {@link module:atomnamedevent~AtomNamedEvent}.
 * Сохроняеят контекст экземпляра класса.
 * @description Этот тип данных позволяет реализовывать концепцию внешнего интерфейса и защищённых переменных.
 * Переменна этого типа возвращается конструктором {@link module:atomnamedevent~AtomNamedEvent}, которая создаётся функцией
 * {@link module:atomnamedevent~AtomNamedEvent.init }
 *
 *
 */
//----------------End AtomNamedEvent-----------------

/**Экспорт класса */
module.exports.AtomNamedEvent = AtomNamedEvent;

//export to window
try {Object.assign(window, module.exports)}catch(e){
console.groupCollapsed('%cW', 'color: red');
console.error(e);
console.groupEnd();}
//end export to window

//AtomNamedEventExt.prototype = AtomNamedEvent.prototype;
//AtomNamedEventExt.prototype.constructor = AtomNamedEventExt;
//
//function AtomNamedEventExt(...args){
//  var mix = AtomNamedEvent.apply(this, args);
//  Object.assign(this, mix);
//}
//
////AtomNamedEvent.prototype.constructor = AtomNamedEvent.prototype.init;
//
//var obj = new AtomNamedEventExt("gg");
//var obj1 = new AtomNamedEventExt("gg", (new EventTarget()));
//
//
//obj.addListener((ev)=>{console.log(ev._this.name)});
//
//obj1.addListener(()=>{console.log("hari")});
/////*obj._this.target.addEventListener(obj.type, (ev)=>{console.log(ev._this.name)});*/
//obj.dispatchEvent();
//obj1.dispatchEvent();
//////console.log(obj instanceof Event)

