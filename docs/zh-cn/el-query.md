### Vue版 -  `el-query` :


*样例* :  

    <el-query @query="query" @advance-query="advanceQuery" :placeholder="'name'" :ok-text="'确定'" :reset-text="'重置'">
        <template slot="form">
            <el-input v-model="params.nameText" :value="params.nameText" size="small" style="width: 40%">
               <template slot="prepend">模糊匹配</template>
            </el-input>
        </template>
    </el-query>

*属性* :  

| 属性名         | 属性值类型      | 描述           | 默认值          |
| :------------- | :------------- | :------------- | :------------- |
| placeholder	| string	| 普通模糊查询域的输入提示| |
| ok-text	| string	| 高级查询域确定按钮的定制显示文本	| ok|
| reset-text	| string	| 高级查询域重置的定制显示文本	| reset|

*事件* :  

| 事件名     | 参数     | 描述     |
| :------------- | :------------- | :------------- |
| query	| value	| 点击查询图标的回调方法| 
| advanceQuery| 		| 点击高级查询域的确定的回调方法|
