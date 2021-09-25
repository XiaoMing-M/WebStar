        var obj = new Object();//创建对象和java是不是很像
        obj.name = "阿俊"; //给对象添加属性
        obj.name = "小明"; //给对象修改属性
        delete obj.name; //给对象删除属性
        obj["123"] = 123; //给对象添加属性，给一个特殊的key比如123，需要使用这种方式添加
        obj["123"]; //当然使用这种方式添加的属性也就必须使用这种方式取出，可以console.log一下
        "123" in obj; //检查某个key是否在对象中，返回boolean
        var obj1 = {name:"阿俊",age:18,gender:男};//使用对象字面量，在使用时可以直接指定key与value
        //key可以加引号，也可以不加，但是如果有特殊的key，需要加。
        function fun1(a,b){//函数也是个对象， typeof用于判断对象是否存在
            console.log(typeof fun2 ===  'function');
        }//参数可以是任意类型，且为实参，使用时多余的参数忽略，少的参数为undefined
        function fun2(){}//函数体中返回什么函数就返回什么，不返回就什么也没有。
        (function(a,b){
            console.log(a,b);
        })(1,2);//立即执行函数，会直接被执行，后面的是给函数的执行的参数也可以无参数。
        for(var n in obj){
            //将对象进行枚举，有几个对象执行几次，n为key，obj[n]为value
        }
        var obj = {name:"111",say:fun1};
        fun1(1,2);//经常会用到this，直接调用函数this指的是window
        obj.say(1,2);//以对象的方法形式调用，this指的是当前调用方法的对象。
        //this这个参数以及arguments，者2个参数为隐含的参数默认自带。arguments用于保存参数。