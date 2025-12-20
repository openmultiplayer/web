---
title: NPC_GetVelocity
sidebar_label: NPC_GetVelocity
description: 获取NPC的速度
tags: ["npc", "速度", "移动"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 的速度。

| 参数     | 说明                                    |
| -------- | --------------------------------------- |
| npcid    | NPC 的 ID                               |
| &Float:x | 用于存储 X 速度分量的变量，通过引用传递 |
| &Float:y | 用于存储 Y 速度分量的变量，通过引用传递 |
| &Float:z | 用于存储 Z 速度分量的变量，通过引用传递 |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvelocity", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:velX, Float:velY, Float:velZ;
        NPC_GetVelocity(npcid, velX, velY, velZ);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 的速度: X=%.2f, Y=%.2f, Z=%.2f", npcid, velX, velY, velZ);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 所有速度参数都通过引用传递，将被修改

:::

## 相关函数

- [NPC_SetVelocity](NPC_SetVelocity): 设置 NPC 速度
- [NPC_GetPos](NPC_GetPos): 获取 NPC 位置
- [NPC_Move](NPC_Move): 使 NPC 移动到指定位置

## 相关回调

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): 当 NPC 完成移动时被调用
