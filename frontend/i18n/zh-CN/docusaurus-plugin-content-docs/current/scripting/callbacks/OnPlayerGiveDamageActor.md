---
title: OnPlayerGiveDamageActor
sidebar_label: OnPlayerGiveDamageActor
description: 当玩家对演员造成伤害时触发此回调函数。
tags: ["玩家", 演员]
---

<VersionWarnZH_CN name='回调' version='SA-MP 0.3.7' />

## 描述

当玩家对演员造成伤害时触发此回调函数。

| 参数            | 说明                                       |
| --------------- | ------------------------------------------ |
| playerid        | 造成伤害的玩家ID                           |
| damaged_actorid | 受到伤害的演员ID                           |
| Float:amount    | 损失的生命值/护甲值（单位：浮点数）        |
| WEAPON:weaponid | 造成伤害的武器类型                         |
| bodypart        | 被击中的[身体部位](../resources/bodyparts) |

## 返回值

1 - 阻止其他滤镜脚本接收此回调

0 - 允许将此回调传递给其他滤镜脚本

此回调始终在滤镜脚本中优先触发，返回1将阻止其他滤镜脚本处理

## 示例

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128];
    new attackerName[MAX_PLAYER_NAME];
    new weaponName[24];

    GetPlayerName(playerid, attackerName, sizeof (attackerName));
    GetWeaponName(weaponid, weaponName, sizeof (weaponName));

    format(string, sizeof(string), "%s 对演员ID %d 造成了 %.0f 点伤害，武器：%s", attackerName, damaged_actorid, amount, weaponName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## 注意事项

:::tip

若演员设置为无敌状态（默认状态），此回调不会被触发。详见[SetActorInvulnerable](../functions/SetActorInvulnerable)。

:::

## 相关回调

以下回调函数可能与此回调相关：

- [OnActorStreamOut](OnActorStreamOut): 当演员被玩家客户端流卸载时触发
- [OnActorStreamIn](OnActorStreamOut): 当演员被玩家客户端流加载时触发

## 相关函数

以下函数可能与此回调函数相关：

- [CreateActor](../functions/CreateActor): 创建演员（静态NPC）
- [SetActorInvulnerable](../functions/SetActorInvulnerable): 设置演员无敌状态
- [SetActorHealth](../functions/SetActorHealth): 设置演员生命值
- [GetActorHealth](../functions/GetActorHealth): 获取演员生命值
- [IsActorInvulnerable](../functions/IsActorInvulnerable): 检测演员是否无敌
- [IsValidActor](../functions/IsValidActor): 验证演员ID有效性

## 相关资源

- [身体部位列表](../resources/bodyparts)
