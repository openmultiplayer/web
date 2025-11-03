---
title: GetCustomModelPath
sidebar_label: GetCustomModelPath
description: 获取自定义模型的DFF/TXD文件路径。
tags: ["自定义模型", "自定义皮肤", "简单模型"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定自定义模型的资源文件路径信息。

| 参数名    | 说明                                        |
| --------- | ------------------------------------------- |
| modelid   | 要查询的自定义模型 ID                       |
| dffPath[] | 数组变量（引用传递），用于存储 DFF 文件路径 |
| dffSize   | DFF 路径存储数组的长度                      |
| txdPath[] | 数组变量（引用传递），用于存储 TXD 文件路径 |
| txdSize   | TXD 路径存储数组的长度                      |

## 示例代码

```c
new
    modelid = -2000,  // 自定义模型ID
    dffPath[64],      // DFF路径存储数组
    txdPath[64];      // TXD路径存储数组

GetCustomModelPath(modelid, dffPath, sizeof(dffPath), txdPath, sizeof(txdPath));

printf("[ID %d 自定义模型路径]\n\
    DFF文件: %s\n\
    TXD文件: %s",
    modelid, dffPath, txdPath);  // 输出路径信息
```

## 相关函数

- [AddSimpleModel](AddSimpleModel): 添加新的简单物体模型
- [AddSimpleModelTimed](AddSimpleModelTimed): 添加带时间限制的简单物体模型
- [IsValidCustomModel](IsValidCustomModel): 验证自定义模型 ID 是否有效
