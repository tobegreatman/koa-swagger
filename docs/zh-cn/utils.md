### 公共方法 ：

  *isValueChanged* - 值变更检测

    /**
    * 检测值是否已变更
    * @param ctn: 初始化范围，默认document
    * @return boolean: true-有变动、 false-无变动
    **/
    function isValueChanged(ctn){
      ctn = ctn || document;
      var isChanged = false;
      $(':input',$(ctn)).each(function(idx,domItem){
        var originalValue;
        if(domItem.attributes.value) originalValue = domItem.attributes.value.value;
        if(domItem.value != originalValue) isChanged = true;
      });
      return isChanged;
    }

    该方法有一个前提初始化脚本要求先执行（在输入域完成初始值设置之后执行），如下：
    /**
    * 初始化初始值
    * @param ctn: 初始化范围，默认document
    **/
    function initInputs(ctn){
      ctn = ctn || document;
      $(':input',$(ctn)).each(function(idx,domItem){
        domItem.setAttribute('value',domItem.value);
      });
    }

    以easyui组件为例，在完成初始值设置之后执行，如下：
    $.parser.onComplete=function(context){
      initInputs(context);
    }

  *isFormChanged* - 表单值变动

    /**
    * 表单值改变判断
    * @param form: 表单组件的实例引用
    **/
    function  isFormChanged(form){
        var isChanged = false;
        form.fields.map(function(field){
          if(Array.isArray(field.fieldValue)){
            var val = field.fieldValue.sort().join(' '),
                orVal = field.initialValue.sort().join(' ');
            if(val != orVal) isChanged = true;
          }else{
            if(isNull(field.fieldValue) && isNull(field.initialValue)) {
            }else if(field.fieldValue != field.initialValue) isChanged = true;
          }
        });
        return isChanged;

        function isNull(val){
          if(val == undefined || val == null || val == "") return true;
          else return false;
        }
     }
