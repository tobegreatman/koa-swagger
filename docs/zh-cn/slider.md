### Vue版 -  `el-slide` :


*样例* :  

    <el-slide :show="show" ref="slide" position="top" height="60%" url="form.html" @ok="alert('ok')" @cancel="handerCancel">
        loading...在多数使用场景，我们会在bind钩子里绑定一些事件，比如在document上用addEventListerer绑定，在unbind里有
        removeEventListener 解绑，比较典型的示例就是让这个元素随着鼠标拖拽。
        如果需要更多个值，自定义指令也可以传入一个JavaScript对象字面量， 只要是合法类型的JavaScript表达式都是可以的。示例代码如下：
    </el-slide>

*属性* :  

| 属性名         | 属性值类型      | 描述           | 默认值          |
| :------------- | :------------- | :------------- | :------------- |
| url	| string	| 异步加载片段数据请求接口| |
| title	| string	| 划出层的标题	| Info|
| position	| string	| 划出层的位置：top、left、bottom	| left|
| show	| boolean	| 控制划出层是否显示	| false|
| height	| string、number	| 划出层高度设置	| 100%|
| okText	| string	| 确定按钮的定制显示文本	| OK|
| cancelText	| string	| 取消按钮的定制显示文本	| Cancel|

*事件* :  

| 事件名     | 参数     | 描述     |
| :------------- | :------------- | :------------- |
| ok	| event	| 点击确定按钮的回调方法| 
| cancel	| event	| 点击取消按钮的回调方法|
