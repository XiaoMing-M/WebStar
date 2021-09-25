# WebStar
学习前端的一些简单学习记录
# html->css
这部分内容未设计html5与css3，比较简单，看下页面就懂了，都有注释详细描述！
页面注释详细描述了相关标签与属性的作用以及css的多种使用方式。
#js
页面注释详细描述了相关标签与属性的作用与使用方式。
#js细分基础知识补充
js.1
js严格区分大小写，每条语句需要加分号结尾，不加会默认加但是会消耗浏览器资源，且可能出现错误等严重问题，必须加，js会忽略空格和换行，我们可以利用这点让代码变得好看些。

标识符：变量，函数，属性，参数等第一个字符为字符，下划线_，$,其他字符可以为字符，下划线_，$，数字。这些字符不可以使用关键字和保留字，使用驼峰命名法。

关键字：break，do，instanceof，typeof，case，else，new，var，catch，finally，return，void，continue，for，switch，while，default，if，throw，delete，in，try，function，this，with，debugger，false，true，null

保留字：class，enum，extends，super，const，export，import，implements，let，private，public，yield，interface，package，protected，static

字面量：一些无法改变的值，比如1,2,3,4,5等
变量：给某个值或者对象标注名称，使用var关键字申明变量
var a = 1; //这里a就是一个变量

数据类型：5种基本类型，String，Number,Boolean,Null,undefined,其余为Object，一共6种！，Null类型的值只有一个那就是空值也用null表示。undefined也只有一个就是undefined

运算符：可以对多个值进行运算，typeof就是运算符，会将该值以字符串的形式返回该类型。还有+，-，*，/，%。任何值与字符串相加会变成字符串，由浏览器调用String()函数操作。任何值作- * /会自动转为Number,还有++与--和java中一样，不做描述。！非，用于对布尔值取反，如果对于非布尔值作！操作，会转成布尔再取反。还有其他的比如&&以及||等和java类似不做描述。使用==判断是否相等。==在比较2个值是否相等时会进行类型转换，但是===不会。"5"==5是true"5"===5是false

条件语句：if else if else，switch case，while，do while ，for与java类似，不作描述，switch case需要配合break使用。continue只在循环语句中使用。我们还可以给for循环外部加上一个lable，这样break可以指定的去跳出哪个循环体。

js.2
js中的对象：除了基本类型，其他的比如内建对象，比如像数组对象Arrays,时间对象Data，数学对象Math等，还有就是，js运行环境的对象由浏览器提供比如bom和dom，以及开发人员自己创建的对象。基本类型的变量是保存在栈中，值之间独立存在，不互相影响，对象保存在堆中，保存的是对象的地址，引用指向同一个地址，改值会互相影响。在比较的时候，基本类型比较的是值，引用类型比较的是对象的地址。函数也可以是一个对象，并且可以使用typeof检查一个函数对象是否存在，会返回function关键字。

作用域：全局作用域，直接编写在script中的js代码，都是全局的，页面打开时创建，页面关闭时销毁，全局作用域中有一个全局对象window，在全局作用域中，创建的变量为window的属性，方法为window的对象的方法。函数作用域，调用函数时创建，调用完毕销毁，相互独立可以访问全局作用域，因此可以使用window对象，但是全局无法访问函数作用域。