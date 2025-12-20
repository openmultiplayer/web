---
title: NPC_GetFacingAngle
sidebar_label: NPC_GetFacingAngle
description: 获取 NPC 的朝向角度。
tags: ["npc", "角度"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 的朝向角度。

| 参数         | 说明                                   |
| ------------ | -------------------------------------- |
| npcid        | NPC 的 ID。                            |
| &Float:angle | 用于存储朝向角度的变量，通过引用传递。 |

## 返回值

若成功获取朝向角度则返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkfacingangle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:angle;
        NPC_GetFacingAngle(npcid, angle);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 的朝向角度为：%.2f", npcid, angle);
        return 1;
    }

    return 0;
}
```

## 注意事项

:::warning

- 角度通过引用传递且会被修改。
- 角度以度为单位（0.0 到 360.0）。
- GTA：SA 中的角度是逆时针方向的;在现实世界中，90 度是东方，但在 GTA：SA 中，90 度实际上是西方。北方和南方仍然是 0/360 和 180。要将 GTA：SA 角度转换为现实世界的指南针角度，只需执行 360 - 角度 即可。

:::

## 相关函数

- [NPC_SetFacingAngle](NPC_SetFacingAngle): 设置 NPC 朝向角度。
- [NPC_GetRot](NPC_GetRot): 获取完整 3D 旋转。
- [NPC_SetRot](NPC_SetRot): 设置完整 3D 旋转。
- [NPC_GetPos](NPC_GetPos): 获取 NPC 位置。

## 相关回调

- [../callbacks/OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用。
