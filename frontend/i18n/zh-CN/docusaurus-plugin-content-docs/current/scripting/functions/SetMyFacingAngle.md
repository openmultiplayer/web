---
title: SetMyFacingAngle
sidebar_label: SetMyFacingAngle
description: 设置NPC的朝向角度。
tags: []
---

## 描述

设置 NPC 的朝向角度。

| 参数名    | 描述                         |
| --------- | ---------------------------- |
| Float:ang | 要设置的朝向角度值（浮点数） |

## 示例代码

```c
SetMyFacingAngle(0); // NPC面朝北方
```

```c
       北 (0)
          |
(90) 西 - - 东 (270)
          |
       南 (180)
```

## 相关函数

- [GetMyFacingAngle](GetMyFacingAngle): 获取 NPC 的朝向角度
