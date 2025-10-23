---
title: NPC_GetAll
sidebar_label: NPC_GetAll
description: 获取所有 NPC ID 并存储在数组中。
tags: ["npc"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取所有 NPC ID 并存储在数组中。

| 名称   | 描述                               |
| ------ | ---------------------------------- |
| npcs[] | 存储 NPC ID 的数组，通过引用传递。 |
| size   | 数组的大小。                       |

## 返回值

返回找到的 NPC 数量。

## 示例

```c
public OnGameModeInit()
{
    // 创建一些 NPC
    new bot[3] = {INVALID_NPC_ID, ...};

    bot[0] = NPC_Create("Bot1");
    bot[1] = NPC_Create("Bot2");
    bot[2] = NPC_Create("Bot3");

    for (new i; i < sizeof(bot); i++)
    {
        NPC_Spawn(bot[i]);
    }

    // 获取所有 NPC
    new npcs[MAX_NPCS];
    new const count = NPC_GetAll(npcs);

    printf("服务器上的 NPC 总数: %d", count);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/countnpcs", true))
    {
        new npcs[MAX_NPCS];
        new const count = NPC_GetAll(npcs);

        SendClientMessage(playerid, 0x00FF00FF, "服务器上有 %d 个 NPC", count);

        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 数组必须足够大以容纳所有 NPC ID。
- 只有有效的 NPC 包含在数组中。
- 函数返回实际找到的 NPC 数量。
- 使用此函数遍历服务器上的所有 NPC。

:::

## 相关函数

- [NPC_Create](NPC_Create): 创建新的 NPC。
- [NPC_IsValid](NPC_IsValid): 检查 NPC ID 是否有效。
- [NPC_Destroy](NPC_Destroy): 销毁 NPC。

## 相关回调

- [OnNPCCreate](../callbacks/OnNPCCreate): 当 NPC 被创建时调用。
