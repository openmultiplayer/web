---
title: NPC_SetSurfingPlayerObject
sidebar_label: NPC_SetSurfingPlayerObject
description: 设置 NPC 正在冲浪的玩家对象。
tags: ["npc", "冲浪"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 正在冲浪的玩家对象。

| 参数     | 说明        |
| -------- | ----------- |
| npcid    | NPC 的 ID   |
| objectid | 玩家对象 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setnpcsurfing", true))
    {
        new npcid = NPC_Create("SurfingBot");
        new objectid = CreatePlayerObject(playerid, 1225, 1958.33, 1343.12, 15.36, 0.0, 0.0, 0.0);

        NPC_Spawn(npcid);
        NPC_SetPos(npcid, 1958.33, 1343.12, 17.36);
        NPC_SetSurfingPlayerObject(npcid, objectid);
        SendClientMessage(playerid, 0xFFFFFFFF, "NPC 现在正在您的对象上冲浪！");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 如果玩家对象移动，NPC 将随之移动
- 玩家对象是专门为单个玩家创建的客户端对象
- 玩家对象必须存在才能正常冲浪

## 相关函数

- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): 获取 NPC 正在冲浪的玩家对象
- [NPC_SetSurfingObject](NPC_SetSurfingObject): 设置 NPC 正在冲浪的对象
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): 设置 NPC 正在冲浪的车辆
- [NPC_SetSurfingOffset](NPC_SetSurfingOffset): 设置 NPC 的冲浪偏移
- [NPC_ResetSurfingData](NPC_ResetSurfingData): 重置 NPC 的所有冲浪数据

## 相关回调

_此函数不会触发任何特定的回调。_
