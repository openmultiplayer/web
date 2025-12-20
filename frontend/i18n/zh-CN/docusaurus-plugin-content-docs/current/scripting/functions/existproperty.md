---
title: existproperty
sidebar_label: existproperty
description: 检查属性是否存在。
tags: ["核心", "属性"]
---

<LowercaseNoteZH_CN />

## 描述

检查指定属性是否存在。

| 参数   | 说明                                                   |
| ------ | ------------------------------------------------------ |
| id     | 使用的虚拟机 ID，应保持为 0 _(可选=0)_                 |
| name[] | 属性名称，应保持为空字符串 ""                          |
| value  | 属性唯一 ID。使用哈希函数从字符串生成 _(可选=cellmin)_ |

## 返回值

如果属性存在返回 true，否则返回 false。

## 示例

```c
if (existproperty(0, "", 123984334))
{
    // 属性存在，执行相应操作
}
```

## 注意事项

:::tip

由于性能较低，建议使用 PVars/SVars 或 GVar 插件替代此原生函数

:::

## 相关函数

- [setproperty](setproperty): 设置属性值
- [getproperty](getproperty): 获取属性值
- [deleteproperty](deleteproperty): 删除属性
