---
title: OnPlayerDeath
sidebar_label: OnPlayerDeath
description: 当玩家死亡时触发该回调（自杀或被其他玩家击杀）
tags: ["玩家"]
---

## 描述

当玩家死亡时触发该回调，包括以下情况：

- 自杀
- 被其他玩家击杀

| 参数          | 说明                                             |
| ------------- | ------------------------------------------------ |
| playerid      | 死亡的玩家ID                                     |
| killerid      | 凶手玩家ID（若无凶手则为INVALID_PLAYER_ID）      |
| WEAPON:reason | 死亡原因（对应[武器ID](../resources/weaponids)） |

## 返回值

0 - 阻止其他滤镜脚本接收此回调  
1 - 允许传递给后续滤镜脚本

该回调在滤镜脚本中总是优先触发。

## 示例

```c
new PlayerDeaths[MAX_PLAYERS];
new PlayerKills[MAX_PLAYERS];

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason); // 在击杀feed中显示击杀信息

    // 使用前必须验证killerid有效性
    if (killerid != INVALID_PLAYER_ID)
    {
        PlayerKills[killerid]++;
    }

    // 处理死亡玩家数据（playerid始终有效）
    PlayerDeaths[playerid]++;
    return 1;
}
```

## 注意

:::tip

特殊原因ID说明：

- 火焰伤害（如燃烧瓶/武器18）会返回37（火焰喷射器ID）
- 爆炸伤害（如RPG/手雷）会返回51  
  [SendDeathMessage](../functions/SendDeathMessage)函数可直接使用INVALID_PLAYER_ID作为参数  
  只有实际死亡的玩家会触发此回调（可用于反伪造死亡检测）

:::

:::warning

必须在使用killerid前检查有效性：

- INVALID_PLAYER_ID定义为65535
- 若数组大小为MAX_PLAYERS（默认500），访问索引65535将导致数组越界错误
- 可能引发OnPlayerDeath脚本崩溃（不会影响整个服务端）

:::

## 相关回调

以下回调可能与当前回调存在关联：

- [OnPlayerSpawn](OnPlayerSpawn)：当玩家重生时触发

## 相关函数

以下函数可能与当前回调相关：

- [SendDeathMessage](../functions/SendDeathMessage)：向击杀列表添加记录
- [SetPlayerHealth](../functions/SetPlayerHealth)：设置玩家生命值

## 相关资源

- [武器ID对照表](../resources/weaponids)
