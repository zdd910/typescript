/** * Created by ID on 16/2/17. */function printLabel(labelledObj:{label:string}) {    console.log(labelledObj.label);};var myObj = {size: 12, label: 'size 12 object'};printLabel(myObj);//size 12 objectinterface LabelledValue {    label:string;};function printLed(labelledObj:LabelledValue) {    console.log(labelledObj.label);};var my = {size: 10, label: 'size 10 object'};printLed(my);//size 10 object//可选属性interface SquareConfig {    color?:string;    width?:number};//定义返回值的类型必须包含某些字段，定义参数必须符合某些属性function caeateSquare(config:SquareConfig):{color:string;area:number} {    var newSquare = {color: 'white', area: 100};    if (config.color) {        newSquare.color = config.color;    }    if (config.width) {        newSquare.area = config.width;    }    return newSquare;};var mySquare = caeateSquare({color: 'black'});console.log(mySquare);//Object {color: "black", area: 100}/** *接口定义方法 *///接口中定义方法interface SearchFunc {    (source:string, substring:string):boolean;};//实现接口的方法（一）var mySearch:SearchFunc;mySearch = function (source:string, substring:string) {    var result = source.search(substring);    if (result == -1) {        return false;    } else {        return true;    }};//实现接口的方法（二）var mySearch1:SearchFunc;//参数名称无所谓，只有类型对就可以了。mySearch1 = function (src:string, sub:string) {    var result = src.search(sub);    if (result == -1) {        return false;    } else {        return true;    }};/** * 接口定义数组 * 我们也可以用接口来描述数组类型， * 它的声明方式与函数类型相似。数组类型会有一个'index'类型， * 我们用它来表示数组索引 * （数组下标）的类型。这样我们也需要索引所对应的返回值的类型。 *///表示 数组通过索引取得的值必须是  string类型。interface StringArray {    [index:number]:string}//虽然索引标识是描述数组和字典类型的数据的好方法，// 它同时也会强迫其他所有属性都与索引的返回类型相同。// 在下面的例子中，'length'属性的类型不符合索引的返回类型，这会导致类型检查抛出错误：//interface Dictionary {//    [index: number]: string;//    length: number;    // error, the type of 'length' is not a subtype of the indexer//}var myStringArray:StringArray;myStringArray = ['bob', 'fred'];/** * 接口定义类 *///1，方法和属性interface  ClockInterface {    currentTime:Date;    setTime(d:Date);}class Clock implements ClockInterface {    currentTime:Date;    setTime(d:Date) {        this.currentTime = d;    }    constructor(h:number, m:number) {    }}//2，构造方法interface  ClockInterface1 {    new (hour:number, minute:number)}//这是因为当一个类实现一个接口时，//只有实例的部分会被进行检查。构造函数属于静态的部分，//它并不在检查的范围之内。所以下面会报错//class Clockd implements ClockInterface1 {//    constructor(h:number, m:number) {////    }//}class Clock2 {    constructor(h:number, m:number) {    }}var cs:ClockInterface1 = Clock2;var newClock = new cs(2, 30);//接口继承interface Shape {    color:string;}interface  PenStroke {    penWidth:number;}interface Square extends PenStroke,Shape {    sideLength:number;}var square = <Square>{};square.color = 'blue';square.sideLength = 10;square.penWidth = 5.0;//接口混合类型interface  Counter {    (start:number):string;    interval:number;    reset():void;}var c :Counter;c(10);c.reset();c.interval=5.0;