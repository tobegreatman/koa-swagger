### 批量选择结果组件 - `el-bulk` :

<img src="./images/el-bulk.jpg"/>

*样例* :  

    <el-bulk ref="bulk" target="devices" :list="ckRows" row-key="code"
      :message="{title:'已选设备',subTitle:'设备编码',clear:'清除',cancel: '取消'}">
      <template slot="button">
        <a class="linkbutton linkbutton_nowanna"><span>批量清除</span></a>
        <a class="linkbutton linkbutton_trend"><span>移动到设备组</span></a>
      </template>
    </el-bulk>


*属性* :  

| 属性名 | 属性值类型 | 描述 | 默认值 |
| :------------- | :------------- | :------------- | :------------- |
| row-key | string | 数据的唯一性标识 | |
| list | array | 选中的行数据 | |
| target | string | 关联批量选择的表格，以id属性作为关联 | |
| message | object | 自定义显示文本<br> <pre>title: 已选结果的标题<br>subTitle: 已选结果列表的表头<br>clear：全部删除的提示文字<br>cancel：取消按钮的文字</pre>| |
| slot | string | 按钮插槽 | |
