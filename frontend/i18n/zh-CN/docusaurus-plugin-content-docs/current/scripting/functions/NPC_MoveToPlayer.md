---
title: NPC_MoveToPlayer
sidebar_label: NPC_MoveToPlayer
description: 让 NPC 移向并跟随玩家。
tags: ["npc", "移动", "玩家", "跟随"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

让 NPC 移向并跟随玩家。

| 参数                   | 说明                                          |
| ---------------------- | --------------------------------------------- |
| npcid                  | NPC 的 ID。                                   |
| playerid               | 要移向的玩家的 ID。                           |
| NPC_MOVE_TYPE:moveType | 移动类型（默认: `NPC_MOVE_TYPE_JOG`）。       |
| Float:moveSpeed        | 移动速度（默认: `NPC_MOVE_SPEED_AUTO`）。     |
| Float:stopRange        | 距离玩家的停止距离（默认: 0.2）               |
| updateDelayMS          | 位置检查更新延迟，以毫秒为单位（默认: 500）。 |
| bool:autoRestart       | 是否自动重新开始跟随（默认: false）。         |

## 返回值

成功时返回`true`，失败时返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcmovetoplayer", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        NPC_MoveToPlayer(npcid, playerid, NPC_MOVE_TYPE_JOG, NPC_MOVE_SPEED_AUTO, 0.2, 500, false);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 现在正在跟随你", npcid);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- NPC 将持续跟随目标玩家直到被停止。
- `updateDelayMS` 参数控制 NPC 更新目标位置的频率。
- 较低的 `updateDelayMS` 值提供更平滑的跟随但使用更多资源。
- `autoRestart` 参数决定跟随在中断后是否恢复。
- 当目标玩家断开连接时跟随停止。

:::

## 相关函数

- [NPC_Move](NPC_Move): 将 NPC 移动到特定位置。
- [NPC_StopMove](NPC_StopMove): 停止 NPC 移动。
- [NPC_IsMoving](NPC_IsMoving): 检查 NPC 是否正在移动。
- [NPC_MoveByPath](NPC_MoveByPath): 让 NPC 沿预定义路径移动。

## 相关回调

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 到达目标时调用（连续跟随时不调用）。
