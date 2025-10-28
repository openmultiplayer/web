---
title: NPC_GetVirtualWorld
sidebar_label: NPC_GetVirtualWorld
description: 获取 NPC 所在的虚拟世界。
tags: ["npc"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 所在的虚拟世界。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回虚拟世界 ID，出错时返回 0。

## 示例

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("WorldBot");
    NPC_Spawn(npcid);

    NPC_SetVirtualWorld(npcid, 5); // 设置为虚拟世界5

    new const vw = NPC_GetVirtualWorld(npcid);
    printf("NPC %d在虚拟世界%d中", npcid, vw);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkworld", true))
    {
        new const vw = NPC_GetVirtualWorld(0);
        SendClientMessage(playerid, 0xFFFFFFFF, "NPC 0在虚拟世界%d中", vw);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 虚拟世界允许分离 NPC 和玩家。
- 不同虚拟世界中的 NPC 无法互相看到。
- 虚拟世界 0 是默认世界。

:::

## 相关函数

- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): 设置 NPC 虚拟世界。
- [NPC_GetInterior](NPC_GetInterior): 获取 NPC 室内。
- [NPC_SetInterior](NPC_SetInterior): 设置 NPC 室内。

## 相关回调

- [../callbacks/OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用。
