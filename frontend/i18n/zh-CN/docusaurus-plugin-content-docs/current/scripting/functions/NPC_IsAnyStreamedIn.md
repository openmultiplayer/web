---
title: NPC_IsAnyStreamedIn
sidebar_label: NPC_IsAnyStreamedIn
description: 检查 NPC 是否对任何玩家已流加载。
tags: ["npc", "流加载"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 是否对服务器上的任何玩家已流加载。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 对至少一个玩家已流加载则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkanystreamedin", true))
    {
        new bool:anyStreamed = NPC_IsAnyStreamedIn(playerid);

        SendClientMessage(playerid, 0x00FF00FF, "任何NPC已对你流加载: %s", anyStreamed ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 当 NPC 在玩家的流加载范围内时已流加载

## 相关函数

- [NPC_IsStreamedIn](NPC_IsStreamedIn): 检查是否对特定玩家流加载
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): 设置 NPC 虚拟世界
- [NPC_SetInterior](NPC_SetInterior): 设置 NPC 室内

## 相关回调

- [../callbacks/OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用
