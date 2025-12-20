---
title: NPC_GetPos
sidebar_label: NPC_GetPos
description: 获取 NPC 的位置。
tags: ["npc", "位置"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 的位置。

| 参数     | 说明                                  |
| -------- | ------------------------------------- |
| npcid    | NPC 的 ID。                           |
| &Float:x | 用于存储 X 坐标的变量，通过引用传递。 |
| &Float:y | 用于存储 Y 坐标的变量，通过引用传递。 |
| &Float:z | 用于存储 Z 坐标的变量，通过引用传递。 |

## 返回值

若成功获取位置则返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpos", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:x, Float:y, Float:z;
        NPC_GetPos(npcid, x, y, z);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 位置: %.2f, %.2f, %.2f", npcid, x, y, z);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 所有坐标参数都通过引用传递且会被修改。

:::

## 相关函数

- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置。
- [NPC_GetRot](NPC_GetRot): 获取 NPC 旋转。
- [NPC_SetRot](NPC_SetRot): 设置 NPC 旋转。
- [NPC_GetFacingAngle](NPC_GetFacingAngle): 获取朝向角度。

## 相关回调

- [../callbacks/OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用。
- [../callbacks/OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成移动时调用。
