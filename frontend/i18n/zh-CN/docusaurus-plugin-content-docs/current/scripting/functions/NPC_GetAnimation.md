---
title: NPC_GetAnimation
sidebar_label: NPC_GetAnimation
description: 获取 NPC 的当前动画数据。
tags: ["npc", "动画"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 的当前动画数据。

| 参数         | 说明                     |
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
    if (!strcmp(cmdtext, "/getanim", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        new animid, time;
        new Float:delta;
        new bool:loop, bool:lockX, bool:lockY, bool:freeze;

        if (!NPC_GetAnimation(npcid, animid, delta, loop, lockX, lockY, freeze, time))
            return SendClientMessage(playerid, 0xFF0000FF, "获取动画数据失败（可能没有活动动画）。");

        SendClientMessage(playerid, 0xFFFFFFFF, "NPC %d 动画ID：%d | 速度：%.2f | 循环：%d | 锁定X：%d | 锁定Y：%d | 冻结：%d | 时间：%d",
            npcid, animid, delta, _:loop, _:lockX, _:lockY, _:freeze, time);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 如果与 [NPC_SetAnimation](NPC_SetAnimation) 一起使用，此函数不会返回数据
- 除 npcid 外的所有参数都通过引用传递，将被修改
- 如果 NPC 没有活动动画，animationId 将为 0

## 相关函数

- [NPC_SetAnimation](NPC_SetAnimation): 通过 ID 设置动画
- [NPC_ApplyAnimation](NPC_ApplyAnimation): 通过名称应用动画
- [NPC_ClearAnimations](NPC_ClearAnimations): 清除所有动画
- [NPC_ResetAnimation](NPC_ResetAnimation): 重置动画状态

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用
