---
title: CreateActor
sidebar_label: CreateActor
description: 在游戏世界中创建静态演员实体。
tags: ["演员"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

创建具有基础功能的静态演员实体。该实体类似 NPC 但功能受限，不会占用服务器玩家槽位。

| 参数        | 说明                                        |
| ----------- | ------------------------------------------- |
| skin        | 演员使用的[皮肤模型 ID](../resources/skins) |
| Float:x     | 生成坐标 X 轴值                             |
| Float:y     | 生成坐标 Y 轴值                             |
| Float:z     | 生成坐标 Z 轴值                             |
| Float:angle | 演员初始朝向角度（单位：度）                |

## 返回值

成功返回演员 ID（从 0 开始计数），当达到演员数量上限（1000）时返回 INVALID_ACTOR_ID（65535）。

## 应用示例

```c
new gActorCJ;

public OnGameModeInit()
{
    // 在蓝莓镇（地图中心）创建CJ演员
    gActorCJ = CreateActor(0, 0.0, 0.0, 3.0, 0.0);
}

public OnGameModeExit()
{
    // 销毁已创建的演员
    DestroyActor(gActorCJ);
}
```

## 注意事项

:::tip

演员实体适用于静态场景元素（如收银员、酒保），可通过[ApplyActorAnimation](ApplyActorAnimation)执行单次或循环动画

:::

:::warning

- 演员系统独立于 NPC 系统，不占用玩家槽位且操作方式不同（最大数量 1000）
- 演员会被车辆推动，建议使用定时器重置位置
- 默认处于无敌状态

:::

## 关联函数

- [DestroyActor](DestroyActor): 销毁演员实体
- [SetActorPos](SetActorPos): 设置演员坐标
- [GetActorPos](GetActorPos): 获取演员坐标
- [GetActorSpawnInfo](GetActorSpawnInfo): 获取初始生成信息
- [SetActorFacingAngle](SetActorFacingAngle): 设置演员朝向角度
- [GetActorFacingAngle](GetActorFacingAngle): 获取当前朝向角度
- [SetActorVirtualWorld](SetActorVirtualWorld): 设置所属虚拟世界
- [GetActorVirtualWorld](GetActorVirtualWorld): 获取所属虚拟世界
- [ApplyActorAnimation](ApplyActorAnimation): 应用演员动画
- [ClearActorAnimations](ClearActorAnimations): 清除所有动画
- [GetActorAnimation](GetActorAnimation): 获取当前播放动画
- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): 检测玩家视角对准的演员
- [IsActorStreamedIn](IsActorStreamedIn): 检测是否流加载
- [SetActorSkin](SetActorSkin): 更换演员皮肤
- [GetActorSkin](GetActorSkin): 获取当前皮肤
- [SetActorHealth](SetActorHealth): 设置生命值
- [GetActorHealth](GetActorHealth): 获取生命值
- [SetActorInvulnerable](SetActorInvulnerable): 设置无敌状态
- [IsActorInvulnerable](IsActorInvulnerable): 检测无敌状态
- [IsValidActor](IsValidActor): 验证 ID 有效性
- [GetActorPoolSize](GetActorPoolSize): 获取最大有效 ID
- [GetPlayerTargetActor](GetPlayerTargetActor): 获取玩家瞄准的演员

## 关联回调

- [OnActorStreamIn](../callbacks/OnActorStreamIn): 演员流加载时触发
- [OnActorStreamOut](../callbacks/OnActorStreamOut): 演员流卸载时触发
- [OnPlayerGiveDamageActor](../callbacks/OnPlayerGiveDamageActor): 玩家攻击演员时触发
