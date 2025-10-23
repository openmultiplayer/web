---
title: IsValidCustomModel
sidebar_label: IsValidCustomModel
description: 检测自定义模型ID是否有效。
tags: ["自定义模型", "自定义皮肤", "简单模型"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定的自定义模型 ID 是否有效。

| 参数名  | 说明                  |
| ------- | --------------------- |
| modelid | 要检测的自定义模型 ID |

## 返回值

**true** - 自定义模型 ID 有效

**false** - 自定义模型 ID 无效

## 相关函数

- [AddSimpleModel](AddSimpleModel): 添加新的自定义简单物体模型
- [AddSimpleModelTimed](AddSimpleModelTimed): 添加带时限的自定义简单物体模型
- [GetCustomModelPath](GetCustomModelPath): 获取自定义模型文件路径
