---
title: AreInteriorWeaponsAllowed
sidebar_label: AreInteriorWeaponsAllowed
description: 检测是否允许在室内场景使用武器
tags: []
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测当前服务器是否允许在室内场景使用武器。

## 返回值

true：允许使用武器

false：禁止使用武器

## 示例

```c
if (AreInteriorWeaponsAllowed())
{
    // 执行与室内武器相关的操作
}
```

## 相关函数

- [AllowInteriorWeapons](AllowInteriorWeapons): 控制室内武器使用权限开关
