---
title: SetPlayerMapIcon
sidebar_label: SetPlayerMapIcon
description: 在玩家地图上放置图标/标记。
tags: ["玩家"]
---

## 描述

在玩家地图上放置图标/标记。可用于标记银行、医院等重要位置。

| 参数名        | 说明                                                                                           |
| ------------- | ---------------------------------------------------------------------------------------------- |
| playerid      | 目标玩家 ID                                                                                    |
| iconid        | 图标 ID（0-99），单个玩家最多 100 个图标。可通过[RemovePlayerMapIcon](RemovePlayerMapIcon)移除 |
| Float:x       | 图标 X 坐标                                                                                    |
| Float:y       | 图标 Y 坐标                                                                                    |
| Float:z       | 图标 Z 坐标                                                                                    |
| markerType    | 要设置的[图标类型](../resources/mapicons)                                                      |
| colour        | 图标颜色（RGBA 格式整数或十六进制），仅适用于方形图标（ID:0）                                  |
| MAPICON:style | 图标[显示样式](../resources/mapiconstyles)                                                     |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家未连接）

## 示例代码

```c
public OnPlayerConnect(playerid)
{
    // 在拉斯维加斯的24/7商店顶部创建美元图标
    // 新玩家连接时显示取款位置
    SetPlayerMapIcon(playerid, 12, 2204.9468, 1986.2877, 16.7380, 52, 0, MAPICON_LOCAL);
}
```

## 注意事项

:::tip

- 使用无效图标类型将默认显示 ID1 白方块 ![](https://assets.open.mp/assets/images/mapIcons/icon1.gif)
- 重复使用相同图标 ID 会覆盖已有图标

:::

:::warning

- 突破 100 图标限制需使用[streamer 插件](https://github.com/samp-incognito/samp-streamer-plugin)
- 启用地图图例时，类型 1/2/4/56 图标会导致游戏崩溃

:::

## 相关函数

- [RemovePlayerMapIcon](RemovePlayerMapIcon): 移除指定地图图标
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): 设置玩家标记

## 相关资源

- [地图图标列表](../resources/mapicons): 可用图标类型参考
- [图标样式列表](../resources/mapiconstyles): 图标显示样式说明
