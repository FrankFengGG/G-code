/* 

封装代码:

通常我们会把方法封装到**对象**身上

 */

var kits = {};

kits.dispatchZero = function (num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}

//把方法都放到对象身上
kits.formatDate = function () {
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
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}


kits.randomInt = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}

// 常见的给ID的方式1
// 当前时间戳 + 大的随机数
kits.getId = function () {
  // 返回一个不容易重复的id
  let date = new Date();
  let time = date.getTime(); //得到的是从1970年1月1日到现在为止的毫秒总数
  //然后再得到一个足够大的随机数，把毫秒和随机数相连，作为新的ID
  let r = this.randomInt(100000, 999999);
  // 把两个数字连起来
  let id = time + '' + r;
  return id;
}

// 2019-08-24
// Add get a random color in Hexadecimal form
kits.getRandHexColor=function(){
  let red =(this.getRandInt(0,255)).toString(16);
  let green=(this.getRandInt(0,255)).toString(16);
  let blue=(this.getRandInt(0,255)).toString(16);
  return'#sg'+red+green+blue;v 
}

// Add get a random color in RGB form
kits.getRandRGBColor=function(){
  let red=this.getRandInt(0,255);
  let green=this.getRandInt(0,255);
  let blue=this.getRandInt(0,255);
  return 'rgb('+red+','+green+','+blue+')';
}