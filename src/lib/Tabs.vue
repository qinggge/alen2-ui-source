<template>
<div class="alen-tabs">
  <div class="alen-tabs-nav">
    <div
      class="alen-tabs-nav-item"
      v-for="(t,index) in titles"
      :key="index"
      :class="{selected: t === selected}"
      @click="select(t)"
    >{{t}}</div>
    <div class="alen-tabs-nav-indicator"></div>
  </div>
  <div class="alen-tabs-content">
    <component class="alen-tabs-content-item"
    :class="{selected: c.props.title === selected}"
    v-for="c in defaults" :is="c" :key="c"/>
  </div>
</div>
</template>

<script lang="ts">
import { computed } from 'vue';
import Tab from './Tab.vue';
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    });
    const current = computed(() => {
      console.log('重新return');
      
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return {
      defaults, titles, current, select,
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.alen-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  } 

  &-indicator {
    position: absolute;
    height: 3px;
    background: $blue;
    left: 0;
    bottom: -1px;
    width: 100px;
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;
      
      &.selected {
        display: block;
      }
    }
  }
}
</style>