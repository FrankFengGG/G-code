/* 

封装代码:

通常我们会把方法封装到**对象**身上

 */

var kits = {};

kits.dispatchZero = function(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
};

//把方法都放到对象身上
kits.formatDate = function() {
  var date = new Date();
  // 把年月日时分秒获取
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = this.dispatchZero(month);
  var day = date.getDate();
  day = this.dispatchZero(day);
  var hour = date.getHours();
  hour = this.dispatchZero(hour);
  var minute = this.dispatchZero(date.getMinutes());
  var second = this.dispatchZero(date.getSeconds());
  return (
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
  );
};

kits.randomInt = function(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
};

// 常见的给ID的方式1
// 当前时间戳 + 大的随机数
kits.getId = function() {
  // 返回一个不容易重复的id
  let date = new Date();
  let time = date.getTime(); //得到的是从1970年1月1日到现在为止的毫秒总数
  //然后再得到一个足够大的随机数，把毫秒和随机数相连，作为新的ID
  let r = this.randomInt(100000, 999999);
  // 把两个数字连起来
  let id = time + "" + r;
  return id;
};

// 2019-08-24
//randomHexColor  获取一个随机的十六进制的颜色
kits.getrandomHexColor = function() {
  let red = this.getRandInt(0, 255).toString(16);
  let green = this.getRandInt(0, 255).toString(16);
  let blue = this.getRandInt(0, 255).toString(16);
  return "#sg" + red + green + blue;
  v;
};

// randomRGBColor   获取一个随机的rgb格式的颜色
kits.getrandomRGBColor = function() {
  let red = this.getRandInt(0, 255);
  let green = this.getRandInt(0, 255);
  let blue = this.getRandInt(0, 255);
  return "rgb(" + red + "," + green + "," + blue + ")";
};

// ----------2019-08-27----------
// 封装关于本地存储的操作
// 从本地存储中读取复杂数据
/**
 * getLocalDataArray(key)  从localStorage里面根据指定的键(key)获取一个数组
 * @description 从本地存储中读取复杂数据
 * @param {string} 要以哪个键从本地存储中读取数据
 * @returns {object} 读取出来的，经JSON转换的复杂数据
 */
kits.getArray = kits.loadArrayFromLocalStorage = function(key) {
  let json = localStorage.getItem(key);
  let arr = JSON.parse(json);
  return arr || [];
};

/**
 * saveLocalDataArray(key,arr)   将一个数组(arr)以指定的键(key)存储到localStorage里面
 * @description 封装好的把复杂数据存储到本地里面的方法，默认是存储json格式字符串
 * @param {string} key 存储到本地里面的键
 * @param {object} obj 要存储的复杂数据
 * @returns undefined
 */
kits.setData = kits.saveArrayToLocalStorage = function(key, obj) {
  let json = JSON.stringify(obj);
  localStorage.setItem(key, json);
};
