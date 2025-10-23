---
title: OnPlayerSpawn
sidebar_label: OnPlayerSpawn
description: 当玩家生成时触发该回调函数。
tags: ["玩家"]
---

## 描述

当玩家生成时触发该回调函数（例如调用 [SpawnPlayer](../functions/SpawnPlayer) 函数之后）。

| 参数名   | 说明           |
| -------- | -------------- |
| playerid | 已生成玩家的ID |

## 返回值

0 - 阻止其他滤镜脚本接收此回调。

1 - 表示此回调将继续传递给下一个滤镜脚本。

该回调始终在滤镜脚本中优先触发。

## 示例

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));

    new string[64];
    format(string, sizeof(string), "%s 已成功生成。", PlayerName);

    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## 注意事项

:::tip

在圣安地列斯原版中，玩家死亡时会自动扣除$100作为医院费用。SA:MP 保留了这个机制，但 open.mp 移除了该功能以便脚本自主管理金钱。许多脚本通过在玩家死亡后或生成时添加$100来修复这个问题。如果这是您的脚本，建议删除额外的修复代码（尽管 open.mp 的代码已尝试兼容这类脚本）。如果您的脚本依赖此功能，请在 [OnPlayerDeath](OnPlayerDeath) 中添加以下代码：

```c
GivePlayerMoney(playerid, -100);
```

:::

## 相关回调

以下回调可能与该回调存在关联：

- [OnPlayerDeath](OnPlayerDeath): 当玩家死亡时触发
- [OnVehicleSpawn](OnVehicleSpawn): 当车辆重新生成时触发

## 相关函数

以下函数可能与该回调存在关联：

- [SpawnPlayer](../functions/SpawnPlayer): 强制玩家生成
- [AddPlayerClass](../functions/AddPlayerClass): 添加玩家职业
- [SetSpawnInfo](../functions/SetSpawnInfo): 设置玩家生成信息
