---
title: setproperty
sidebar_label: setproperty
description: 添加新属性或修改现有属性。
tags: ["核心功能", "属性"]
---

<LowercaseNoteZH_CN />

## 描述

添加新属性或修改现有属性。

| 参数名   | 描述                                                                                                |
| -------- | --------------------------------------------------------------------------------------------------- |
| id       | 虚拟机标识符（应保持默认值 0）_(optional=0)_                                                        |
| name[]   | 与 value 参数配合使用存储整型数据，存储字符串时无需使用                                             |
| value    | 存储的整型数值，或存储字符串时使用的属性唯一 ID（可通过哈希函数计算字符串生成）_(optional=cellmin)_ |
| string[] | 字符串类型的属性值，存储整型时无需使用                                                              |

## 返回值

本函数没有返回值。

## 示例

```c
setproperty(.name = "MyInteger", .value = 42);

new value = getproperty(.name = "MyInteger");
printf("存储的整数值为: %d", value);
setproperty(0, "", 123984334, ":)");

new value[4];
getproperty(0, "", 123984334, value);
strunpack(value, value, sizeof(value)); // 需要先解压字符串
print(value);

// 应该打印 :)
setproperty(.value = 123984334, .string = ":)");

// 其余操作与上述示例相同
```

## 重要说明

:::tip

建议使用 PVars/SVars 或 GVar 插件替代此原生函数，因其执行效率较低。

:::

## 相关函数

- [getproperty](getproperty): 获取属性值
- [deleteproperty](deleteproperty): 删除属性
- [existproperty](existproperty): 检查属性是否存在
