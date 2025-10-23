---
title: AreAllAnimationsEnabled
sidebar_label: AreAllAnimationsEnabled
description: 检测是否已启用某些版本缺失的动画支持
tags: ["动画"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测是否已启用某些版本缺失的动画支持功能。

## 返回值

true：已启用缺失动画支持

false：未启用缺失动画支持

## 示例

```c
if (AreAllAnimationsEnabled())
{
    // 执行相关动画操作
}
```

## 相关函数

- [EnableAllAnimations](EnableAllAnimations): 启用缺失版本动画支持
- [ApplyAnimation](ApplyAnimation): 为玩家应用动画效果
- [ClearAnimations](ClearAnimations): 清除玩家当前动画

## 相关资源

- [动画资源列表](../resources/animations)
