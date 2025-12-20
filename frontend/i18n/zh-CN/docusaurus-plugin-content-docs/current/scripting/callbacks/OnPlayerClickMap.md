---
title: OnPlayerClickMap
sidebar_label: OnPlayerClickMap
description: 当玩家在暂停菜单地图上右键点击放置目标/路径点时触发此回调
tags: ["玩家"]
---

## 描述

当玩家在暂停菜单地图上右键点击放置目标/路径点时触发此回调。

| 参数     | 说明                                  |
| -------- | ------------------------------------- |
| playerid | 放置目标/路径点的玩家ID               |
| Float:fX | 玩家点击位置的X坐标（浮点数）         |
| Float:fY | 玩家点击位置的Y坐标（浮点数）         |
| Float:fZ | 玩家点击位置的Z坐标（浮点数，不精确） |

## 返回值

1 - 阻止其他滤镜脚本接收此回调  
0 - 允许传递给后续滤镜脚本

此回调在游戏模式中总是优先触发。

## 示例

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## 注意

:::tip

此回调仅在玩家通过点击地图标记目标时触发，按键操作不会触发。若点击位置距离玩家过远，返回的Z坐标将为0（无效值），建议使用[MapAndreas](https://github.com/philip1337/samp-plugin-mapandreas)或[ColAndreas](https://github.com/Pottus/ColAndreas)插件获取精确Z坐标

:::

## 相关函数

以下函数可能与当前回调相关：

- [GetPlayerPos](../functions/GetPlayerPos)：获取玩家当前位置
- [SetPlayerPos](../functions/SetPlayerPos)：设置玩家位置
- [SetPlayerPosFindZ](../functions/SetPlayerPosFindZ)：设置玩家位置并自动获取地面高度
