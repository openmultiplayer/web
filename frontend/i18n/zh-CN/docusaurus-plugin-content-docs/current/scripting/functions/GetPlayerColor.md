---
title: GetPlayerColor
sidebar_label: GetPlayerColor
description: 获取玩家昵称颜色及雷达标记颜色
tags: ["玩家"]
---

## 描述

获取玩家昵称及雷达标记的显示颜色（仅在调用 SetPlayerColor 后生效）

| 参数名   | 说明                  |
| -------- | --------------------- |
| playerid | 需要获取颜色的玩家 ID |

## 返回值

玩家的颜色值（若未设置颜色或玩家未连接则返回 0）

## 示例代码

```c
SendClientMessage(playerid, GetPlayerColor(playerid), "本条消息将使用你的专属颜色 :)");

new output[144];
format(output, sizeof(output), "可通过{%06x}格式代码嵌入玩家颜色！", GetPlayerColor(playerid) >>> 8);
SendClientMessage(playerid, -1, output);
// 消息将以白色显示，其中'嵌入颜色'部分使用玩家颜色
```

## 注意事项

:::warning

若未预先调用 SetPlayerColor 设置颜色，此函数将返回 0。点击[此处](../../tutorials/colorfix)查看修复方法

:::

## 相关函数

- [SetPlayerColor](SetPlayerColor): 设置玩家颜色
- [ChangeVehicleColor](ChangeVehicleColor): 修改车辆颜色
