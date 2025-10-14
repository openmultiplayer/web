---
title: NPC_Move
sidebar_label: NPC_Move
description: 让 NPC 移动到指定位置。
tags: ["npc", "移动"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

让 NPC 移动到指定位置。

| 名称                   | 描述                                      |
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
public OnGameModeInit()
{
    new const npcid = NPC_Create("Walker");
    NPC_Spawn(npcid);

    // 让 NPC 步行到一个位置
    NPC_Move(npcid, 1958.33, 1343.12, 15.36, NPC_MOVE_TYPE_WALK);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/callnpc", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        // 让 NPC 0 跑向玩家
        NPC_Move(0, x, y, z, NPC_MOVE_TYPE_SPRINT, NPC_MOVE_SPEED_AUTO, 2.0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 正在向您走来！");

        return 1;
    }

    if (!strcmp(cmdtext, "/npcpatrol", true))
    {
        // 派遣 NPC 0 到不同区域巡逻
        static const Float:patrolPoints[][3] =
        {
            {1958.0, 1343.0, 15.0},
            {1968.0, 1353.0, 15.0},
            {1978.0, 1363.0, 15.0},
            {1958.0, 1373.0, 15.0}
        };

        new const point = random(sizeof(patrolPoints));

        NPC_Move(0,
            patrolPoints[point][0],
            patrolPoints[point][1],
            patrolPoints[point][2],
            NPC_MOVE_TYPE_JOG
        );

        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 已派遣巡逻");

        return 1;
    }
    return 0;
}

forward NPCPatrolSequence(npcid);
public NPCPatrolSequence(npcid)
{
    if (!NPC_IsValid(npcid))
    {
        return;
    }

    if (NPC_IsMoving(npcid))
    {
        // NPC 仍在移动，稍后再次检查
        SetTimerEx("NPCPatrolSequence", 1000, false, "i", npcid);
        return;
    }

    // NPC 完成移动，发送到下一个位置
    new
        Float:x = 1950.0 + random(50),
        Float:y = 1340.0 + random(50),
        Float:z = 15.36;

    NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_WALK, NPC_MOVE_SPEED_AUTO, 1.0);

    // 安排下次巡逻
    SetTimerEx("NPCPatrolSequence", 10000, false, "i", npcid);
}
```

## 注意事项

:::warning

- NPC 将寻路到目标位置。
- 移动类型影响动画和速度。
- 停止范围决定 NPC 在停止前离目标多近。
- 使用 [NPC_IsMoving](NPC_IsMoving) 检查 NPC 当前是否正在移动
- 可以通过调用 [NPC_StopMove](NPC_StopMove) 中断移动。

:::

## 相关函数

- [NPC_MoveToPlayer](NPC_MoveToPlayer): 让 NPC 移动跟随玩家。
- [NPC_StopMove](NPC_StopMove): 停止 NPC 移动。
- [NPC_IsMoving](NPC_IsMoving): 检查 NPC 是否正在移动。
- [NPC_MoveByPath](NPC_MoveByPath): 让 NPC 沿预定义路径移动。

## 相关回调

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成移动时调用。
