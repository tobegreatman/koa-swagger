### Vue版 -  `el-pairgrid` :

<img src="./images/el-pairgrid.png"/>

*样例* :  

    <el-pairgrid :query-name="queryName" :height="height" :right-url="url" :left-url="url" row-key="name" :query-params="params">
       <template slot="left">
         <el-table-column type="selection" width="40"> </el-table-column>
         <el-table-column prop="date" label="日期"> </el-table-column>
         <el-table-column prop="name" label="姓名"> </el-table-column>
         <el-table-column prop="address" label="地址"> </el-table-column>
       </template>
       <template slot="toolbar">
         <div>
           <el-query @query="query" @advance-query="advanceQuery" :placeholder="'name'" :ok-text="'确定'" :reset-text="'重置'">
             <template slot="form">
               <el-input v-model="params.nameText" :value="params.nameText" size="small" style="width: 40%">
                   <template slot="prepend">模糊匹配</template>
               </el-input>
             </template>
           </el-query>
          </div>
       </template>
       <template slot="right">
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
       </template>
     </el-pairgrid>

*属性* :  

| 属性名         | 属性值类型      | 描述           | 默认值          |
| :------------- | :------------- | :------------- | :------------- |
| left-url	| string	| 左表url异步加载数据路径| |
| right-url	| string	| 右表url异步加载数据路径|
| query-params	| object	| 左表的url异步加载路径参数|
| row-key	| string	| 区分数据项目的唯一标识id|
| height	| String、number	| 设置表格高度|
| zone	| array	| 设置左右表格比例	| [60,40]|
| queryName	| string	| 设置右表过滤时匹配的字段，多值时逗号分隔|
| title	| array	| 设置左右表的标题	['', '']|
| messages	| object	| 设置国际化提示信息：<pre>tips：弹出提示框的标题<br>delete：删除时的确认信息<br>placeholder：右表查询的输入提示<br>okText：弹出提示框的ok按钮的定制显示文本<br>cancelText：弹出提示框的cancel的定制显示文本</pre> |
| slot	| 内嵌	| 1、\<template slot="left"></template> 左表的表头插槽<br>2、\<template slot="right"></template> 右表的表头插槽<br>3、\<template slot="toolbar"></template> 左表的自定义查询域|

*事件* :  

| 事件名     | 参数     | 描述     |
| :------------- | :------------- | :------------- |
| selection-change	| selection,vm	| 右表勾选变动时触发，vm.getData()可以去到当前所有的选择结果|


*方法（继承于el-table的方法）* :  

| 方法名     | 参数     | 描述     |
| :------------- | :------------- | :------------- |
| reload	| event	| 刷新左表数据（url一般加载方式）|
| getData	| 	| 获取已选数据|
