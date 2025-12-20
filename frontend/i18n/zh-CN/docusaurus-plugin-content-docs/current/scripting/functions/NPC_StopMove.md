---
title: NPC_StopMove
sidebar_label: NPC_StopMove
description: 停止 NPC 的移动。
tags: ["npc", "移动"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

停止 NPC 向当前目标的移动。

| 参数  | 说明        |
| ----- | ----------- |
| npcid | NPC 的 ID。 |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcstopmove", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:success = NPC_StopMove(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 停止移动：%s", npcid, success ? "成功" : "失败");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 这会让 NPC 在当前位置停止。
- 如果 NPC 没有在移动，此函数无效。
- NPC 将保持在停止的位置，直到收到新的移动命令。
- 使用 [NPC_IsMoving](NPC_IsMoving) 检查 NPC 当前是否在移动。

## 相关函数

- [NPC_Move](NPC_Move): 让 NPC 移动到位置。
- [NPC_IsMoving](NPC_IsMoving): 检查 NPC 是否在移动。
- [NPC_MoveByPath](NPC_MoveByPath): 让 NPC 沿路径移动。
- [NPC_SetPos](NPC_SetPos): 立即设置 NPC 位置。

## 相关回调

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成移动时调用。
