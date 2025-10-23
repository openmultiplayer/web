---
title: deleteproperty
sidebar_label: deleteproperty
description: 删除先前设置的属性（setproperty）。
tags: ["核心", "属性"]
---

<LowercaseNoteZH_CN />

## 描述

删除先前设置的属性（[setproperty](setproperty)）。

| 参数名 | 说明                                                              |
| ------ | ----------------------------------------------------------------- |
| id     | 使用的虚拟机 ID。应保持该值为零。_(optional=0)_                   |
| name[] | 属性名称，应保持为空字符串（""）。                                |
| value  | 属性的唯一 ID。使用哈希函数从字符串计算得出。_(optional=cellmin)_ |

## 返回值

属性的值。若属性不存在则返回 0。

## 示例

```c
deleteproperty(0, "", 123984334);
```

## 注意事项

:::tip

建议使用 PVars/SVars 或 GVar 插件替代此原生函数，因其执行效率较低。

:::

## 相关函数

- [setproperty](setproperty): 设置属性值
- [getproperty](getproperty): 获取属性值
- [existproperty](existproperty): 检查属性是否存在
