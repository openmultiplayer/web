---
title: NPC_ClearAnimations
sidebar_label: NPC_ClearAnimations
description: 清除 NPC 的所有动画。
tags: ["npc", "动画"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

清除 NPC 的所有动画，使其恢复到默认状态。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/applydance", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        NPC_ApplyAnimation(npcid, "DANCING", "dance_loop", 4.1, true, false, false, false, 0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 已应用动画。", npcid);

        SetTimerEx("ClearNPCAnimations", 25000, false, "ii", playerid, npcid);

        return 1;
    }
    return 0;
}

forward ClearNPCAnimations(playerid, npcid);
public ClearNPCAnimations(playerid, npcid)
{

    NPC_ClearAnimations(npcid);
    SendClientMessage(playerid, 0x00FF00FF, "NPC %d 的动画已清除。", npcid);
}

```

## 注意事项

- 此函数会停止所有当前播放的动画，包括循环动画
- NPC 将恢复到默认的闲置姿态

## 相关函数

- [NPC_ApplyAnimation](NPC_ApplyAnimation): 为 NPC 应用动画
- [NPC_SetAnimation](NPC_SetAnimation): 通过 ID 设置动画
- [NPC_ResetAnimation](NPC_ResetAnimation): 重置动画状态
- [NPC_GetAnimation](NPC_GetAnimation): 获取当前动画数据

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用
