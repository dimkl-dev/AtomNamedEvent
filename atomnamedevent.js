// Add your code here
/**
 * @class Event
 * @param {String} type - тип соботия. По сути имя события. В документации **mozilla** это параметр носит имя **typeArg**
 * @classdesc Базовый класс.  Экземпляры этого класса и есть сами объекты событий. 
 * Переменные этого типа, с дополнительными примясями, возврощаяются конструктором класса {@link AtomNamedEvent}.
 * Класс является встроенным в сам язык как **web** версии, так и его серверной реализации **nodeJS**.
 * Для больших подробностей по работе с этим интерфейсом смотрите 
 * докоментацию  [mozilla]{@link https://developer.mozilla.org/ru/docs/Web/API/Event/Event} 
 * или документацию [node js]{@link https://nodejs.org/docs/latest/api/events.html#class-event} если используете пакет на сервере. 
 * Здесь приведён только самый необходимый минимум информации о классе, только та которая используется в коде.
 */





/**
 * @class EventTarget
 * @interface EventTarget
 * @classdesc Базовый класс. Функциональность класса {@link AtomNamedEvent} по рабате с событиями основана на нём.  
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
 * @function EventTarget#addEventListener
 * @param {String} type - в коде ниже используется как имя события
 * @param {Function} listener - обработчик события
 * @param {any} [...args] - остальные параметры. Подробности смотри в полной документации к функции.
 * @description добовляет обработчик события. Подробности смотри по ссылкам ниже.<br>
 * [web реализация]{@link https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener}  и
 * [серверная реализация]{@link https://nodejs.org/docs/latest/api/events.html#eventtargetaddeventlistenertype-listener-options}
 * 
 */

/**
 * @function EventTarget#removeEventListener
 * @param {String} type - в коде ниже используется как имя события
 * @param {Function} listener - обработчик события 
 * @param {any} [...args] - остальные параметры. Подробности смотри в полной документации к функции.
 * @description удаляет обработчик события. Подробности смотри по ссылкам ниже.<br>
 * [web реализация]{@link https://developer.mozilla.org/ru/docs/Web/API/EventTarget/removeEventListener}  и
 * [серверная реализация]{@link https://nodejs.org/docs/latest/api/events.html#eventtargetremoveeventlistenertype-listener-options}
 * 
 */

/**
 * @function EventTarget.prototype.dispatchEvent
 * @param {Event} event - сам объект события
 * @description Генерирует события. Подробности смотри по ссылкам ниже.<br>
 * [web реализация]{@link https://developer.mozilla.org/ru/docs/Web/API/EventTarget/dispatchEvent}  и
 * [серверная реализация]{@link https://nodejs.org/docs/latest/api/events.html#eventtargetdispatcheventevent}
 * 
 */
/**
 
 * @type {EventTarget} */

AtomNamedEvent.prototype.target = new EventTarget();



/**
 * _@class eventFunc
 * _@hideconstructor
 * @mixin eventFunc

 * @memberof AtomNamedEvent 
 * @description  Cодержит методы которые используются всеми экземплярами.
 *  Нужен для удобства использования.
 
 */

/**
 * @type {AtomNamedEvent.eventFunc}
 * @memberof AtomNamedEvent
 * @description Доступна как  ***{@link AtomNamedEvent.prototype.func}***
 * Добавлена для удобства. Содержит функции которые используется всеми экземплярами класса {@link AtomNamedEvent}
 */
AtomNamedEvent.prototype.func = {};

