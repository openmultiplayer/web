---
title: ApplyActorAnimation
sidebar_label: ApplyActorAnimation
description: 为角色应用指定的动画效果
tags: ["角色", "动画"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

为游戏中的 NPC 角色应用指定的动画效果。

| 参数名                   | 说明                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------------- |
| actorid                  | 要应用动画的角色 ID                                                                            |
| const animationLibrary[] | 动画资源库名称                                                                                 |
| const animationName[]    | 动画名称（需在指定资源库中存在）                                                               |
| float:delta              | 动画播放速度（建议使用 4.1）                                                                   |
| bool:loop                | 是否循环播放：true 循环播放，false 单次播放                                                    |
| bool:lockX               | X 轴位置锁定：false 在动画结束后恢复原始 X 坐标（适用于移动类动画），true 保持动画结束时的位置 |
| bool:lockY               | Y 轴位置锁定（参数设置应与 lockX 保持一致）                                                    |
| bool:freeze              | 动画结束后冻结角色：true 冻结角色，false 不冻结                                                |
| time                     | 动画持续时间（毫秒），0 表示无限循环                                                           |

## 返回值

**true** - 动画应用成功

**false** - 执行失败（角色不存在）

## 示例

```c
new gMyActor;

public OnGameModeInit()
{
    // 在武器店创建销售员角色
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0);
    // 应用付款动画
    ApplyActorAnimation(gMyActor, "DEALER", "shop_pay", 4.1, false, false, false, false, 0);
    return 1;
}

public OnPlayerConnect(playerid)
{
    // 为玩家预加载'DEALER'动画库
    ApplyAnimation(playerid, "DEALER", "null", 4.1, false, false, false, false, 0);
    return 1;
}
```

## 重要提示

:::提示

必须通过 ApplyAnimation 为玩家预加载动画资源库，否则角色动画将在下次执行时生效

:::

## 相关函数

- [ClearActorAnimations](ClearActorAnimations): 清除角色当前应用的动画
- [GetActorAnimation](GetActorAnimation): 获取角色当前播放的动画信息
