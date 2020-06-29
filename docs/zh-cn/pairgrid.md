
### 双表选择组件 - `pairgrid`:  

    要求右表的列须是左表的列的子集，且应设置idField并皆包含该属性

*样例* :  

    <div id="pair_grid"></div>

    $('#pair_grid').pairgrid({
      idField: 'code',
      leftColumns:[{field:'ck',checkbox:true},{field:'code',title:'编码',width:100},{field:'name',title:'名称',width:100}],
      rightColumns:[{field:'code',title:'编码'},{field:'name',title:'名称',width:100}],
      leftUrl: 'data.json',
      rightUrl: 'data0.json',
      rightBeforeLoad: rightBeforeLoad,
      leftBeforeLoad: leftBeforeLoad,
      leftBar:'#couple_left_bar'});
    或者
    <div class="easyui-pairgrid" data-options="
      idField: 'code',
      leftColumns:[{field:'ck',checkbox:true},{field:'code',title:'编码',width:100},{field:'name',title:'名称',width:100}],
      rightColumns:[{field:'code',title:'编码'},{field:'name',title:'名称',width:100}],
      leftUrl: 'data.json',
      rightUrl: 'data0.json',
      leftBar:'#couple_left_bar'"></div>

*属性* :  

<table>
  <thead>
    <tr>
      <td>属性名</td> <td>属性值类型</td> <td>描述</td> <td>默认值</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>idField</td>
      <td>string</td>
      <td>指明哪一个字段是标识字段，必配项，左右列表共有</td>
      <td>null</td>
    </tr>
    <tr>
      <td>leftColumns</td>
      <td>array</td>
      <td>PairGrid左边列配置对象，属性参见datagrid的Columns</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>rightColumns</td>
      <td>array</td>
      <td>PairGrid右边列配置对象，应该为leftColumns的子集</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>leftUrl</td>
      <td>string</td>
      <td>左表URL从远程站点请求数据，如果返回的数据有disabled：true，则该条数据将无法被勾选</td>
      <td>null</td>
    </tr>
    <tr>
      <td>rightUrl</td>
      <td>string</td>
      <td>右表URL从远程站点请求数据</td>
      <td>null</td>
    </tr>
    <tr>
      <td>leftData</td>
      <td>array</td>
      <td>
        左表静态数据加载，如果返回的数据有disabled：true，则该条数据将无法被勾选<br>
        示例:
        <code>
            $('#dg').pairgrid({
            	leftData: [
            		{f1:'value11', f2:'value12'},
            		{f1:'value21', f2:'value22',disabled: true}
            	]
            });
        </code>
      </td>
      <td>[]</td>
    </tr>
    <tr>
      <td>rightData</td>
      <td>array</td>
      <td>右表静态数据加载</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>toolBar</td>
      <td>string</td>
      <td>左表自定义的查询域（需要单独实现）</td>
      <td>null</td>
    </tr>
    <tr>
      <td>queryName</td>
      <td>string</td>
      <td>指定右表查询域的匹配属性（多值以逗号分隔）</td>
      <td>name</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>boolean</td>
      <td>
        只读模式
        <code>
          true：表格只能查询查看，不可编辑修改
          false：表格可以修改变更
        </code>
      </td>
      <td>false</td>
    </tr>
    <tr>
      <td>limit</td>
      <td>number</td>
      <td>选择个数限制</td>
      <td></td>
    </tr>
    <tr>
      <td>zone</td>
      <td>array</td>
      <td>左右表格比例分配</td>
      <td>[60,40]</td>
    </tr>
    <tr>
      <td>pageList</td>
      <td>array</td>
      <td>在设置分页属性的时候 初始化页面 大小选择列表。</td>
      <td>[10, 20, 50]</td>
    </tr>
    <tr>
      <td>pageSize</td>
      <td>number</td>
      <td>在设置分页属性的时候初始化页面大小。</td>
      <td>10</td>
    </tr>
    <tr>
      <td>messages</td>
      <td>object</td>
      <td>
        主要是针对文字国际化的设置
        <code>
          tips: 删除操作弹出的提示框标题
          delete: 删除操作弹出的提示框内容
          queryName: 右表查询域的输入提示
          设置：
          {
            tips: '提示',
            delete: '确认删除？',
            queryName: '名称'
          }
        </code>
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

*事件* :  

| 事件名  | 参数     | 描述     |
| :------------- | :------------- | :------------- |
| leftBeforeLoad | param       | 左表在载入请求数据数据之前触发，如果返回false可终止载入数据操作 |
| rightBeforeLoad | param | 右表在载入请求数据数据之前触发，如果返回false可终止载入数据操作 |
| onCheck | Index, row | 在用户勾选一行的时候触发，参数包括：<br><code>index：选中的行索引，索引从0开始。<br> row：对应于所选行的记录。</code>|

*方法* :  

| 方法名  | 参数     | 描述     |
| :------------- | :------------- | :------------- |
| getData       | none        |        |
| reload        | param       |	重载行。等同于'load'方法，但是它将保持在当前页。|
| load          |	param       |	加载和显示第一页的所有行。如果指定了'param'，它将取代'queryParams'属性。通常可以通过传递一些参数执行一次查询，通过调用这个方法从服务器加载新数据。<br><code>$('#dg').pairgrid('load',{ code: '01', name: 'name01' });</code>|
| clear         |	none        |	清除右表的结果数据|
