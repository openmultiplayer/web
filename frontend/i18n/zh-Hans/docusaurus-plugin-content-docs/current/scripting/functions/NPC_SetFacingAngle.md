---
title: NPC_SetFacingAngle
sidebar_label: NPC_SetFacingAngle
description: 设置 NPC 的朝向角度。
tags: ["npc", "角度", "旋转"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

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
public OnGameModeInit()
{
    new const npcid = NPC_Create("Guard");
    NPC_Spawn(npcid);

    // 面向北
    NPC_SetFacingAngle(npcid, 0.0);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/turneast", true))
    {
        // 让 NPC 面向东（270度）
        NPC_SetFacingAngle(0, 270.0);

        SendClientMessage(playerid, 0x00FF00FF, "NPC 现在面向东");
        return 1;
    }

    if (!strcmp(cmdtext, "/faceme", true))
    {
        new
            Float:px, Float:py, Float:pz,
            Float:nx, Float:ny, Float:nz,
            Float:angle;

        GetPlayerPos(playerid, px, py, pz);
        NPC_GetPos(0, nx, ny, nz);

        // 计算面向玩家的角度
        angle = atan2(py - ny, px - nx) - 90.0;
        NPC_SetFacingAngle(0, angle);

        SendClientMessage(playerid, 0x00FF00FF, "NPC 现在面向你");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 角度以度为单位测量（0-360）。
- 在 GTA:SA 中角度是相反的；在现实世界中 90 度是东，但在 GTA:SA 中 90 度实际上是西。北和南仍然是 0/360 和 180。要转换这个，只需做 360 - angle。
- 使用 [NPC_GetFacingAngle](NPC_GetFacingAngle) 获取当前朝向角度。
- 立即旋转 NPC，没有动画。

:::

## 相关函数

- [NPC_GetFacingAngle](NPC_GetFacingAngle): 获取 NPC 朝向角度。
- [NPC_SetRot](NPC_SetRot): 设置 NPC 旋转（X, Y, Z）。
- [NPC_GetRot](NPC_GetRot): 获取 NPC 旋转。
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置。
