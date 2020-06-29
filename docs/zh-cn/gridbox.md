### 下拉表格组件 - `gridbox`:  

    如果没有任何自定义化的设置，下拉表默认只有一列Name（属性：name），数据单元的属性默认也是要求有name。

*样例* :  

    <div id="gridbox" name="version" textname="version_text"></div>
    $('#gridbox').gridbox({
      valueField: 'code',
      fitColumns: true,
      url: 'data0.json',
      onBeforeLoad: beforeLoad
    });
    或者
    <div class=”easyui-pairgrid” name="car" textname="car_text" data-options="
      valueField: 'code',
      textField: 'name',
      fitColumns: true,
      columns:[
        {titile:'编码',field:'code',width:100},
        {titile:'名称',field:'name',width:100}
      ],
      data:[
        {code:'CD001',name:'玛莎拉蒂'},
        {code:'CD002',name:'兰博基尼'}
      ]"></div>

*属性* :  

| 属性名     | 属性值类型     | 描述     | 默认值     |
| :------------- | :------------- | :------------- | :------------- |
| value | string | 下拉表的默认值 |  |
| text | string | 下拉表的默认文本 |  |
| fitColumns | boolean | 真正的自动展开/收缩列的大小，以适应网格的宽度，防止水平滚动。 | true |
| columns | array | 下拉列表的列数据，参加datagrid的columns说明	[{title:’Name’,field:’name’,width: 100}] |  |
| url | string | 下拉表URL从远程站点请求数据 | null |
| data | array | 下拉表静态数据（与url互斥，url设置时则此方式无效） | null |
| valueField | string | 指定隐藏的value域取的属性（columns配置了才可以设置，否则不要设置） | name |
| textField | string | 指定显示的text域取的属性（columns配置了才可以设置，否则不要设置） | name |
| queryName | string | 指定下拉表查询域的name属性 | name |
| readonly | boolean | 只读模式 <br><code>true：下拉表不允许任何的修改操作<br> false：下拉表可以修改变更</code> | false |
| editable | boolean | 是否可编辑 <br><code>true：文本可以修改<br> false：文本不可修改 | true |
| formatter | function | 文本域formatter(格式化器)函数，带2个参数：<br>text：textField对应的值。row：行记录数据。<pre>$('#dg').girdbox({<br> formatter: function(text, row){<br>  return text+ row[‘code’];<br> } <br>});</pre> | undefined |
| queryParams | object | 在请求远程数据的时候发送额外的参数。代码示例：<pre>$('#dg').gridbox({queryParams: { name:'easyui', subject: 'gridbox' }});</pre> |  |
| messages | object | 主要是针对文字国际化的设置<pre>tips: 删除操作弹出的提示框标题<br>delete: 删除操作弹出的提示框内容<br>queryName: 右表查询域的输入提示 <br>设置： { tips: ’提示’, confirm: ’未选，是否关闭？’, ok: ‘’, queryName: ’名称’ }</pre> |   |

*事件* :  

| 事件名     | 参数     | 描述     |
| :------------- | :------------- | :------------- |
| onBeforeLoad	| param	| 在载入请求数据数据之前触发，如果返回false可终止载入数据操作。 |
| onLoadSuccess	| data	| 在数据加载成功的时候触发。 |
| onConfirm	| param	| 已选中数据，点击确认按钮后触发，参数格式为：{value:’xxx’ , text: ‘xxx’} |

*方法* :  

| 方法名     | 参数     | 描述     |
| :------------- | :------------- | :------------- |
| getValue	 | none |	获取组件的值 |
| getText	 | none |	获取组件显示的文本值 |
| setItem	 | object |	设置文本和值<pre>$('#dg').gridbox(‘setItem’,{ value:’city001’, text: ‘北京市’});</pre>|
