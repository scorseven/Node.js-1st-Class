//Node下的常用工具
const util = require("util");

console.log(util.isArray([]));
console.log(util.isBoolean(true));
console.log(util.isBuffer([89]));
console.log(util.isDate(new Date()));
console.log(util.isFunction(function(){}));
console.log(util.isNull(null));
console.log(util.isNumber(1));
console.log(util.isObject({}));
console.log(util.isRegExp(/^d{11}/));
console.log(util.isString(""));

var x;
console.log(util.isNullOrUndefined(x));

var json = {"theKey":"theValue"};
console.log(typeof(json));
console.log(util.inspect(json));//inspec可以把json转成字符串
console.log(JSON.stringify(json));//js内置的JSON全局对象也是可用的

var obj = {name:"gqx",sex:"male"};//利用对象字面量直接定义一个对象
console.log(typeof(obj));
console.log(util.inspect(obj));