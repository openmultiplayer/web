---
title: getproperty
sidebar_label: getproperty
description: 从内存中获取特定属性，返回的字符串为打包格式
tags: ["核心", "属性"]
---

<LowercaseNoteZH_CN />

## 描述

从内存中获取特定属性，返回的字符串为打包格式（需使用 strunpack 解包）

| 名称     | 说明                                                           |
| -------- | -------------------------------------------------------------- |
| id       | 使用的虚拟机 ID（应始终保留为 0） _(可选参数=0)_               |
| name[]   | 属性名称（应保留为空字符串）                                   |
| value    | 属性唯一 ID（可通过哈希函数从字符串生成） _(可选参数=cellmin)_ |
| string[] | 存储结果的字符数组（引用传递）                                 |

## 返回值

通过名称查询时返回属性值，通过 ID 查询时填充字符串参数。若属性不存在则返回 0

## 示例代码

```c
new value[16];

// 通过ID 123984334查询属性值
getproperty(0, "", 123984334, value);

// 解包压缩字符串
strunpack(value, value, sizeof(value));

// 输出结果
print(value);
```

## 注意事项

:::tip

建议使用 PVars/SVars 或 GVar 插件替代此原生函数，因其执行效率较低

:::

## 相关函数

- [setproperty](setproperty): 设置属性值
- [deleteproperty](deleteproperty): 删除指定属性
- [existproperty](existproperty): 检测属性是否存在
