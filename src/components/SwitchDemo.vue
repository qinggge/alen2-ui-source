<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="SwitchDemo1" />
    <Demo :component="SwitchDemo2" />
  </div>
</template>
<script lang="ts">
import SwitchDemo1 from './SwitchDemo1.vue'
import SwitchDemo2 from './SwitchDemo2.vue'
import Demo from './Demo.vue'

import { ref } from 'vue'
export default {
  components: {
    SwitchDemo1,
    SwitchDemo2,
    Demo,
  },
  setup() {
    const bool = ref(false);
    return {
      bool, SwitchDemo1, SwitchDemo2,
    }
  }
}
</script>