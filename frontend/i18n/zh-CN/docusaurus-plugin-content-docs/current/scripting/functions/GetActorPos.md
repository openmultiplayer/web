---
title: GetActorPos
sidebar_label: GetActorPos
description: 获取演员的坐标位置。
tags: ["演员"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取演员的坐标位置。

| 参数     | 说明                                                        |
| -------- | ----------------------------------------------------------- |
| actorid  | 要获取坐标的演员 ID（由[CreateActor](CreateActor)创建返回） |
| &Float:x | 浮点变量（引用传递），用于存储演员的 X 轴坐标               |
| &Float:y | 浮点变量（引用传递），用于存储演员的 Y 轴坐标               |
| &Float:z | 浮点变量（引用传递），用于存储演员的 Z 轴坐标               |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定演员不存在）

演员的坐标将被存储到指定变量中。

## 示例代码

```c
new Float:x, Float:y, Float:z;
GetActorPos(actorid, x, y, z);
```

## 相关函数

- [SetActorPos](SetActorPos): 设置演员的坐标位置
