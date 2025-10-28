---
title: NPC_GetFacingAngle
sidebar_label: NPC_GetFacingAngle
description: 获取 NPC 的朝向角度。
tags: ["npc", "角度"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

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
public OnGameModeInit()
{
    new const npcid = NPC_Create("Bot");
    NPC_Spawn(npcid);

    NPC_SetFacingAngle(npcid, 90.0);

    new Float:angle;
    NPC_GetFacingAngle(npcid, angle);
    printf("NPC %d的朝向角度为 %.2f", npcid, angle); // 输出: 90.00

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/getangle", true))
    {
        new Float:angle;
        NPC_GetFacingAngle(0, angle);

        SendClientMessage(playerid, 0xFFFFFFFF, "NPC 0角度: %.2f 度", angle);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 角度通过引用传递且会被修改。
- 角度以度为单位（0.0 到 360.0）。
- 在 GTA:SA 中角度是反向的；现实世界中 90 度应为东向，但在 GTA:SA 中 90 度实际上是西向。北向和南向仍然是 0/360 和 180 度。要转换此角度，只需计算 360 - angle。
- 此函数获取的是 2D 朝向角度，而非完整的 3D 旋转。

:::

## 相关函数

- [NPC_SetFacingAngle](NPC_SetFacingAngle): 设置 NPC 朝向角度。
- [NPC_GetRot](NPC_GetRot): 获取完整 3D 旋转。
- [NPC_SetRot](NPC_SetRot): 设置完整 3D 旋转。
- [NPC_GetPos](NPC_GetPos): 获取 NPC 位置。

## 相关回调

- [../callbacks/OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用。
