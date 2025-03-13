---
title: OnPlayerClickPlayer
sidebar_label: OnPlayerClickPlayer
description: 当玩家在记分牌上双击其他玩家时触发该回调
tags: ["玩家"]
---

## 描述

当玩家在记分牌上双击其他玩家时触发该回调。

| 参数            | 说明                                                      |
| --------------- | --------------------------------------------------------- |
| playerid        | 触发点击操作的玩家ID                                      |
| clickedplayerid | 被点击的玩家ID                                            |
| source          | 点击来源（参见[点击来源](../resources/clicksources)文档） |

## 返回值

1 - 阻止其他滤镜脚本接收此回调  
0 - 允许传递给后续滤镜脚本

该回调在滤镜脚本中总是优先触发。

## 示例

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, CLICK_SOURCE:source)
{
    new string[32];
    format(string, sizeof(string), "您点击了玩家 %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 注意

:::tip

当前仅支持一个来源类型（0 - `CLICK_SOURCE_SCOREBOARD`表示记分牌点击）  
参数设计为未来扩展更多点击来源类型预留了支持空间

:::

## 相关回调

以下回调可能与当前回调存在关联：

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw)：当玩家点击文本绘图时触发

## 相关资源

- [点击来源类型](../resources/clicksources)
