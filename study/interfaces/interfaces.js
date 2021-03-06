/**
 * Created by ID on 16/2/17.
 */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
;
var myObj = { size: 12, label: 'size 12 object' };
printLabel(myObj); //size 12 object
function printLed(labelledObj) {
    console.log(labelledObj.label);
}
var my = { size: 10, label: 'size 10 object' };
printLed(my); //size 10 object
//定义返回值的类型必须包含某些字段，定义参数必须符合某些属性
function caeateSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
;
var mySquare = caeateSquare({ color: 'black' });
console.log(mySquare); //Object {color: "black", area: 100}
//实现接口的方法（一）
var mySearch;
mySearch = function (source, substring) {
    var result = source.search(substring);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
//实现接口的方法（二）
var mySearch1;
//参数名称无所谓，只有类型对就可以了。
mySearch1 = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var myStringArray;
class Clock {
    setTime(d) {
        this.currentTime = d;
    }
    constructor(h, m) {
    }
}
//这是因为当一个类实现一个接口时，
//只有实例的部分会被进行检查。构造函数属于静态的部分，
//它并不在检查的范围之内。所以下面会报错
//Error:(137, 7) TS2420: Class 'Clockd' incorrectly implements interface 'ClockInterface1'.
//class Clockd implements ClockInterface1 {
//    constructor(h:number, m:number) {
//
//    }
//}
class Clock2 {
    constructor(h, m) {
    }
}
var cs = Clock2;
var newClock = new cs(2, 30);
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) {
    }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock {
    constructor(h, m) {
    }
    tick() {
        console.log("tick tock");
    }
}
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var square = {};
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = function (start) {
    };
    counter.interval = 123;
    counter.reset = function () {
        console.log(counter.interval);
    };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
/**
 * 接口继承类
 * 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
 * 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
 * 接口同样会继承到类的private和protected成员。
 * 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
 * 这个接口类型只能被这个类或其子类所实现
 */
class ControlEx {
}
class ButtonEx extends ControlEx {
    select() {
        console.log('button');
    }
}
class TextBoxEx extends ControlEx {
    select() {
        console.log('TextBox');
    }
}
class Tab extends ControlEx {
}
class Box {
    select() {
    }
}
var textbox = new TextBoxEx();
var buttonex = new ButtonEx();
var tab = new Tab();
textbox.select(); //TextBox
buttonex.select(); //button
//tab.select();//Error: Property 'select' does not exist on type 'Tab'.
//通过接口调用
var v = new TextBoxEx();
v.select(); //TextBox
/**
 * 在上面的例子里，SelectableControl包含了Control的所有成员，包括私有成员state。
 * 因为state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口。
 * 因为只有Control的子类才能够拥有一个声明于Control的私有成员state，这对私有成员的兼容性是必需的。
 * 在Control类内部，是允许通过SelectableControl的实例来访问私有成员state的。
 * 实际上，SelectableControl就像Control一样，并拥有一个select方法。
 * Button和TextBox类是SelectableControl的子类（因为它们都继承自Control并有select方法），
 * 但Image和Location类并不是这样的。
 */
//# sourceMappingURL=interfaces.js.map