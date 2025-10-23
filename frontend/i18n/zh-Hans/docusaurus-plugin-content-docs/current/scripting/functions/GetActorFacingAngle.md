---
title: GetActorFacingAngle
sidebar_label: GetActorFacingAngle
description: 获取角色的朝向角度。
tags: ["角色"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取角色的朝向角度。

| 参数名       | 说明                                                            |
| ------------ | --------------------------------------------------------------- |
| actorid      | 要获取朝向角度的角色 ID（由[CreateActor](CreateActor)创建返回） |
| &Float:angle | 浮点变量（引用传递），用于存储角色的朝向角度                    |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定角色不存在）

角色的朝向角度将被存储到指定变量中。

## 示例代码

```c
new Float:facingAngle;
GetActorFacingAngle(actorid, facingAngle);
```

## 相关函数

- [SetActorFacingAngle](SetActorFacingAngle): 设置角色的朝向角度
- [GetActorPos](GetActorPos): 获取角色的坐标位置
