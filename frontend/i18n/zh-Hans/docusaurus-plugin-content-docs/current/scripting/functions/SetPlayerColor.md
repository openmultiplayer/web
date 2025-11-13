---
title: SetPlayerColor
sidebar_label: SetPlayerColor
description: 设置玩家的名牌和地图标记（雷达点）颜色
tags: ["玩家"]
---

## 描述

设置玩家的名牌和地图标记（雷达点）颜色

| 参数名   | 说明                             |
| -------- | -------------------------------- |
| playerid | 要设置颜色的玩家 ID              |
| colour   | 要设置的颜色值（支持透明度通道） |

## 返回值

本函数没有特定返回值

## 示例

```c
// 红色，使用十六进制表示：
SetPlayerColor(playerid, 0xFF0000FF);

// 红色，使用十进制表示：
SetPlayerColor(playerid, 4278190335);
```

## 注意事项

:::tip

- 本函数将全局修改玩家颜色，即使其他玩家通过 SetPlayerMarkerForPlayer 设置了不同颜色
- 在 OnPlayerConnect 回调中使用时，被设置玩家在 TAB 列表中将看不到颜色变化

:::

## 相关函数

- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): 设置指定玩家可见的标记颜色
- [GetPlayerColor](GetPlayerColor): 获取玩家当前颜色
- [ChangeVehicleColor](ChangeVehicleColor): 设置车辆颜色

## 相关资源

- [颜色代码表](../resources/colorslist)
