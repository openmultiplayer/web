---
title: NPC_Spawn
sidebar_label: NPC_Spawn
description: 将 NPC 生成到游戏世界中。
tags: ["npc"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

将 NPC 生成到游戏世界中，使其可见和活跃。

| 名称  | 描述        |
| ----- | ----------- |
| npcid | NPC 的 ID。 |

## 返回值

如果 NPC 生成成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("Guard");

    if (NPC_IsValid(npcid))
    {
        NPC_Spawn(npcid);
        printf("NPC %d 生成成功", npcid);
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/spawnnpc", true))
    {
        new const npcid = NPC_Create("Bot");
        if (NPC_IsValid(npcid))
        {
            new Float:x, Float:y, Float:z;
            GetPlayerPos(playerid, x, y, z);

            NPC_Spawn(npcid);
            NPC_SetPos(npcid, x + 3.0, y, z);

            SendClientMessage(playerid, 0x00FF00FF, "NPC 已在您附近生成！");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- NPC 在生成前必须使用 [NPC_Create](NPC_Create) 创建。
- 生成使 NPC 在游戏世界中可见和活跃。
- NPC 在被 [NPC_SetPos](NPC_SetPos) 移动之前会出现在默认位置。
- 您只能生成有效的 NPC（使用 [NPC_IsValid](NPC_IsValid) 检查）。

:::

## 相关函数

- [NPC_Create](NPC_Create): 创建新 NPC。
- [NPC_IsValid](NPC_IsValid): 检查 NPC ID 是否有效。
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置。
- [NPC_Destroy](NPC_Destroy): 销毁 NPC。

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用。
- [OnNPCCreate](../callbacks/OnNPCCreate): NPC 创建时调用。
