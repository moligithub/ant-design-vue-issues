<script setup lang="ts">
import { TreeSelect } from 'ant-design-vue'

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

const fieldNames = { label: "name", value: 'id', children: 'children' };
</script>
<template>
  <TreeSelect style="width: 280px; margin: 30px;" :treeData="treeData" @change="change" :fieldNames="fieldNames" />
</template>