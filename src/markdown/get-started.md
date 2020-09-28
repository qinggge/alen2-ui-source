# 开始使用
  
请先[安装](#/doc/install)本组件库。  
  
然后在你的项目中写入下面的代码。  
  
```javascript
import { Button, Tabs, Switch, Dialog } from alen2-ui
```  
  
就可以使用我提供的组件了。  
http
## Vue 单文件组件
  
代码示例：  
  
```vue
<template>
  <div><Button>按钮</Button></div>
</template>
<script>
  import { Button } from 'alen2-ui'
  export default {
    components: { Button },
  }
</script>
```