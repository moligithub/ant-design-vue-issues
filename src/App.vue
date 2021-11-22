<script setup lang="ts">
import { Test } from '@/components'

</script>
<template>
  <test />
</template>

<style>
body,
html {
  overflow: hidden;
  font-size: 16px;
}

#app {
  overflow: hidden;
  font-family: pingfang SC, helvetica neue, arial, hiragino sans gb,
    microsoft yahei ui, microsoft yahei, simsun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f5f5f5;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #c8c8c8;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
}
</style>
