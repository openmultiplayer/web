---
title: NPC_SetAngleToPlayer
sidebar_label: NPC_SetAngleToPlayer
description: 使一个NPC朝向特定的玩家旋转。
tags: ["npc", "角度", "玩家"]
---

<VersionWarn version='omp v1.5.8.3079' />

## 描述

通过使用玩家当前的位置，旋转 NPC 使其朝向特定的玩家。

| 参数     | 说明                      |
| -------- | ------------------------- |
| npcid    | NPC 的 ID。               |
| playerid | NPC 应当朝向的玩家的 ID。 |

## 返回值

如果 NPC 旋转成功，返回`true`；否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/lookatme", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        if (!IsPlayerConnected(playerid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的玩家。");

        NPC_SetAngleToPlayer(npcid, playerid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正朝向你。", npcid);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 此函数执行一次性旋转；若要使 NPC 持续朝向移动中的玩家，需重复调用。
- 玩家必须处于连接状态，否则 NPC 将不会旋转。
- 内部通过玩家当前位置调用[NPC_SetAngleToPos](NPC_SetAngleToPos)实现。

:::

## 相关函数

- [NPC_SetAngleToPos](NPC_SetAngleToPos)：朝向特定坐标旋转。
- [NPC_SetFacingAngle](NPC_SetFacingAngle)：设置一个数值角度。
- [NPC_GetFacingAngle](NPC_GetFacingAngle)：获取 NPC 当前的朝向角度。
- [NPC_MoveToPlayer](NPC_MoveToPlayer)：将 NPC 移动至玩家所在位置。
