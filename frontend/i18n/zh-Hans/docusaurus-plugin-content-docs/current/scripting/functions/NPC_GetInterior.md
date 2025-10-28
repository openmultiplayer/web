---
title: NPC_GetInterior
sidebar_label: NPC_GetInterior
description: 获取 NPC 的室内场景ID。
tags: ["npc", "室内场景"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 的室内场景 ID。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 当前所在的室内场景 ID。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("IndoorBot");
    NPC_Spawn(npcid);

    NPC_SetInterior(npcid, 1); // 设置为室内场景1

    new interior = NPC_GetInterior(npcid);
    printf("NPC %d 在室内场景%d 中", npcid, interior); // 输出: 1

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkinterior", true))
    {
        new interior = NPC_GetInterior(0);
        new virtualworld = NPC_GetVirtualWorld(0);

        new msg[64];
        format(msg, sizeof(msg), "NPC 0: 室内场景%d, 虚拟世界 %d", interior, virtualworld);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 室内场景 0 是主世界（室外）
- 不同的室内有不同的环境和对象
- NPC 必须与玩家在同一室内才能交互
- 在不同室内之间移动 NPC 可能需要重新定位

## 相关函数

- [NPC_SetInterior](NPC_SetInterior): 设置 NPC 室内场景
- [NPC_GetVirtualWorld](NPC_GetVirtualWorld): 获取 NPC 虚拟世界
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): 设置 NPC 虚拟世界
- [NPC_GetPos](NPC_GetPos): 获取 NPC 位置

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): 当 NPC 生成时调用
