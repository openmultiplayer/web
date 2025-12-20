---
title: NPC_GetRot
sidebar_label: NPC_GetRot
description: 获取 NPC 的旋转角度。
tags: ["npc", "旋转"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 在 3D 空间中的旋转角度。

| 参数     | 说明                                            |
| -------- | ----------------------------------------------- |
| npcid    | NPC 的 ID。                                     |
| &Float:x | 用于存储 X 旋转（俯仰角）的变量，通过引用传递。 |
| &Float:y | 用于存储 Y 旋转（偏航角）的变量，通过引用传递。 |
| &Float:z | 用于存储 Z 旋转（翻滚角）的变量，通过引用传递。 |

## 返回值

若成功获取旋转角度则返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkrot", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:rotX, Float:rotY, Float:rotZ;
        NPC_GetRot(npcid, rotX, rotY, rotZ);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 旋转: X=%.2f, Y=%.2f, Z=%.2f", npcid, rotX, rotY, rotZ);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 所有旋转参数都通过引用传递且会被修改。
- X = 俯仰角（上下），Y = 偏航角（左右），Z = 翻滚角（倾斜）。
- 对于简单的朝向，请改用 [NPC_GetFacingAngle](NPC_GetFacingAngle)。

:::

## 相关函数

- [NPC_SetRot](NPC_SetRot): 设置 NPC 旋转。
- [NPC_GetFacingAngle](NPC_GetFacingAngle): 仅获取朝向角度。
- [NPC_SetFacingAngle](NPC_SetFacingAngle): 仅设置朝向角度。
- [NPC_GetPos](NPC_GetPos): 获取 NPC 位置。

## 相关回调

- [../callbacks/OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用。
