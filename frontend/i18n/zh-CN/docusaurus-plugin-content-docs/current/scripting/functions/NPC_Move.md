---
title: NPC_Move
sidebar_label: NPC_Move
description: 让 NPC 移动到指定位置。
tags: ["npc", "移动"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

让 NPC 移动到指定位置。

| 参数                   | 说明                                      |
| ---------------------- | ----------------------------------------- |
| npcid                  | NPC 的 ID。                               |
| Float:x                | 要移动到的 X 坐标。                       |
| Float:y                | 要移动到的 Y 坐标。                       |
| Float:z                | 要移动到的 Z 坐标。                       |
| NPC_MOVE_TYPE:moveType | 移动类型（默认: `NPC_MOVE_TYPE_JOG`）。   |
| Float:moveSpeed        | 移动速度（默认: `NPC_MOVE_SPEED_AUTO`）。 |
| Float:stopRange        | 停止前到目标的距离（默认: 0.2）。         |

## 返回值

如果移动成功开始则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcmove", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_JOG, NPC_MOVE_SPEED_AUTO, 0.2);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在移动到 (%.2f, %.2f, %.2f)", npcid, x, y, z);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- NPC 将寻路到目标位置。
- 移动类型影响动画和速度。
- 停止范围决定 NPC 在停止前离目标多近。
- 使用 [NPC_IsMoving](NPC_IsMoving) 检查 NPC 当前是否正在移动

:::

## 相关函数

- [NPC_MoveToPlayer](NPC_MoveToPlayer): 让 NPC 移动跟随玩家。
- [NPC_StopMove](NPC_StopMove): 停止 NPC 移动。
- [NPC_IsMoving](NPC_IsMoving): 检查 NPC 是否正在移动。
- [NPC_MoveByPath](NPC_MoveByPath): 让 NPC 沿预定义路径移动。

## 相关回调

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成移动时调用。
