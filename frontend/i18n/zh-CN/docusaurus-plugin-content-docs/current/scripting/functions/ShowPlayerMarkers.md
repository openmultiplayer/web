---
title: ShowPlayerMarkers
sidebar_label: ShowPlayerMarkers
description: 切换玩家雷达标记（小地图上的光点显示状态）。
tags: ["玩家"]
---

## 描述

切换玩家雷达标记（小地图上的光点显示状态）。必须在服务器启动时调用（OnGameModeInit 回调中）。如需运行时控制，请使用[SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer)。

| 参数名称                 | 说明                                                                             |
| ------------------------ | -------------------------------------------------------------------------------- |
| PLAYER_MARKERS_MODE:mode | 使用的[标记模式](../resources/markermodes)。支持流式加载模式，仅对附近玩家可见。 |

## 返回值

本函数不返回特定值。

## 示例代码

```c
public OnGameModeInit()
{
    // 玩家标记仅对附近玩家可见
    ShowPlayerMarkers(PLAYER_MARKERS_MODE_STREAMED);
}
```

## 标记模式对照表

| ID  | 模式标识符                               |
| --- | ---------------------------------------- |
| 0   | PLAYER_MARKERS_MODE_OFF（禁用标记）      |
| 1   | PLAYER_MARKERS_MODE_GLOBAL（全局显示）   |
| 2   | PLAYER_MARKERS_MODE_STREAMED（流式加载） |

## 注意事项

:::tip

通过设置玩家颜色为完全透明（无 Alpha 通道值），可实现按玩家单独控制标记显示。此方法支持基于玩家的个性化标记显示方案。

:::

## 相关函数

- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): 为指定玩家设置标记显示
- [LimitPlayerMarkerRadius](LimitPlayerMarkerRadius): 限制玩家标记可见范围
- [ShowNameTags](ShowNameTags): 控制玩家名牌显示
- [SetPlayerColor](SetPlayerColor): 设置玩家标识颜色

## 相关资源

- [标记模式说明](../resources/markermodes)
