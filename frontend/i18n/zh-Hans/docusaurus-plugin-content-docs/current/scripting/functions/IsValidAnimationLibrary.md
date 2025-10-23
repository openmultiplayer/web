---
title: IsValidAnimationLibrary
sidebar_label: IsValidAnimationLibrary
description: 检测指定动画库是否有效。
tags: ["动画"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测给定动画库名称是否有效。

| 参数名       | 说明               |
| ------------ | ------------------ |
| const name[] | 待检测的动画库名称 |

## 返回值

当动画库有效时返回 **true**，否则返回 **false**

## 示例代码

```c
if (IsValidAnimationLibrary("PED"))
{
    // 动画库有效
}
else
{
    // 动画库无效
}
```

## 相关函数

- [ApplyAnimation](ApplyAnimation): 为玩家应用动画效果

## 相关资源

- [动画资源](../resources/animations)
