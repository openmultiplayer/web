---
title: NPC_GetRot
sidebar_label: NPC_GetRot
description: 获取 NPC 的旋转角度。
tags: ["npc", "旋转"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

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
public OnGameModeInit()
{
    new const npcid = NPC_Create("RotationBot");
    NPC_Spawn(npcid);

    NPC_SetRot(npcid, 15.0, 90.0, 0.0);

    new Float:rx, Float:ry, Float:rz;
    NPC_GetRot(npcid, rx, ry, rz);
    printf("NPC %d旋转: %.2f, %.2f, %.2f", npcid, rx, ry, rz);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcrot", true))
    {
        new Float:rx, Float:ry, Float:rz;
        NPC_GetRot(0, rx, ry, rz);

        SendClientMessage(playerid, 0xFFFFFFFF, "NPC 0旋转: %.1f, %.1f, %.1f", rx, ry, rz);
        return 1;
    }

    if (!strcmp(cmdtext, "/copynpcrot", true))
    {
        new Float:rx, Float:ry, Float:rz;
        NPC_GetRot(0, rx, ry, rz);

        // 将NPC 0的旋转复制给玩家
        SetPlayerFacingAngle(playerid, rz);

        SendClientMessage(playerid, 0x00FF00FF, "已复制NPC 0旋转: %.1f 度", rz);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 所有旋转参数都通过引用传递且会被修改。
- 旋转值以度为单位。
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
