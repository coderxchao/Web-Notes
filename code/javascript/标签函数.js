/* 
[带标签的模板字符串-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals#%E5%B8%A6%E6%A0%87%E7%AD%BE%E7%9A%84%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2)

[标签函数](https://zhuanlan.zhihu.com/p/31687266)
*/
function foo(arg1, arg2, arg3) {
  console.log("arg1=", arg1, "    arg2=", arg2, "    arg3=", arg3);
}

foo`hel${2}lo${3}world`;
foo`hello${5}world`;
foo`helloworld`;

/* 
1. 标签函数的语法是函数名后面直接带一个模板字符串，并从模板字符串中的插值表达式中获取参数。
2. 标签函数的第一个参数是被嵌入表达式分割的文本数组，第二个参数开始依次是嵌入表达式的内容。

上面例子中如 foo\`hel${2}lo${3}world\`这个标签函数中，传递给foo的第一个参数`arg1`是通过`${2}`和`${3}`分割成的数组[ 'hel', 'lo', 'world' ]，而第二个参数`arg2`则是表达式`${2}`的值，第三个参数`arg3`则是表达式`${3}`的值

*/
