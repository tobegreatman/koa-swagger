### Vue版 -  `el-ctable` :

*样例* :  

    <el-ctable :url="url" @load-success="loadSuccess" :height="height" :query-params="params"
    :page-size="pageSize" pagination="true">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <template slot="toolbar">
            <el-input v-model="params.nameText" :value="params.nameText" size="small" >
              <template slot="prepend">Http://</template>
            </el-input>
        </template>
    </el-ctable>

*属性* :  

| 属性名         | 属性值类型      | 描述           | 默认值          |
| :------------- | :------------- | :------------- | :------------- |
| url	| string	| 异步请求加载数据路径| |
| query-params	| object	| Url异步请求方式的参数|
| pagination	| boolean	| 是否分页| 	false|
| page-size	| number	| 在设置分页属性的时候初始化页面大小	| 10 |
| page-list	| array	| 在设置分页属性的时候 初始化页面大小选择列表	| [10, 20, 30, 50]|
| height	| string\number	| 表格高度设置|
| data	| array	| 表格静态加载数据（与url互斥）| |
| time	| number	| 定时刷新数据（单位秒）| |
| slot	| 内嵌	1、<template slot=”toolbar”></template> 查询域插槽| |
| type	| string	| Card: 卡片模式| |
| card-option	| object	type: card，卡片模式才生效，fields数组的第一个作为卡片标题展示 <pre>{<br>fields: [<br>'id', <br> {<br>  field: 'name',  -- 对应表格字段属性<br>  label: 'Name',  -- 卡片上展示的属性名<br>  labelShow: true,  -- 控制属性名是否展示<br>  Formatter: function(value ){<br>  -- 格式化属性值个性展示<br>  }<br> },<br> ... ... <br>],<br> menus: [],<br> // 处理菜单数据，如果有返回值则为新菜单数据<br> menuFmt: function(data, tableRow ){ },  <br> checkable: false,  -- 控制是否展示勾选框<br> // 菜单点击钩子，返回false则取消点击事件<br> beforeClick: function(menuRow, tableRow ){ }  <br>}</pre>|  |

*事件（继承于el-table的事件）* :  

| 事件名     | 参数     | 描述     |
| :------------- | :------------- | :------------- |
| load-success	| data	| url异步加载成功后回调 |
| card-menu-click	| menuRow, tableRow	| 卡片模式，操作区按钮点击事件回调|

*方法（继承于el-table的方法）* :  

| 方法名     | 参数     | 描述     |
| :------------- | :------------- | :------------- |
| refresh	| event	| 刷新表格数据（url异步加载方式） |
