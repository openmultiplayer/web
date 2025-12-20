---
title: NPC_GetPosMovingTo
sidebar_label: NPC_GetPosMovingTo
description: 获取NPC当前正在移动前往的目标位置。
tags: ["npc", "位置", "移动"]
---

<VersionWarn version='omp v1.5.8.3079' />

## 描述

获取 NPC 当前正在移动前往的目标位置。

| 名称     | 描述                                          |
| -------- | --------------------------------------------- |
| npcid    | NPC 的 ID。                                   |
| &Float:x | 用于存储目标位置 X 坐标的变量，通过引用传递。 |
| &Float:y | 用于存储目标位置 Y 坐标的变量，通过引用传递。 |
| &Float:z | 用于存储目标位置 Z 坐标的变量，通过引用传递。 |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkposmovingto", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        if (!NPC_IsMoving(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "NPC %d 当前没有移动。", npcid);

        new Float:x, Float:y, Float:z;
        NPC_GetPosMovingTo(npcid, x, y, z);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 的目标位置：%.2f, %.2f, %.2f", npcid, x, y, z);
        return 1;
    }
    return 0;
}
```

## 说明

:::warning

- 所有坐标参数均通过引用传递，其值将被修改。
- 此函数返回的是 NPC 正在移动前往的目标位置，而非当前位置。
- 在调用此函数前，建议使用 [NPC_IsMoving](NPC_IsMoving) 来检查 NPC 当前是否正在移动。

:::

## 相关函数

- [NPC_Move](NPC_Move): 使 NPC 移动到指定位置。
- [NPC_IsMoving](NPC_IsMoving): 检查 NPC 是否正在移动。
- [NPC_GetPos](NPC_GetPos): 获取 NPC 的当前位置。
- [NPC_StopMove](NPC_StopMove): 停止 NPC 的移动。

## 相关回调

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): 当 NPC 完成移动时调用。
