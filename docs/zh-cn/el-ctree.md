### 树组件 - `el-ctree` :

<img src="./images/el-ctree.jpg"/>

*样例* :  

    <el-ctree style="width: 80%"
      title="权限项"
      :readonly="false"
      :data="treeData"
      :cascade="['wform > rform']"
      :check-forms="[
        {key: 'rform', label: 'Readonly', prop: 'readonly'},
        {key: 'wform', label: 'Writable', prop: 'write'},
        {key: 'aform', label: 'Action', prop: 'active'}
      ]",
      :checked="{
        rform: ['38'],
        wform: ['1']
      }"
      :ignore="{
        rform: ['1'],
        wform: ['38']
      }"></el-ctree>

      数据格式：
      [
        {
          id: '',  // 必要属性: 节点的唯一标识
          pid: '',  // 必要属性：节点的父级标识
          state: '',
          isLeaf: true,  // 必要属性：是否为叶子节点
          text: '',  // 必要属性：节点名称
          children: [],
          ...
        },
        ...
      ]

*属性* :  

| 属性名     | 属性值类型     | 描述     | 默认值     |
| :------------- | :------------- | :------------- | :------------- |
| title	 | string |	树标题 |
| data	 | array | 树结构数据 |
| readonly	| boolean | 是否只读模式	 | false |
| cascade | array | 联动关系配置  | [] |
| check-forms	| array | checkbox组配置：<br><pre>key: checkbox组的form键值<br>lable: checkbox组的显示名<br>prop: checkbox对应树数据的属性,也是默认勾选的关键属性</pre>	 | [] |
| checked | object | 设置默认勾选的节点，根据checkbox组的form键值设置对应关系  |  |
| ignore | object | 设置不渲染的节点，根据checkbox组的form键值设置对应关系  |  |

*方法* :  

| 方法名     | 参数     | 描述     |
| :------------- | :------------- | :------------- |
| reviewForms   | treeData  | 回显tree的checkbox组状态  |
| getResult   |   | 获取树组件checkbox组的选中结果，返回格式：<pre>{rform: ['3','5'],wform: ['3','26'],aform: []}</pre>  |
