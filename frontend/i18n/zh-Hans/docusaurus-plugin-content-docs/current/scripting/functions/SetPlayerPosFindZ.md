---
title: SetPlayerPosFindZ
sidebar_label: SetPlayerPosFindZ
description: 设置玩家坐标并自动寻找地面高度。
tags: ["玩家"]
---

## 描述

设置玩家坐标后，自动将玩家的 Z 轴坐标调整至该位置下方最近的实体地面高度。

| 参数名   | 说明                                      |
| -------- | ----------------------------------------- |
| playerid | 需要设置坐标的玩家 ID                     |
| Float:x  | 玩家所处的 X 坐标                         |
| Float:y  | 玩家所处的 Y 坐标                         |
| Float:z  | 玩家所处的初始 Z 坐标（将自动校准到地面） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（通常表示指定玩家不存在）

## 示例代码

```c
SetPlayerPosFindZ(playerid, 1234.5, 1234.5, 1000.0);
```

## 注意事项

:::warning

当新坐标距离玩家当前位置过远时，此函数可能失效。此时 Z 轴高度会被设为 0，可能导致玩家陷入地下。建议改用 [MapAndreas](https://github.com/philip1337/samp-plugin-mapandreas) 或 [ColAndreas](https://github.com/Pottus/ColAndreas) 插件进行地面高度检测。

:::

## 相关函数

- [SetPlayerPos](SetPlayerPos): 直接设置玩家三维坐标

## 相关回调

- [OnPlayerClickMap](../callbacks/OnPlayerClickMap): 当玩家在暂停菜单地图上设置路径点时触发
