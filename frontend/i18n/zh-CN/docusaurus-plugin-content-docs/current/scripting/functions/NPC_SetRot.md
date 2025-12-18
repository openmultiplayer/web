---
title: NPC_SetRot
sidebar_label: NPC_SetRot
description: 设置 NPC 在所有轴上的旋转。
tags: ["npc", "旋转", "角度"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 在所有三个轴（X、Y、Z）上的旋转。

| 参数    | 说明                   |
| ------- | ---------------------- |
| npcid   | NPC 的 ID。            |
| Float:x | X 轴旋转，以度为单位。 |
| Float:y | Y 轴旋转，以度为单位。 |
| Float:z | Z 轴旋转，以度为单位。 |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setrandomrot", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:x = float(random(360));
        new Float:y = float(random(360));
        new Float:z = float(random(360));

        NPC_SetRot(npcid, x, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 随机旋转", npcid);

        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 旋转值以度为单位（0-360）。
- Z 轴旋转影响面向方向（与 [NPC_SetFacingAngle](NPC_SetFacingAngle) 相同）。
- X 和 Y 旋转可以创建倾斜或倒立的 NPC。
- 使用 [NPC_GetRot](NPC_GetRot) 检索当前旋转值。

:::

## 相关函数

- [NPC_GetRot](NPC_GetRot): 获取 NPC 旋转。
- [NPC_SetFacingAngle](NPC_SetFacingAngle): 仅设置面向角度。
- [NPC_GetFacingAngle](NPC_GetFacingAngle): 获取面向角度。
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置。
