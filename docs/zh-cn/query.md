### 查询组件 - `query` :


*样例* :  

    <div class="easyui-query" tips="Advanced Query"
      name="search_text"
      inputId="cpeSearchText"  targetId="cpeQueryDiv"
      Placeholder="CPE Name/Cell Name/MAC Address/IMSI"
      data-options="
      query: function(){ queryCPETable('e'); }
     "></div>

    <div id=”cpeQueryDiv” ....

*属性* :  

| 属性名 | 属性值类型 | 描述 | 默认值 |
| :------------- | :------------- | :------------- | :------------- |
| name | string | 查询输入域的name属性 |
| id | string | 容器的id |
| inputId | string | 查询输入域的Id属性 |
| targetId | string | 联动高级查询浮层的关联Id属性 |
| tips | string | 高级查询箭头悬浮的提示文本 |

*事件* :  

| 事件名     | 参数     | 描述     |
| :------------- | :------------- | :------------- |
| query       |        | 点击查询图标触发的方法事件       |
