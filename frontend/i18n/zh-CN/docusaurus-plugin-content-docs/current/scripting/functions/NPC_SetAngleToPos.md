---
title: NPC_SetAngleToPos
sidebar_label: NPC_SetAngleToPos
description: 旋转NPC，使其朝向特定的世界坐标位置。
tags: ["npc", "角度", "位置"]
---

<VersionWarn version='omp v1.5.8.3079' />

## 描述

旋转 NPC，使其朝向特定的世界坐标位置。

| 参数    | 说明                |
| ------- | ------------------- |
| npcid   | NPC 的 ID。         |
| Float:x | 目标位置的 X 坐标。 |
| Float:y | 目标位置的 Y 坐标。 |
| Float:z | 目标位置的 Z 坐标。 |

## 返回值

如果 NPC 旋转成功，返回`true`；否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/lookatpos", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_SetAngleToPos(npcid, x + 3.0, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正朝向 %.2f, %.2f, %.2f", npcid, x + 3.0, y, z);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 计算朝向角度时，仅考虑水平面（X/Y 坐标）。
- NPC 不会移动；仅执行旋转操作以朝向目标位置。

:::

## 相关函数

- [NPC_SetFacingAngle](NPC_SetFacingAngle)：设置精确的角度值。
- [NPC_SetAngleToPlayer](NPC_SetAngleToPlayer)：自动朝向特定玩家。
- [NPC_GetFacingAngle](NPC_GetFacingAngle)：获取 NPC 当前的朝向角度。
- [NPC_Move](NPC_Move)：将 NPC 移动至指定坐标位置。
