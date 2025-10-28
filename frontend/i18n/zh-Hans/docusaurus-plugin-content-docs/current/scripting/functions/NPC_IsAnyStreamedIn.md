---
title: NPC_IsAnyStreamedIn
sidebar_label: NPC_IsAnyStreamedIn
description: 检查 NPC 是否对任何玩家已流加载。
tags: ["npc", "流加载"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 是否对服务器上的任何玩家已流加载。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 对至少一个玩家已流加载则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("SecurityGuard");
    NPC_Spawn(npcid);
    NPC_SetPos(npcid, 1958.33, 1343.12, 15.36);

    // 开始监控流加载状态
    SetTimer("MonitorNPCStreaming", 5000, true);

    return 1;
}

forward MonitorNPCStreaming();
public MonitorNPCStreaming()
{
    if (NPC_IsAnyStreamedIn(0))
    {
        printf("NPC 0对至少一个玩家可见");
    }
    else
    {
        printf("NPC 0对任何玩家都不可见");
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknpcvisibility", true))
    {
        if (NPC_IsAnyStreamedIn(0))
        {
            // 计算有多少玩家可以看到NPC
            new visibleCount = 0;
            for (new i = 0; i < MAX_PLAYERS; i++)
            {
                if (IsPlayerConnected(i) && NPC_IsStreamedIn(0, i))
                {
                    visibleCount++;
                }
            }

            new msg[128];
            format(msg, sizeof(msg), "NPC 0对%d个玩家可见", visibleCount);
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0对任何人都不可见");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/optimizeprocessing", true))
    {
        // 性能优化示例
        if (NPC_IsAnyStreamedIn(0))
        {
            // NPC可见，处理AI逻辑
            new Float:x, Float:y, Float:z;
            NPC_GetPos(0, x, y, z);

            new msg[128];
            format(msg, sizeof(msg), "正在处理NPC 0的AI，位置%.1f, %.1f, %.1f", x, y, z);
            SendClientMessage(playerid, 0xFFFF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0x808080FF, "跳过NPC 0处理 - 不可见");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 当 NPC 在玩家的流加载范围内时已流加载
- 使用此函数通过仅处理可见 NPC 来优化性能
- 在所有玩家范围外的 NPC 不会流加载
- 流加载取决于距离、虚拟世界和室内
- 非常适合 AI 系统中的性能优化

## 相关函数

- [NPC_IsStreamedIn](NPC_IsStreamedIn): 检查是否对特定玩家流加载
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): 设置 NPC 虚拟世界
- [NPC_SetInterior](NPC_SetInterior): 设置 NPC 室内

## 相关回调

- [../callbacks/OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用
