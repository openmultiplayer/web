---
title: SendDeathMessage
sidebar_label: SendDeathMessage
description: 在全屏右侧的击杀信息栏添加死亡记录
tags: []
---

## 描述

在全屏右侧的击杀信息栏添加死亡记录。

| 参数名 | 说明                                                                                            |
| ------ | ----------------------------------------------------------------------------------------------- |
| killer | 凶手玩家 ID（可使用 INVALID_PLAYER_ID 表示无凶手）                                              |
| killee | 死亡玩家的 ID                                                                                   |
| weapon | 死亡原因（不一定是武器 ID），可使用特殊图标（ICON_CONNECT 连接图标和 ICON_DISCONNECT 断开图标） |

## 返回值

该函数始终返回**true**，即使执行失败

当玩家 ID 无效时，函数不会显示死亡信息

当死亡原因无效时，会显示默认骷髅交叉骨图标

killerid 为无效值（`INVALID_PLAYER_ID`）是有效参数

## 示例代码

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason); // 在玩家死亡时自动发送死亡信息
    return 1;
}
```

## 注意事项

:::tip

- 使用未连接的有效玩家 ID 可以清除死亡信息
- 需向单个玩家显示死亡信息时请使用[SendDeathMessageToPlayer](SendDeathMessageToPlayer)
- 可通过 NPC 创建自定义死亡原因

:::

## 相关函数

- [SendDeathMessageToPlayer](SendDeathMessageToPlayer): 向指定玩家发送死亡信息

## 相关回调

- [OnPlayerDeath](../callbacks/OnPlayerDeath): 当玩家死亡时触发

## 相关资源

- [武器 ID 与死亡原因列表](../resources/weaponids)
