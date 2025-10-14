---
title: NPC_GetAnimation
sidebar_label: NPC_GetAnimation
description: 获取 NPC 的当前动画数据。
tags: ["npc", "动画"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 的当前动画数据。

| 名称         | 描述                     |
| ------------ | ------------------------ |
| npcid        | NPC 的 ID                |
| &animationId | 存储动画 ID 的变量       |
| &delta       | 存储动画速度的变量       |
| &loop        | 存储动画是否循环的变量   |
| &lockX       | 存储 X 轴锁定状态的变量  |
| &lockY       | 存储 Y 轴锁定状态的变量  |
| &freeze      | 存储结束时冻结状态的变量 |
| &time        | 存储动画时间的变量       |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcaniminfo", true))
    {
        new npcid = 0; // 第一个 NPC
        if (NPC_IsValid(npcid))
        {
            new animId, Float:delta, bool:loop, bool:lockX, bool:lockY, bool:freeze, time;
            NPC_GetAnimation(npcid, animId, delta, loop, lockX, lockY, freeze, time);

            new msg[256];
            format(msg, sizeof(msg),
                "NPC %d 动画 - ID: %d, 速度: %.2f, 循环: %d, 锁定X: %d, 锁定Y: %d, 冻结: %d, 时间: %d",
                npcid, animId, delta, loop, lockX, lockY, freeze, time);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        return 1;
    }
    return 0;
}

forward CheckNPCAnimations();
public CheckNPCAnimations()
{
    new animId, Float:delta, bool:loop, bool:lockX, bool:lockY, bool:freeze, time;
    NPC_GetAnimation(0, animId, delta, loop, lockX, lockY, freeze, time);

    if (animId != 0)
    {
        printf("NPC 0 正在播放动画 %d", animId);
    }
}
```

## 注意事项

- 除 npcid 外的所有参数都通过引用传递，将被修改
- 如果 NPC 没有活动动画，animationId 将为 0
- Delta 表示动画速度倍数
- 锁定参数表示动画期间的移动限制
- 时间表示持续时间（0 = 无限）

## 相关函数

- [NPC_SetAnimation](NPC_SetAnimation): 按 ID 设置动画
- [NPC_ApplyAnimation](NPC_ApplyAnimation): 按名称应用动画
- [NPC_ClearAnimations](NPC_ClearAnimations): 清除所有动画
- [NPC_ResetAnimation](NPC_ResetAnimation): 重置动画状态

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): 当 NPC 生成时调用
