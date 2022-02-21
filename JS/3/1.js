var arr = [1,2,3,4,4,5,5];//一个小练习，给数组去重
for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
        if(arr[i] == arr[j]){
            arr.splice(j,1);
            j--;
        }
    }
}
var arr1 = [1,2];
var arr2 = [1,3];
var arr3 = arr1.concat(arr2,3423232,23123213);//将arr1与arr2合并为一个新数组，并且再加2个数。
var string= arr1.join();//将arr1转成字符串，默认使用，拼接，也可以再参数中指定连接符。
//reverse()用于反转数组。sort()进行排序，也可以再参数中指定一个函数指定排序规则。
var date = new Date();//创建一个对象，时间为当前时间。，也可以再参数中指定时间。
date.getDate();//获取当前时间还有getTime()时间戳，getday()周几，getMonth()获取月份，getFullYear()年份
Date.now();//获取当前时间的时间戳，一般用于测试代码性能。单位：毫秒，从1970年1月1日开始。
Math.floor();//math是个工具类用于对数进行数学运算不做介绍。

//Number，String，Boolean有3个包装类，用于实现一些特殊方法的调用，属于对象。
var num = new Number();
num.hello = "abc";
console.log(num);
//我们对于基本类型进行属性和方法等操作时，会默认被转成对象，之后再转为基本类型。

var str  = "hello";
console.log(str.length);//获取字符串的长度
//str[3];获取指定位置的字符，因为底层也是字符数组，和str.charAt(3)类似。
str.concat("你好");//字符串的拼接
str.slice(1,4);//截取字符串从1到4的部分内容。和substring类似,和substr类似
str.split(e);//根据该字符去分割字符串为字符数组。
str.toLocaleLowerCase();//去转成小写。