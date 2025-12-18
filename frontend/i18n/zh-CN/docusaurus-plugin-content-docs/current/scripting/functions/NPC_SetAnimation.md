---
title: NPC_SetAnimation
sidebar_label: NPC_SetAnimation
description: 通过动画 ID 为 NPC 设置动画。
tags: ["npc", "动画"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

使用动画 ID 为 NPC 设置动画。

| 参数        | 说明                                   |
| ----------- | -------------------------------------- |
| npcid       | NPC 的 ID                              |
| animationid | 要设置的动画 ID                        |
| delta       | 动画速度（通常为 4.1）                 |
| loop        | 动画是否循环                           |
| lockX       | 动画期间锁定 X 轴移动                  |
| lockY       | 动画期间锁定 Y 轴移动                  |
| freeze      | 动画后冻结 NPC                         |
| time        | 动画持续时间，以毫秒为单位（0 = 无限） |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setdance", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        NPC_SetAnimation(npcid, 405, 4.1, true, false, false, false, 0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 已设置动画。", npcid);

        SetTimerEx("ClearNPCAnimations", 25000, false, "ii", playerid, npcid);

        return 1;
    }
    return 0;
}

forward ClearNPCAnimations(playerid, npcid);
public ClearNPCAnimations(playerid, npcid)
{

    NPC_ClearAnimations(npcid);
    SendClientMessage(playerid, 0x00FF00FF, "NPC %d 动画已清除。", npcid);
}
```

## 注意事项

- 动画 ID 对应 GTA San Andreas 动画索引
- 使用 `NPC_ApplyAnimation` 通过库名和名称设置动画

## 相关函数

- [NPC_ApplyAnimation](NPC_ApplyAnimation): 通过名称应用动画
- [NPC_ClearAnimations](NPC_ClearAnimations): 清除所有动画
- [NPC_ResetAnimation](NPC_ResetAnimation): 重置为默认姿态

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 出生时调用
