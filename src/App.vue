<script setup lang="ts">
const treeData = [
  {
    id: '1001',
    name: '第一级目录',
  },
  {
    id: '1002',
    name: '第二级目录',
  },
  {
    id: '1003',
    name: '第三级目录',
  }
]

const change = (value: any, label: any, extra: any) => {
  console.log(value)
  console.log(label)
  console.log(extra)
}

const fielaNames = { label: "name", value: 'id', children: 'children' };
</script>
<template>
  <TreeSelect :treeData="treeData" @change="change" :fielaNames="fielaNames" />
</template>