/**
 * @function AtomNamedEvent.eventFunc.addListener
 * @param {Function} listener - **callback** функция которая будет вызвана в результате срабатывания событитя.
 * @param {any} [...args] - значение параметра смотри в описание функции {@link EventTarget#addEventListener}
 * @description Региструет обработчик события для экземпляра объекта {@link AtomNamedEvent}.
 * Является абстракцией над функцией {@link EventTarget#addEventListener} избавляя от потребности вводить 
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
 * @function AtomNamedEvent.eventFunc.removeListener
 * @param {Function} listener - **callback** функция которая будет удалена из обработчиков событитя.
 * @param {any} [...args] - значение параметра смотри в описание функции {@link EventTarget#removeEventListener}
 * @description Удаляет обработчик события для экземпляра объекта {@link AtomNamedEvent}.
 * Является абстракцией над функцией {@link EventTarget#removeEventListener} избавляя от потребности вводить 
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
 * @function AtomNamedEvent.eventFunc.dispatchEvent
 * @description Генерирует событие. Экземпляры объекта {@link AtomNamedEvent} являются событиями 
 * с дополнительными примесями. Этот методо генерирует это событие.
 * Является абстракцией над функцией {@link EventTarget#dispatchEvent} избавляя от потребности передовать 
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
 * @function AtomNamedEvent.eventFunc.on
 * @description псевдоним для {@link AtomNamedEvent.eventFunc.addListener
 * }
 */
AtomNamedEvent.prototype.func.on = AtomNamedEvent.prototype.func.addListener;
/**
 * @function AtomNamedEvent.eventFunc.emmit
 * @description псевдоним для {@link AtomNamedEvent.eventFunc.dispatchEvent}
 */
AtomNamedEvent.prototype.func.emmit = AtomNamedEvent.prototype.func.dispatchEvent;

/**
 * @alias AtomNamedEvent.init
 * @param {String | Event} pname  - имя события(тип {@link Event}), или  объект события. 
 * @param {EventTarget} target - интервейс для работы с событиями. 
 * Именно он вызывает, определяет, и удоляет слушателей событий 
 * @instance
 * @static
 * @memberof AtomNamedEvent
 * @returns {AtomNamedEvent#OuterInterface}


 * @description  Это функци возврощает объект - который будет возвращён конструктором
 * класса {@link AtomNamedEvent}. Она коректно сработая только в контексте этого класса, или
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



/**
 * @class AtomNamedEvent
 * @param {(String|Event)} pname - имя события(тип {@link Event}), или  объект события. 
 * @param {EventTarget} [target={@link AtomNamedEvent.prototype.target}] - интервейс для работы с событиями. 
 * Именно он вызывает, определяет, и удоляет слушателей событий
 * @description 
 * @returns {AtomNamedEvent#OuterInterface} - возврощает переменную {@link AtomNamedEvent#mthis}
 
 */

function AtomNamedEvent(pname, target=AtomNamedEvent.prototype.target){
 //   this.init(pname);
 

/**
 * @type {AtomNamedEvent#OuterInterface}
 * @description Переменная будет возвращена конструктором. Контекст конструктора сохраняется 
 * в одном из свойств (**_this**). Переменная является внешним интерфейсом для работы с классом. 
 * Всё что определено в контексте класса {@link AtomNamedEvent} через **this** по сути является защищёнными
 * полями(не доступные за пределами класса, но доступны тем классам которые от него наследуются)
 * Функция {@link AtomNamedEvent.init} помимо того что функция инициализирует экземпляр, 
 * очень важную взаимосвязь следующего вида<br>
 * <pre>
 *    mthis._this = this;
 *    this.mthis = mthis;
 * </pre>
 * Взаимосвязь описанная выше - и является основой для реализации внешнего интерфейса и 
 * реализации защищённызх переменнных.
 * @alias AtomNamedEvent#mthis
 * @readonly
 */
  var mthis = this.init(pname, target);
  //console.dir(arguments);
  Object.assign(this, mthis);
 // return mthis;
}

/**
 * @typedef {Event} AtomNamedEvent#OuterInterface
 * @mixes AtomNamedEvent.eventFunc
 * @property {AtomNamedEvent} _this - **READONLY**. Свойство потребное для работы методов класса {@link AtomNamedEvent}.
 * Сохроняеят контекст экземпляра класса. 
 * @description Этот тип данных позволяет реализовывать концепцию внешнего интерфейса и защищённых переменных.
 * Переменна этого типа возвращается конструктором {@link AtomNamedEvent}, которая создаётся функцией 
 * {@link AtomNamedEvent.init }
 * 
 * 
 */



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

