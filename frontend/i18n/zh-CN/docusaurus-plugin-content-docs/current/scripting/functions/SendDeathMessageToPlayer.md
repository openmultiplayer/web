---
title: SendDeathMessageToPlayer
sidebar_label: SendDeathMessageToPlayer
description: 向指定玩家屏幕右侧的击杀信息栏添加死亡记录
tags: ["玩家"]
---

## 描述

向指定玩家屏幕右侧的击杀信息栏添加死亡记录

| 参数名   | 说明                                                                                            |
| -------- | ----------------------------------------------------------------------------------------------- |
| playerid | 接收死亡信息的玩家 ID                                                                           |
| killer   | 凶手玩家 ID（可使用 INVALID_PLAYER_ID 表示无凶手）                                              |
| killee   | 死亡玩家的 ID                                                                                   |
| weapon   | 死亡原因（不一定是武器 ID），可使用特殊图标（ICON_CONNECT 连接图标和 ICON_DISCONNECT 断开图标） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（通常由无效玩家 ID 导致）

## 示例代码

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // 向"playerid"发送死亡信息，显示"killerid"因"reason"击杀了"playerid"
    SendDeathMessageToPlayer(playerid, killerid, playerid, reason);

    return 1;
}
```

## 相关函数

- [SendDeathMessage](SendDeathMessage): 向全体玩家广播死亡信息

## 相关回调

- [OnPlayerDeath](../callbacks/OnPlayerDeath): 当玩家死亡时触发
