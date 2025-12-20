---
title: NPC_SetFacingAngle
sidebar_label: NPC_SetFacingAngle
description: 设置 NPC 的朝向角度。
tags: ["npc", "角度", "旋转"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 的朝向角度。

| 参数        | 说明                          |
| ----------- | ----------------------------- |
| npcid       | NPC 的 ID                     |
| Float:angle | 朝向角度，以度为单位（0-360） |

## 返回值

如果朝向角度设置成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setfacingangle ", true, 16))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:angle = floatstr(cmdtext[16]);
        if (angle < 0.0 || angle > 360.0)
            return SendClientMessage(playerid, 0xFF0000FF, "角度必须在0.0和360.0之间。");

        NPC_SetFacingAngle(npcid, angle);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 朝向角度设置为 %.1f", npcid, angle);

        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 角度以度为单位测量（0-360）。
- 使用 [NPC_GetFacingAngle](NPC_GetFacingAngle) 获取当前朝向角度。
- 立即旋转 NPC，没有动画。

:::

## 相关函数

- [NPC_GetFacingAngle](NPC_GetFacingAngle): 获取 NPC 朝向角度。
- [NPC_SetRot](NPC_SetRot): 设置 NPC 旋转（X, Y, Z）。
- [NPC_GetRot](NPC_GetRot): 获取 NPC 旋转。
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置。
