# 开始使用
  
请先[安装](#/doc/install)本组件库。  
  
然后在你的项目中写入下面的代码。  
  
```javascript
import { Button, Tabs, Tab, Switch, Dialog, openDialog } from 'alen-ui-1'
```  
  
就可以使用我提供的组件了。  

注意：文档中库的引入是  

```javascript
import { xxx } from '../lib/index' 
```  
  
此举动是为了演示的方便，请在项目中引入时使用 `from 'alen-ui-1'` 这种形式。


## Vue 单文件组件
  
代码示例：  
  
```vue
<template>
  <div><Button>按钮</Button></div>
</template>
<script>
  import { Button } from 'alen-ui-1'
  export default {
    components: { Button },
  }
</script>
```